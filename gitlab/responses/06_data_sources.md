PolicyEngine will leverage four primary data sources, all readily accessible with minimal legal concerns:

**1. Policy Documents (for LLM extraction):**
- Source: 2,500+ existing PolicyEngine policy citations (federal statutes, state regulations, administrative manuals)
- Accessibility: All public documents, already collected and validated
- AI Use: Training data for LLM fine-tuning on policy language patterns
- Legal/Privacy: No concerns - public domain government documents
- Volume: Expanding to 5,000+ documents through AI-assisted discovery

**2. PolicyEngine Codebase (for AI code generation):**
- Source: PolicyEngine's open-source repository (1,000+ benefit/tax variables across federal and state programs)
- Accessibility: Fully accessible, MIT licensed
- AI Use: Training corpus for code generation models - LLMs learn PolicyEngine coding patterns, variable structures, formula syntax
- Legal/Privacy: Open-source, no restrictions
- Quality: Human-validated, production-tested code

**3. Enhanced Census Microdata (for stochastic imputation):**
- Source: PolicyEngine's ML-enhanced Current Population Survey (300,000+ households)
- Processing: Already enhanced using quantile regression forests to incorporate IRS tax data and national aggregates
- Accessibility: Stored in PolicyEngine databases, readily accessible
- AI Use: Training data for models predicting missing household characteristics (income, assets, family composition, expenses)
- Legal/Privacy: Census data is public; enhancements are PolicyEngine's proprietary methodology but outputs are shareable
- Validation: Cross-validated against known household distributions

**4. Legislative & Regulatory Text (for validation):**
- Source: State legislative websites, Federal Register, agency rule-making portals
- Accessibility: Public APIs and web scraping (legally permissible for government documents)
- AI Use: Embedding-based semantic search for cross-referencing, LLMs for change detection when policies update
- Legal/Privacy: Public documents, no restrictions

**Data Storage & Security:**
All data stored in PolicyEngine's cloud infrastructure (Google Cloud Platform) with encryption at rest and in transit. No PII collected—policy documents and Census data are already anonymized/public. API partners (MyFriendBen, Starlight) handle user data; PolicyEngine only receives anonymized calculation requests.

**Regulatory Compliance:**
Government documents: No restrictions on AI processing of public policy text. Census microdata: Public use files, permissible for ML training. Code generation: Open-source licensing ensures broad usability. Partner integrations: Data processing agreements in place with MyFriendBen, Student Basic Needs Coalition; Starlight integration underway.

**Accessibility:**
All data sources currently operational in PolicyEngine systems. No data acquisition delays—can begin AI development immediately. Enhanced microdata and policy documents indexed and queryable. This infrastructure readiness enables rapid 6-month execution.
