"""Export grant responses to DOCX and PDF formats using pandoc."""

import subprocess
from pathlib import Path
import tempfile


def create_markdown_document(
    response_markdown, title, question, grant_name, foundation
):
    """Create a complete markdown document with header."""
    doc = f"""# {grant_name}
**{foundation}**

---

**Question:** {question}

---

**Response:**

{response_markdown}
"""
    return doc


def export_to_docx(
    response_markdown, output_path, title, question, grant_name, foundation
):
    """Export response to DOCX using pandoc with Inter font."""
    # Create full markdown document
    full_markdown = create_markdown_document(
        response_markdown, title, question, grant_name, foundation
    )

    # Write to temp file
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".md", delete=False
    ) as tmp:
        tmp.write(full_markdown)
        tmp_path = tmp.name

    try:
        # Use pandoc to convert to DOCX with Inter font and smaller size for tables
        result = subprocess.run(
            [
                "pandoc",
                tmp_path,
                "-o",
                str(output_path),
                "--from=markdown",
                "--to=docx",
                "-V",
                "mainfont=Inter",
                "-V",
                "fontsize=9pt",
                "-V",
                "geometry:margin=0.75in",
            ],
            check=True,
            capture_output=True,
            text=True,
        )
    except subprocess.CalledProcessError as e:
        raise Exception(f"Pandoc DOCX conversion failed: {e.stderr}")
    finally:
        Path(tmp_path).unlink()


def export_to_pdf(
    response_markdown, output_path, title, question, grant_name, foundation
):
    """Export response to PDF via DOCX conversion (better rendering than LaTeX)."""
    # First create DOCX
    docx_temp = output_path.with_suffix(".temp.docx")
    export_to_docx(
        response_markdown, docx_temp, title, question, grant_name, foundation
    )

    try:
        # Convert DOCX to PDF using soffice (LibreOffice)
        result = subprocess.run(
            [
                "soffice",
                "--headless",
                "--convert-to",
                "pdf",
                "--outdir",
                str(output_path.parent),
                str(docx_temp),
            ],
            check=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
        # soffice outputs with the temp filename, rename it
        soffice_output = output_path.parent / f"{docx_temp.stem}.pdf"
        if soffice_output.exists():
            soffice_output.rename(output_path)
    except (
        subprocess.CalledProcessError,
        FileNotFoundError,
        subprocess.TimeoutExpired,
    ) as e:
        # Fallback to pandoc with better PDF settings
        full_markdown = create_markdown_document(
            response_markdown, title, question, grant_name, foundation
        )
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".md", delete=False
        ) as tmp:
            tmp.write(full_markdown)
            tmp_path = tmp.name

        try:
            subprocess.run(
                [
                    "pandoc",
                    tmp_path,
                    "-o",
                    str(output_path),
                    "--from=markdown",
                    "--pdf-engine=xelatex",
                    "-V",
                    "geometry:margin=1in",
                ],
                check=True,
                capture_output=True,
                text=True,
            )
        except subprocess.CalledProcessError as e:
            raise Exception(f"PDF conversion failed: {e.stderr}")
        finally:
            Path(tmp_path).unlink()
    finally:
        # Clean up temp DOCX
        if docx_temp.exists():
            docx_temp.unlink()


def export_response(
    grant_id,
    grant_name,
    foundation,
    response_key,
    response_data,
    response_markdown,
    output_dir,
):
    """Export a single response to DOCX and PDF."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True, parents=True)

    # Create grant-specific subdirectory
    grant_dir = output_dir / grant_id
    grant_dir.mkdir(exist_ok=True)

    # Generate filenames
    safe_key = response_key.replace("/", "_").replace(" ", "_")
    docx_path = grant_dir / f"{safe_key}.docx"
    pdf_path = grant_dir / f"{safe_key}.pdf"

    # Export to DOCX
    try:
        export_to_docx(
            response_markdown,
            docx_path,
            response_data["title"],
            response_data["question"],
            grant_name,
            foundation,
        )
    except Exception as e:
        print(f"   ⚠️  Failed to export DOCX for {response_key}: {e}")

    # Export to PDF
    try:
        export_to_pdf(
            response_markdown,
            pdf_path,
            response_data["title"],
            response_data["question"],
            grant_name,
            foundation,
        )
    except Exception as e:
        print(f"   ⚠️  Failed to export PDF for {response_key}: {e}")

    return {
        "docx": str(docx_path.relative_to(output_dir.parent)),
        "pdf": str(pdf_path.relative_to(output_dir.parent)),
    }
