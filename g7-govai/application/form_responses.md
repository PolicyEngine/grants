# G7 GovAI Grand Challenge: Form Responses

**Problem Statement Selected:** Option 2: "The public service works with many laws, policies and regulations that are complex to navigate for clients and employees"

---

## Basic Information

### Submission Title (10 words max)
```
PolicyEngine: AI Explained Benefit Calculations for Government and Citizens
```
(9 words)

### Submission Description (50 words max)
```
PolicyEngine is a free, open source platform enabling government workers and citizens to understand how tax and benefit policies affect households with 100,000+ users across US/UK. The platform calculates benefit amounts across federal and provincial programs, with AI explaining results in plain language, showing thresholds and rules applied.
```
(49 words)

---

## 1. Pre-screening Information

### 1.1 Problem Statement
**Select:** Option 2: "The public service works with many laws, policies and regulations that are complex to navigate for clients and employees"

### 1.2 How solution solves problem (100 words max)
```
Government workers and citizens struggle to navigate complex, interacting benefit rules across federal and provincial jurisdictions. Caseworkers spend hours cross referencing regulations; citizens miss benefits they qualify for.

PolicyEngine solves this by encoding 9,000+ parameters from legislative sources across 200+ programs, calculating benefit amounts and modeling how programs interact, including federal provincial dependencies. AI then explains each result in plain language: which thresholds applied, how amounts were calculated, and links to source legislation.

Workers input household details once and instantly see eligibility across all programs with clear explanations of why, reducing cognitive load while ensuring consistent, auditable determinations.
```
(96 words)

### 1.3 Data used (75 words max)
```
Primary sources are non sensitive and public: federal statutes and regulations, official benefit program parameters (income limits, benefit formulas, phase out rates), and government agency guidelines (IRS, SSA, CRA equivalents). All parameters updated per government schedules.

Population analysis uses Current Population Survey and Survey of Consumer Finances (anonymized Census data).

No sensitive data: user inputs processed in real time, never stored. All parameter sources are publicly available legislative documents with full citations.
```
(71 words)

### 1.4 Bias consideration (75 words max)
```
Calculation bias eliminated: The platform applies legislative parameters identically for all users. Income thresholds, benefit formulas, and phase out rates come directly from law, not algorithmic decisions.

Explanation bias mitigated: AI explains verified calculations grounded in legislation, preventing biased framing.

Auditability: Every calculation traceable to specific legislative provisions. Open source code enables external review.

Representative analysis: Population estimates use official sampling weights ensuring demographic accuracy.
```
(66 words)

### 1.5 Data protection (75 words max)
```
Privacy by design: No user accounts required for calculations. Personal inputs processed in real time, never stored. No cookies or tracking for core functionality. GDPR/PIPEDA compliant with minimal data collection.

Security: HTTPS encryption for all data transmission. Open source code enables security auditing. No third party data sharing.

Government deployment: Self hosting option keeps all data within agency infrastructure. Docker deployment supports air gapped environments.
```
(68 words)

### 1.6 Video Link
```
[TO BE ADDED: YouTube URL required]
```

---

## 2. Questions to Inform Judging

### 2.1 Impact and social good (100 words max)
```
PolicyEngine enables government workers and citizens to understand how tax and benefit policies affect households, with AI explaining calculations in plain language.

For government, caseworkers navigate multi program eligibility in minutes. AI explanations show which rules applied and why, reducing cognitive load and ensuring consistent determinations.

For citizens, families understand their benefits and discover programs they are missing. Transparent explanations build trust in government services.

Proven at scale with 100,000+ users, US Joint Economic Committee, UK Cabinet Office, 200,000+ MyFriendBen screenings, and $2B+ in benefits connected.

Free, open source platform with 1,800+ legislative citations ensuring every calculation is verifiable.
```
(91 words)

### 2.2 Responsible AI principles (75 words max)
```
Grounded in legislation: AI explains calculations from legislative sources. It does not generate amounts independently, eliminating hallucination risk.

Transparent: Users understand how policies affect their households. Every result traceable to 1,800+ citations. Open source (AGPL 3.0).

Privacy by design: No personal data retained.

Human oversight: AI explanations inform decisions; workers retain authority.

Equitable access: Free platform serves government workers and citizens equally.
```
(63 words)

### 2.3 Single organization limitation? → No
```
Fully open source (AGPL 3.0). Any government agency can integrate via Python package, REST API, or self host with Docker. Already deployed across US federal/state and UK systems. MyFriendBen and other partners integrate for their own tools. Designed as shared infrastructure, not proprietary solution.
```
(43 words)

### 2.4 Works with existing systems? → Yes
```
Multiple integration options: Python package (pip install policyengine us/uk), REST API for web/case management systems, Docker for air gapped government environments.

Proven integrations: MyFriendBen (200,000+ screenings), UK Cabinet Office, US Joint Economic Committee.

OpenAPI specification ensures standardized integration. Architecture proven across US federal/state and UK. Same approach handles Canadian federal provincial dependencies.
```
(57 words)

### 2.5 Explainability (100 words max)
```
PolicyEngine separates calculation from explanation for full transparency.

Calculations: The platform applies 9,000+ parameters sourced from legislation (income thresholds, benefit formulas, phase out rates) validated against 8,000+ test cases. Every parameter traceable to official citations.

AI Explanations: Plain language showing how policies affect households:
"SNAP benefit: $347/month (Max $680 minus 30% of net income)"
"Qualifies because gross income < 130% FPL threshold"
"Provincial benefit reduced by 50% of federal amount"

Government workers and citizens see which rules applied, how federal provincial dependencies resolved, and links to source legislation.
```
(90 words)

### 2.6 Scalability (75 words max)
```
Proven multi jurisdictional deployment across US (50 states plus federal, 200+ programs) and UK (complete national system), with 9,000+ parameters and 8,000+ test cases.

Flexible deployment options include Python package, REST API, Docker, or web app. Governments choose their integration method.

Same architecture handles Canadian federal provincial dependencies. International expansion underway. No comparable free, open source platform exists for transparent, multi jurisdictional benefit calculations.
```
(59 words)

### 2.7 Easily add features? → Yes
```
Modular architecture separates rules, calculations, explanations, and interface. Adding programs requires encoding rules; AI explanations generate automatically.

Developer friendly with Python package on PyPI, REST API for applications, Docker for self hosting, and open source codebase with 50+ contributors.

Canadian expansion requires encoding Canadian rules; core infrastructure already supports multi country deployment proven by US/UK.
```
(55 words)

### 2.8 Accessibility (100 words max)
```
Plain language AI explanations translate complex regulations into understandable terms, serving users with varying literacy levels. Government workers and citizens both see clear explanations of how policies affect households.

Digital accessibility features include screen reader compatibility with ARIA labels, keyboard navigation, high contrast mode, and mobile responsive design.

No barriers to entry with free access, no account required, and functionality on any device with a browser.

Architecture supports localization with English and French for Canadian deployment.

Core functionality works on limited connectivity, serving remote communities.
```
(82 words)

### 2.9 Implementation effort (100 words max)
```
PolicyEngine is production ready with 100,000+ users, UK Cabinet Office, and US Joint Economic Committee deployments.

Canadian pilot plan ($10K CAD) proceeds in three phases. Phase 1 (2 weeks) updates the Canadian model by encoding 2024/2025 CCB, GST Credit, and CWB parameters with major provincial benefit interactions. Phase 2 (4 to 6 weeks) pilots with government through a policy simulation study with federal officials and proof of concept benefit navigation for caseworkers, documenting cognitive load reduction for Showcase Day. Phase 3 delivers an Ottawa training workshop.

Training resources include dozens of webinars at youtube.com/policyengine. Total effort is approximately 100 to 150 personnel hours.
```
(99 words)

### 2.10 Human centered design (75 words max)
```
User research drives development through quarterly interviews with benefits navigators and community organizations, usability testing with partners like MyFriendBen, and public GitHub issues enabling user reported improvements.

AI explanations were designed from user feedback. Workers wanted to understand "why," not just "what." Plain language thresholds and intermediate calculations directly address cognitive load concerns identified in research. The platform serves both government workers and citizens.
```
(64 words)

### 2.11 Documentation (75 words max)
```
Comprehensive open documentation includes full codebase on GitHub (AGPL 3.0 license), 1,800+ structured citations linking every rule to source legislation, 8,000+ test cases validating calculations, API documentation with OpenAPI specifications, and training videos at youtube.com/policyengine.

Version control provides complete git history with 50,000+ commits. All issues, decisions, and methodology are publicly visible with no hidden logic or undocumented behavior.
```
(62 words)

### GitHub URL (Optional)
```
https://github.com/PolicyEngine
```

---

## Checklist Before Submitting

- [ ] Video recorded and uploaded to YouTube (max 5 minutes)
- [ ] Age verification ready (18 to 29 category)
- [ ] Canadian model feasibility confirmed
- [ ] YouTube link added to 1.6
- [ ] All word counts verified
- [ ] Proofread for typos
- [ ] Submitted before December 1, 2025, 3:00 PM ET
