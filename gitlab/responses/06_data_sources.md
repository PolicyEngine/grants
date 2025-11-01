PolicyEngine will leverage three primary data sources, all readily accessible:

**1. PolicyEngine Codebase & Merged Pull Requests (golden standard):**
- Source: 1,000+ merged PRs with human-reviewed code across federal and state programs
- Accessibility: Fully accessible, open-source (MIT licensed on GitHub)
- AI Use: Examples showing how experts translate policy language to PolicyEngine code. Git history shows validation, edge cases, quality standards
- Legal/Privacy: Open-source, no restrictions
- Quality: Production-tested code reviewed by domain experts—the gold standard for benchmarking AI-generated code

**2. Policy Documents via Atlas:**
- Source: 2,500+ existing PolicyEngine policy citations (federal statutes, state regulations, administrative manuals) plus documents to be collected through Atlas
- Target expansion: TANF (all 50 states), CCDF childcare subsidies (nationwide), LIHEAP energy assistance (all states), SSI state supplements (nationwide expansion)
- Accessibility: Public government documents, Atlas will systematically archive to prevent link rot
- AI Use: LLMs extract rules from documents, semantic search finds related provisions, change detection monitors updates
- Legal/Privacy: Public domain government documents, no restrictions
- Challenge: Documents are messy and sometimes ambiguous—why we validate AI outputs against human-written code, not documents themselves

**3. Synthetic Households for LLM Evaluation:**
- Source: Generated test cases for research component
- Creation: Programmatically generate thousands of household profiles varying income, size, composition, assets, employment, disabilities, expenses
- AI Use: Test LLM benefit estimation accuracy across diverse scenarios. Measure errors, identify failure modes
- Legal/Privacy: Synthetic data, no real people, no privacy concerns
- Validation: All test cases verified against PolicyEngine ground truth calculations

**Data Storage & Security:**

All data stored in PolicyEngine's Google Cloud Platform infrastructure with encryption at rest and in transit. No PII collected—policy documents are public, code is open source, test cases are synthetic. API partners (MyFriendBen, Starlight, Mirza, etc.) handle user data; PolicyEngine only receives anonymized calculation requests.

**Atlas Demo:**

We have a working Atlas prototype demonstrating document retrieval and storage at https://policyengine.github.io/atlas/. This grant scales it to systematic coverage of target programs across jurisdictions.

**Regulatory Compliance:**

Government documents: Permissible for AI processing (public domain). Code generation: Open-source licensing ensures broad usability. Research publication: All evaluation methodology and test suites will be open-source, enabling replication while avoiding test contamination issues identified in recent LLM evaluation research.

**Immediate Accessibility:**

All data sources operational or in development. No acquisition delays—can begin immediately. Enhanced microdata, policy documents, and merged PRs indexed and queryable. Atlas demo functional. This enables rapid 6-month execution.
