**Development Progress:**

PolicyEngine already uses AI in production: GPT-4 integrated within a month of 2023 release (now using Claude), Claude Code multi-agent workflows for policy research (documented in blog posts), and policyengine-claude plugin. We're actively using Claude Code agents to encode TANF programs.

Atlas foundation exists: we have a working demo of document retrieval and storage. Nava has expressed interest in using Atlas as source material for their AI tools, validating market demand. Enhanced microdata uses ML (quantile regression forests) in production serving 100K+ API users. We have 1,000+ merged PRs as golden standard training data and 2,500+ policy citations.

Estimate: 40% of infrastructure exists. Main development: systematizing AI code generation with rigorous quality measurement and conducting LLM evaluation research.

**Six-Month Plan:**

**Milestone 1 (Months 1-2): Atlas Foundation + Initial Code Generation**

Scale Atlas from demo to systematic policy document coverage for target programs: LIHEAP (50 states), WIC (state variations), Section 8/housing choice vouchers, state rental assistance. Implement continuous monitoring for document updates and archiving to prevent link rot.

Simultaneously: Human experts encode 3 programs as "golden PR" benchmarks—creating comprehensive test suites, documenting edge cases, establishing quality standards. These serve as ground truth for measuring AI code quality.

AI Use: LLMs for document discovery and classification, embeddings for semantic search across jurisdictions, change detection when policies update.

Deliverable: Atlas covering target program documents across 50 states. Three golden PR benchmarks with full test suites.

**Milestone 2 (Months 2-4): AI Code Generation with Iterative Quality Improvement**

LLMs extract rules from Atlas documents and generate PolicyEngine code for 5-10 programs nationwide (LIHEAP, WIC, Section 8, rental assistance).

Rigorous evaluation: AI-generated code tested against golden PR standards. Measure: (1) Test suite pass rates, (2) Code structure quality (AI-assisted review), (3) Edge case coverage, (4) Documentation completeness. Record failures, adjust prompts, retry. Track quality improvement across iterations.

AI Use: Off-the-shelf LLMs (GPT-4, Claude) with prompts validated against merged PRs. Iterative prompt engineering based on failure analysis. AI-assisted code review for subjective quality assessment.

Deliverable: 5-10 programs encoded with published quality metrics comparing AI vs. human baseline. Documentation of which LLMs perform best, common failure modes, prompt engineering insights. Replicable methodology for civic tech organizations.

**Milestone 3 (Months 4-6): LLM Benefit Estimation Evaluation & Publication**

Research component: systematically measure LLM accuracy estimating benefit eligibility and amounts.

Generate test cases: Thousands of synthetic households (varying income, size, composition, assets, employment, disabilities) × benefit programs (SNAP, TANF, LIHEAP, WIC, Medicaid, housing) × edge cases (categorical eligibility, benefit interactions, phase-outs).

Three test conditions:
- Baseline: LLM alone estimating benefits (no tools)
- Intermediate: LLM + raw policy documents from Atlas
- Optimal: LLM + PolicyEngine API access (function calling)

Measure: Accuracy vs. PolicyEngine ground truth calculations. Error analysis: Do LLMs hallucinate eligibility? Miscalculate amounts? Miss interaction effects? Invent nonexistent rules?

AI Use: Multiple LLMs tested (GPT-4, Claude, Gemini, Llama). Generate diverse test cases covering demographic variation and program complexity. Analyze failure patterns to understand AI limitations for benefit calculations.

Publication: Research paper documenting which LLMs perform best, how tool access improves accuracy, where AI fails dangerously (e.g., telling ineligible people they qualify), and quantitative evidence for why benefit navigation requires structured tools.

Deliverable: Published research with open test suite, evaluation framework, and results dashboard. Establishes PolicyEngine as authoritative source on AI reliability for benefits.

**Expected Outcomes:**

Atlas: Systematic document coverage preventing link rot for targeted programs across 50 states.

Code quality: AI-generated code matching human expert quality for 5-10 programs, with published metrics showing improvement trajectory across iterations. Methodology replicable by other civic tech organizations.

Research impact: First rigorous evaluation of LLM accuracy for benefit calculations. Establishes which AI approaches work, which don't, and why structured tools matter. Published results inform entire field about AI capabilities and limitations for benefits.

Open source: All improvements to PolicyEngine's Python package, Docker image, and API freely available. Anyone building benefit tools benefits—not just current partners (MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition, Mirza) but future organizations, government agencies, researchers. Published benchmarks and evaluation framework become public goods for civic tech.
