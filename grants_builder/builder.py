"""Build all grant viewers from grant directories."""

import json
import yaml
from pathlib import Path

from .utils import strip_markdown_formatting
from .exporter import export_response


def _old_strip_markdown_formatting(text):
    """Remove markdown formatting to get plain text."""
    # Remove headers
    text = re.sub(r"^#+\s+", "", text, flags=re.MULTILINE)
    # Remove bold/italic
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"__([^_]+)__", r"\1", text)
    text = re.sub(r"_([^_]+)_", r"\1", text)
    # Remove links but keep text
    text = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", text)
    # Remove list markers
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.MULTILINE)
    # Remove code blocks
    text = re.sub(r"```[^`]*```", "", text, flags=re.DOTALL)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    # Remove blockquotes
    text = re.sub(r"^>\s+", "", text, flags=re.MULTILINE)
    # Clean up extra whitespace
    text = re.sub(r"\n\n+", "\n\n", text)
    return text.strip()


def process_sections(
    grant_path, base_path, sections, grant_id, grant_name, foundation
):
    """Process sections from a questions file."""
    responses = {}
    exports_dir = Path("docs/exports")

    for section_key, section_data in sections.items():
        response_file = base_path / section_data["file"].replace(
            "responses/", "responses/"
        )

        if not response_file.exists():
            print(f"Warning: {response_file} not found")
            continue

        # Read response
        response_markdown = response_file.read_text()

        # Validation: Check if response starts with question text
        question_text = section_data.get("question", "")
        if question_text and response_markdown.strip().startswith(
            f"# {question_text}"
        ):
            print(
                f"   ⚠️  WARNING: {response_file.name} starts with question text - this will be included in the response!"
            )
            print(f"      Remove the H1 header: '# {question_text[:50]}...'")

        plain_text = strip_markdown_formatting(response_markdown)

        # Support both char_limit and word_limit
        char_limit = section_data.get("char_limit")
        word_limit = section_data.get("word_limit")

        char_count = len(plain_text)
        word_count = len(plain_text.split())

        # Calculate percentages
        char_percentage = (char_count / char_limit) * 100 if char_limit else 0
        word_percentage = (word_count / word_limit) * 100 if word_limit else 0

        # Determine if over limit
        over_limit = False
        limit_errors = []

        if char_limit and char_count > char_limit:
            over_limit = True
            limit_errors.append(
                f"Response '{section_key}' exceeds character limit: {char_count} > {char_limit}"
            )

        if word_limit and word_count > word_limit:
            over_limit = True
            limit_errors.append(
                f"Response '{section_key}' exceeds word limit: {word_count} > {word_limit}"
            )

        # Throw error if over limit
        if limit_errors:
            error_msg = f"\n❌ GRANT VALIDATION ERROR:\n"
            for error in limit_errors:
                error_msg += f"   - {error}\n"
            raise ValueError(error_msg)

        needs_completion = (
            "[NEEDS TO BE COMPLETED]" in response_markdown
            or "[TO BE COMPLETED]" in response_markdown
        )

        # Export to DOCX and PDF if requested
        export_files = None
        if section_data.get("needs_export", False):
            export_files = export_response(
                grant_id,
                grant_name,
                foundation,
                section_key,
                section_data,
                response_markdown,
                exports_dir,
            )

        response_dict = {
            "title": section_data["title"],
            "question": section_data.get("question", ""),
            "file": str(response_file.relative_to(grant_path)),
            "plainText": plain_text,
            "charCount": char_count,
            "charLimit": char_limit,
            "charPercentage": round(char_percentage, 1),
            "wordCount": word_count,
            "wordLimit": word_limit,
            "wordPercentage": round(word_percentage, 1),
            "overLimit": over_limit,
            "needsCompletion": needs_completion,
            "status": (
                "needs_input"
                if (over_limit or needs_completion)
                else "complete"
            ),
        }

        if export_files:
            response_dict["exports"] = export_files

        responses[section_key] = response_dict

    return responses


def process_grant(grant_id, grant_config):
    """Process a single grant application."""
    grant_path = Path(grant_config["path"])

    if not grant_path.exists():
        print(f"Warning: {grant_path} not found")
        return None

    # Load grant metadata
    grant_yaml_path = grant_path / "grant.yaml"
    if grant_yaml_path.exists():
        with open(grant_yaml_path) as f:
            grant_metadata = yaml.safe_load(f)
    else:
        grant_metadata = {}

    # Check for new structure (application/ and reports/ directories)
    application_path = grant_path / "application"
    reports_path = grant_path / "reports"
    has_new_structure = application_path.exists() or reports_path.exists()

    # Track application and report metadata
    application_data = None
    reports_data = []

    if has_new_structure:
        # Process new structure
        all_responses = {}

        # Process application
        if application_path.exists():
            app_questions_path = application_path / "questions.yaml"
            if app_questions_path.exists():
                with open(app_questions_path) as f:
                    app_questions_data = yaml.safe_load(f)
                app_sections = app_questions_data.get("sections", {})
                app_metadata = app_questions_data.get("metadata", {})

                # Handle both dict format and list format
                if isinstance(app_sections, list):
                    app_sections = {
                        item.get("id", f"section_{i}"): item
                        for i, item in enumerate(app_sections)
                        if "file" in item
                    }

                app_responses = process_sections(
                    grant_path,
                    application_path,
                    app_sections,
                    grant_id,
                    grant_config["name"],
                    grant_config["foundation"],
                )

                # Store application data separately
                application_data = {
                    "metadata": app_metadata,
                    "responses": app_responses,
                }

                for key, value in app_responses.items():
                    all_responses[f"app_{key}"] = {
                        **value,
                        "type": "application",
                    }

        # Process reports
        if reports_path.exists():
            for report_dir in sorted(reports_path.iterdir()):
                if report_dir.is_dir():
                    report_questions_path = report_dir / "questions.yaml"
                    if report_questions_path.exists():
                        with open(report_questions_path) as f:
                            report_questions_data = yaml.safe_load(f)
                        report_sections = report_questions_data.get(
                            "sections", {}
                        )
                        report_metadata = report_questions_data.get(
                            "metadata", {}
                        )

                        # Handle both dict format and list format
                        if isinstance(report_sections, list):
                            report_sections = {
                                item.get("id", f"section_{i}"): item
                                for i, item in enumerate(report_sections)
                                if "file" in item
                            }

                        report_responses = process_sections(
                            grant_path,
                            report_dir,
                            report_sections,
                            grant_id,
                            grant_config["name"],
                            grant_config["foundation"],
                        )
                        report_name = report_dir.name

                        # Store report data separately
                        reports_data.append(
                            {
                                "period": report_name,
                                "metadata": report_metadata,
                                "responses": report_responses,
                            }
                        )

                        for key, value in report_responses.items():
                            all_responses[f"report_{report_name}_{key}"] = {
                                **value,
                                "type": "report",
                                "report_period": report_name,
                            }

        responses = all_responses
    else:
        # Process old structure (backward compatibility)
        questions_path = grant_path / "questions.yaml"
        if not questions_path.exists():
            # Try NSF config
            nsf_config_path = grant_path / "nsf_config.yaml"
            if nsf_config_path.exists():
                questions_path = nsf_config_path
            else:
                # Try old location (pritzker_questions.yaml)
                questions_path = grant_path / f"{grant_id}_questions.yaml"

        with open(questions_path) as f:
            questions_data = yaml.safe_load(f)

        # Process responses
        sections = questions_data.get("sections", {})

        # Handle both dict format (Pritzker) and list format (PBIF)
        if isinstance(sections, list):
            # Convert list to dict for uniform processing
            sections = {
                item.get("id", f"section_{i}"): item
                for i, item in enumerate(sections)
                if "file" in item
            }
        elif not isinstance(sections, dict):
            sections = {}

        responses = process_sections(
            grant_path,
            grant_path,
            sections,
            grant_id,
            grant_config["name"],
            grant_config["foundation"],
        )

    result = {
        "id": grant_id,
        "config": grant_config,
        "metadata": grant_metadata,
        "responses": responses,
    }

    # Add application and reports as separate entities if using new structure
    if has_new_structure:
        if application_data:
            result["application"] = application_data
        if reports_data:
            result["reports"] = reports_data

    return result


def build_all_grants(registry_path="grant_registry.yaml", output_dir="docs"):
    """Build all grant viewers."""
    # Load registry
    with open("grant_registry.yaml") as f:
        registry = yaml.safe_load(f)

    grants_data = {}

    print("Processing grants...")
    for grant_id, grant_config in registry["grants"].items():
        print(f"\n📋 Processing {grant_id}...")
        grant_data = process_grant(grant_id, grant_config)
        if grant_data:
            grants_data[grant_id] = grant_data
            response_count = len(grant_data["responses"])
            print(f"   ✅ {response_count} responses processed")

    # Write to JavaScript
    docs_path = Path("docs")
    docs_path.mkdir(exist_ok=True)

    js_content = json.dumps(grants_data, indent=2)

    (docs_path / "grants_data.json").write_text(js_content)
    print(f"\n✅ Generated docs/grants_data.json")
    print(f"✅ Processed {len(grants_data)} grants")

    # Print summary
    print("\n" + "=" * 60)
    print("GRANT SUMMARY")
    print("=" * 60)
    for grant_id, data in grants_data.items():
        print(f"\n{data['config']['name']}")
        print(f"  Foundation: {data['config']['foundation']}")
        print(f"  Amount: ${data['config']['amount_requested']:,}")
        print(f"  Status: {data['config']['status']}")
        print(f"  Responses: {len(data['responses'])}")


if __name__ == "__main__":
    build_all_grants()
