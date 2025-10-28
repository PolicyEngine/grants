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
├── shared/                       # Shared infrastructure
│   ├── scripts/                  # Build scripts
│   ├── templates/                # Viewer templates
│   └── utils/                    # Utilities
├── pbif/                         # PBIF Summer 2025 application
├── pritzker/                     # Pritzker Family Foundation application
└── docs/                         # GitHub Pages viewer
```

## Adding a New Grant

1. Create directory: `mkdir new-grant/`
2. Add to `grant_registry.yaml`
3. Create `grant.yaml` with metadata
4. Create `questions.yaml` with question structure
5. Write responses in `responses/*.md` (one file per question)
6. Run `python3 shared/scripts/build_all.py`
7. Commit and push

## Viewing Applications

Visit https://policyengine.github.io/grants to view all grant applications with:
- Character count tracking
- Copy buttons for easy paste into grant portals
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
