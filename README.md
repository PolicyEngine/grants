# PolicyEngine Grant Applications

Centralized repository for all PolicyEngine grant applications.

## Overview

This repository contains application materials for PolicyEngine grants, organized with:
- **Questions in YAML** - Single source of truth for question text and metadata
- **Responses in Markdown** - One .md file per response for easy editing and version control
- **Financial Documents** - Budgets, statements, and supporting materials
- **Unified Viewer** - Interactive web interface for all grants at policyengine.github.io/grants

## Repository Structure

```
grants/
├── grant_registry.yaml           # Central index of all grants
├── grants_builder/               # Build system for viewer
│   ├── builder.py                # Main builder logic
│   ├── cli.py                    # Command-line interface
│   └── utils.py                  # Utility functions
├── {grant-name}/                 # Individual grant directory
│   ├── grant.yaml                # Grant metadata
│   ├── README.md                 # Grant overview
│   ├── application/              # Application materials
│   │   ├── questions.yaml        # Application questions
│   │   └── responses/            # Application responses
│   ├── reports/                  # Progress/grant reports
│   │   └── {report-period}/      # e.g., 2025-11
│   │       ├── questions.yaml    # Report questions
│   │       └── responses/        # Report responses
│   ├── financials/               # Financial documents
│   └── supporting_docs/          # Supporting materials
└── docs/                         # GitHub Pages viewer
```

### Grant Directory Structure

New grants should use the separated structure with formal entity distinction:

- **`application/`**: Original application materials (single entity per grant)
  - `questions.yaml` - Application questions with metadata
  - `responses/` - Application response files

- **`reports/{period}/`**: Progress and grant reports (multiple entities per grant)
  - `{period}/questions.yaml` - Report questions and metadata (e.g., `2025-11` for November 2025)
  - `{period}/responses/` - Report response files

This structure creates a formal separation between:
1. **Application entity**: Submitted once at the beginning
2. **Report entities**: Submitted multiple times throughout and after the grant period

The `grant_registry.yaml` tracks this with:
```yaml
has_application: true/false
has_reports: true/false
reports:
  - period: "2025-02"
    type: "final"
    date: "2025-02-15"
```

## Adding a New Grant

1. Create directory: `mkdir new-grant/`
2. Add to `grant_registry.yaml`
3. Create `grant.yaml` with metadata
4. Create `questions.yaml` with question structure (or use `application/` and `reports/` structure)
5. Write responses in `responses/*.md` (one file per question)
6. Mark questions needing document exports with `needs_export: true` in `questions.yaml`
7. Run `make build` to generate viewer and export documents
8. Commit and push

### Document Exports

To generate DOCX and PDF exports for specific responses (e.g., for grant portals that require file uploads):

**Requirements**: Install [Pandoc](https://pandoc.org/installing.html) and LaTeX (for PDF):
```bash
brew install pandoc
brew install --cask basictex  # For PDF generation
```

**Usage**:

1. Add `needs_export: true` to the question in `questions.yaml`:
   ```yaml
   sections:
     milestone_status:
       title: "Milestone Status Update"
       question: "Provide milestone status..."
       file: "responses/milestone_status.md"
       needs_export: true  # Generates DOCX and PDF
   ```

2. Run `make build` to generate exports in `docs/exports/{grant-id}/`

3. Exports include:
   - Properly formatted DOCX with markdown rendered (bold, links, tables, lists)
   - PDF version with the same formatting
   - Both files ready for upload to grant portals
   - Served as static files via GitHub Pages

## Viewing Applications

Visit https://policyengine.github.io/grants to view all grant applications with:
- Character count tracking
- Copy buttons for easy paste into grant portals
- **DOCX and PDF exports** for responses marked with `needs_export: true`
- Financial document downloads
- Status tracking

## Design Principles

- **Markdown First**: All content in plain text .md files
- **YAML Metadata**: Questions and structure in YAML
- **Database Ready**: Structure designed for future DB migration
- **Version Control**: Full history in git
- **Transparency**: Public GitHub Pages deployment
- **Reusability**: Shared scripts and templates

## Grants

### Active Applications
- **PBIF** (Public Benefit Innovation Fund) - $700k, 2-year grant for Policy Library
- **Pritzker** (PCI) - $150k, 1-year grant for Policy Analysis Expansion

### Future Extensions
- Search across grants
- Deadline tracking
- Budget comparisons
- Response templates
- Multi-foundation analytics
