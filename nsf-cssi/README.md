# NSF CSSI Elements — PolicyEngine Cyberinfrastructure

[![Site Deployment](https://github.com/PolicyEngine/nsf-cssi-2025/actions/workflows/site-deploy.yml/badge.svg)](https://github.com/PolicyEngine/nsf-cssi-2025/actions/workflows/site-deploy.yml)

**Live Proposal Site**: [https://policyengine.github.io/nsf-cssi-2025/](https://policyengine.github.io/nsf-cssi-2025/) 🚀

This repository organizes PolicyEngine's NSF CSSI (Cyberinfrastructure for Sustained Scientific Innovation) Elements proposal development. It provides a structured framework for developing a comprehensive proposal focused on creating scalable cyberinfrastructure for policy research and economic analysis.

## Program Overview

**NSF CSSI Elements** supports the development, deployment, and maintenance of sustainable cyberinfrastructure that enables new science and engineering discoveries while serving diverse research communities. Elements track awards can fund up to **$10 million over 4 years** for foundational software infrastructure projects.

### Key Focus Areas
- **High-Performance Computing**: Scalable algorithms and distributed architectures
- **Data Infrastructure**: Advanced data processing and privacy-preserving computation  
- **Integration Frameworks**: APIs and tools for research workflow integration
- **Collaborative Environments**: Multi-institutional research platforms

## Repository Structure

```
nsf-cssi-2025/
├── docs/cssi/                    # Proposal content and configuration
│   ├── responses/               # Individual section responses
│   ├── research/                # Research enablement analysis
│   ├── letters/                 # Support letters and collaborations
│   ├── supplementary/           # Additional required documents
│   └── cssi_questions.yaml      # Proposal configuration and structure
├── scripts/                     # Assembly and content management scripts
│   └── assemble_cssi_application.py
├── site/                        # React + Vite visualization site
│   ├── src/views/              # Individual page components
│   └── package.json            # Site dependencies and scripts
├── materials/                   # Reference materials and program documents
│   ├── cssi-program/           # CSSI solicitation and guidance
│   └── phase1/                 # Relevant materials from POSE Phase I
└── .github/workflows/          # GitHub Actions for site deployment
```

## Key Features

### Proposal Development Framework
- **Structured Content Organization**: YAML-configured sections with word tracking
- **Automated Assembly**: Python scripts to combine sections into complete application
- **Progress Tracking**: Visual checklist and completion status monitoring
- **Version Control**: Git-based collaboration and change tracking

### Interactive Review Site
- **Real-Time Visualization**: React-based site for reviewing proposal progress
- **Technical Specifications**: Architecture diagrams and performance benchmarks
- **Integration Examples**: API documentation and workflow demonstrations
- **Automated Deployment**: GitHub Pages integration with CI/CD

### Research Enablement Focus
- **Cyberinfrastructure Gaps**: Analysis of current limitations in policy research tools
- **Technical Innovation**: Scalable microsimulation and cloud-native architecture
- **Community Impact**: Interdisciplinary collaboration and reproducible research
- **Sustainability Planning**: Long-term maintenance and governance models

## Getting Started

### Prerequisites
- Node.js 20+ for site development
- Python 3.11+ for content assembly scripts
- Git for version control

### Development Workflow

1. **Content Development**
   ```bash
   # Edit proposal sections in docs/cssi/responses/
   vim docs/cssi/responses/technical_approach.md
   
   # Assemble complete application
   python3 scripts/assemble_cssi_application.py
   ```

2. **Site Development**
   ```bash
   cd site
   npm install
   npm run dev
   ```

3. **Content Synchronization**
   ```bash
   # The assembly script automatically updates site content
   python3 scripts/assemble_cssi_application.py
   ```

### Site Navigation
- **Home**: Program overview and project summary
- **Application**: Complete assembled proposal content  
- **Checklist**: Section completion status and progress tracking
- **Architecture**: Technical system design and infrastructure diagrams
- **Performance**: Benchmarks, scalability analysis, and optimization strategies
- **Budget**: Funding breakdown and justification (up to $10M over 4 years)
- **Timeline**: 4-year development milestones and deliverables
- **Integration**: API specifications and research workflow examples
- **Research**: Research enablement and scientific impact analysis
- **References**: Complete bibliography and citation management

## Proposal Sections

The CSSI Elements proposal includes these key sections:

1. **Project Summary** — Overview with keywords and impact statement
2. **Cyberinfrastructure Need** — Analysis of gaps and vision for PolicyEngine infrastructure
3. **Technical Approach** — Detailed architecture, scalability, and performance design
4. **Research Enablement** — How infrastructure enables new scientific discoveries
5. **Software Engineering** — Development practices, testing, and sustainability
6. **Data Infrastructure** — Data pipelines, privacy, security, and access management
7. **Community Adoption** — User experience, APIs, and adoption strategies
8. **Evaluation Metrics** — Success measurement for technical and research impacts
9. **Broader Impacts** — Societal benefits and educational impact
10. **Timeline & Milestones** — 4-year development plan with specific deliverables

## Research Impact

PolicyEngine cyberinfrastructure will enable new research capabilities across multiple domains:

### Novel Research Questions
- Real-time policy optimization using machine learning techniques
- Cross-national comparative policy analysis with standardized metrics
- Behavioral microsimulation integrating agent-based modeling approaches
- Dynamic policy impact assessment incorporating temporal effects

### Enabled Research Communities
- **Public Economics**: Advanced tax and transfer policy analysis
- **Labor Economics**: Employment and wage policy impact modeling
- **Health Economics**: Healthcare policy and insurance analysis
- **Urban Planning**: Housing and regional development policy research
- **Climate Policy**: Environmental economics and carbon pricing analysis
- **Computational Social Science**: Large-scale behavioral and policy modeling

## Technical Innovation

### High-Performance Computing Integration
- **Scalable Microsimulation**: Population-scale modeling with distributed computing
- **Cloud-Native Architecture**: Auto-scaling infrastructure with container orchestration
- **Performance Optimization**: Sub-10-second response times for 100K household simulations
- **HPC Integration**: Seamless connection to national computing facilities

### Advanced Data Infrastructure  
- **Federated Data Access**: Privacy-preserving computation across institutions
- **Real-Time Processing**: Streaming data pipelines with sub-second API responses
- **Machine Learning Integration**: AI-enhanced policy prediction and optimization
- **Reproducible Workflows**: Containerized environments with version-controlled parameters

## Deployment & Access

**Live Site**: https://policyengine.github.io/nsf-cssi-2025 *(will be available after first deployment)*

The site automatically deploys on pushes to the `main` branch and includes:
- Complete proposal visualization
- Technical architecture diagrams  
- Performance benchmarks and analysis
- Research integration examples
- Progress tracking and completion status

## Development Status

**This is an initial framework for discussion and development.** Content sections are marked "TO BE DEVELOPED" where appropriate. This repository provides the structure and tools needed to develop a comprehensive CSSI Elements proposal focused on cyberinfrastructure for policy research.

### Current Status
- ✅ Repository structure and development framework
- ✅ Site infrastructure and visualization tools
- ✅ Initial technical approach and architecture outlines
- 🔄 Detailed technical specifications and benchmarks
- ⏳ Research impact analysis and use cases
- ⏳ Budget development and resource planning
- ⏳ Timeline refinement and milestone definition

## Contributing

This proposal benefits from interdisciplinary input across computer science, economics, public policy, and software engineering. Key areas for contribution:

- **Technical Architecture**: System design and performance optimization strategies
- **Research Applications**: Use cases and impact analysis across policy domains  
- **Software Engineering**: Best practices for sustainable infrastructure development
- **Community Building**: Adoption strategies and user experience design

## Related Projects

- **NSF POSE Phase I**: Foundation and community building ([nsf-pose-phase-2](../nsf-pose-phase-2))
- **PolicyEngine Core Platform**: https://policyengine.org
- **PolicyEngine API**: https://api.policyengine.org
- **PolicyEngine GitHub**: https://github.com/PolicyEngine

## License

This proposal development framework is available under the MIT License. The PolicyEngine platform itself is open-source under the AGPL license.

---

*For questions about CSSI proposal development, contact the PolicyEngine team or open an issue in this repository.*