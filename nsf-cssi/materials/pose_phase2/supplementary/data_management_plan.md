# NSF POSE Phase II — Data Management Plan

**Project**: PolicyEngine: Building an Open Ecosystem for Tax-Benefit Microsimulation

This DMP follows NSF PAPPG 24-1 requirements for managing data, software, and materials in our open-source tax-benefit microsimulation ecosystem.

## Types of Data, Software, and Materials Produced

The project's primary data product is the Enhanced Current Population Survey (Enhanced CPS), which starts from public CPS microdata and statistically imputes income, consumption, and wealth from ACS, SCF, SIPP, IRS Public Use File, and potentially PSID. This creates synthetic households containing no PII, safe for public distribution and AI training. The Enhanced CPS is hosted on Hugging Face with versioned releases and comprehensive metadata.

Supporting datasets include: (1) tax-benefit parameter libraries as YAML files covering federal/state taxes and transfer programs (SNAP, TANF, Medicaid, housing) with inline documentation; (2) validation datasets comparing PolicyEngine to TAXSIM, CBO, TPC, and Tax Foundation; (3) household simulation outputs in JSON format; (4) educational materials including Jupyter notebooks and AI integration guides; (5) de-identified I-Corps stakeholder insights and community metrics.

## Standards, Formats, and Metadata

All data uses open, machine-readable formats optimized for human and AI processing. JSON-LD with schema.org vocabularies provides semantic context. YAML parameters follow OpenAPI patterns for automated validation. Software includes type hints and docstrings facilitating AI-assisted development. Dataset cards document provenance, limitations, and appropriate uses. OpenAPI 3.0 specifications enable automatic client generation. Semantic versioning with detailed changelogs tracks evolution.

## Policies for Access, Sharing, and Reuse

All materials are openly accessible through GitHub repositories and Hugging Face datasets. The Enhanced CPS and weights are distributed via Hugging Face's infrastructure with complete version history. APIs require no authentication for public endpoints, with rate limits supporting legitimate research. Documentation uses structured markup for search/AI discovery. All microdata consists of synthetic households without privacy concerns.

Code is released under AGPL license. Enhanced CPS uses Open Database License (ODbL). Documentation employs CC BY 4.0. Clear contributor agreements address AI-assisted contributions. CI/CD pipelines validate AI-generated code with human oversight requirements.

## Long-term Preservation

Complete version control preserves evolution patterns for learning. Each software release is deposited to PyPI. Enhanced CPS on Hugging Face maintains full history with changelogs. GitHub preserves all development history. Materials retained minimum 5 years post-project, with Hugging Face providing long-term microdata hosting.

## Privacy, Security, and Ethics

The Enhanced CPS consists entirely of synthetic households through statistical imputation—no actual individuals represented. Documentation covers imputation methods, source limitations, and potential biases from combining data sources. Security measures include API rate limiting, cryptographically signed releases, and vulnerability disclosure processes. All microdata undergoes disclosure review ensuring no real household identification.

## Implementation Resources

Infrastructure includes vector databases for semantic search, webhooks for data update subscriptions, and sandbox environments for safe testing. The PI oversees ethics and appropriate use. Technical Lead maintains APIs and integration points. Data Steward manages Enhanced CPS quality. Community Manager develops curricula and prompt libraries.

## Expected Outcomes

This project transforms policy analysis by enabling AI coding assistants to help build tax-benefit analyses, creating curriculum for AI-augmented research, and establishing standards for AI-readable policy parameters. The synthetic Enhanced CPS combined with comprehensive documentation creates a foundation for responsible AI development in policy analysis, democratizing access not just to more institutions but to new modes of discovery.