# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository organizes PolicyEngine's NSF CSSI (Cyberinfrastructure for Sustained Scientific Innovation) Elements proposal development. It provides a structured framework for developing a comprehensive $10M, 4-year proposal focused on creating scalable cyberinfrastructure for policy research and economic analysis.

## Repository Structure

- `docs/cssi/`: Markdown responses and configuration for CSSI Elements proposal
  - `responses/`: Individual section responses (project_summary.md, technical_approach.md, etc.)
  - `research/`: Research enablement analysis and impact studies
  - `letters/`: Support letters and collaboration documentation
  - `supplementary/`: Additional required documents
  - `cssi_questions.yaml`: Proposal configuration and section structure
- `scripts/`: Python scripts for content assembly and site synchronization
- `site/`: React + Vite visualization site for reviewing proposal progress
- `materials/`: Reference materials including CSSI program documents

## Key Commands

### Site Development
```bash
# From site/ directory
npm install                     # Install dependencies
npm run dev                     # Start development server
npm run build                   # Build for production
```

### Content Assembly
```bash
# From root directory
python3 scripts/assemble_cssi_application.py  # Assemble sections into complete application
```

## Development Workflow

1. Edit proposal sections in `docs/cssi/responses/`
2. Run assembly script to combine sections and update site content
3. Review progress using the local development site
4. Commit changes and push to trigger GitHub Pages deployment

## Focus Areas

This CSSI Elements proposal emphasizes:

**Technical Cyberinfrastructure**:
- High-performance computing integration for scalable microsimulation
- Cloud-native architecture with auto-scaling capabilities
- Real-time API responses and distributed computing
- Advanced data processing pipelines with privacy preservation

**Research Enablement**:
- Novel capabilities for policy optimization using machine learning
- Cross-national comparative analysis with standardized metrics
- Behavioral microsimulation with agent-based modeling integration
- Reproducible research workflows with containerized environments

**Community Impact**:
- Open-source development model with sustainable governance
- Integration with existing research platforms and workflows
- Educational applications and workforce development
- Interdisciplinary collaboration across multiple NSF directorates

## Content Development Guidelines

- Mark incomplete sections as "TO BE DEVELOPED" with specific placeholder content
- Focus on technical innovation and infrastructure gaps
- Emphasize research enablement over community building (unlike POSE)
- Include specific performance benchmarks and scalability targets
- Reference the higher funding potential ($10M vs $1.5M for POSE)

## Site Navigation

The review site includes these key sections:
- **Application**: Complete assembled proposal content
- **Architecture**: Technical system design and infrastructure diagrams  
- **Performance**: Benchmarks and scalability analysis
- **Integration**: API specifications and workflow examples
- **Research**: Research enablement and scientific impact
- **Timeline**: 4-year development plan with milestones

## Deployment

- Site auto-deploys to GitHub Pages on pushes to `main`
- Available at: https://policyengine.github.io/nsf-cssi-2025
- CI/CD validates builds on pull requests

This repository provides a foundation for developing a comprehensive CSSI Elements proposal while maintaining focus on the technical cyberinfrastructure aspects that distinguish CSSI from community-focused programs like POSE.