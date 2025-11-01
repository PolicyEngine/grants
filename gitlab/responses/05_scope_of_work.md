**Development Progress:**

PolicyEngine already uses AI in production. We integrated GPT-4 within a month of its 2023 release, now use Claude Code multi-agent workflows for policy research, and have developed the policyengine-claude plugin. Our Atlas demo (https://policyengine.github.io/atlas/) shows working document retrieval and archiving. Enhanced microdata uses machine learning (quantile regression forests) in production serving our API users.

We have 1,000+ merged pull requests as training data and 2,500+ policy citations grounding our calculations in authoritative sources. We're actively using Claude Code agents to encode TANF programs, proving the approach works but needs systematization and measurement.

Estimate: 40% of infrastructure exists. Main development: systematizing AI code generation with rigorous quality measurement and conducting LLM evaluation research.

**Six-Month Plan:**

**Milestone 1 (Months 1-2): Atlas Foundation + Golden Standards**

Scale Atlas from demo to systematic coverage for programs we've manually encoded in select states:
- TANF (expand from 7 states to nationwide)
- CCDF childcare subsidies (expand from 4 states)
- LIHEAP energy assistance (expand from 6 states)
- SSI state supplements (expand from 3 states)

Implement continuous monitoring to prevent link rot and capture policy updates as they happen.

Simultaneously, human experts encode 3 programs as "golden PR" benchmarks—comprehensive test suites documenting edge cases and establishing quality baselines. These become ground truth for measuring AI performance.

Deliverable: Atlas covering target programs across 50 states. Three golden PRs with full test coverage.

**Milestone 2 (Months 2-4): AI Code Generation with Quality Metrics**

Deploy LLMs to extract rules from Atlas documents and generate PolicyEngine code for 5-10 programs nationwide.

Rigorous evaluation process:
1. AI generates code from policy documents
2. Run against golden PR test suites
3. Measure test pass rates, code structure, edge case coverage
4. Record failures and adjust prompts
5. Iterate until quality approaches human baseline

We'll test multiple LLMs (GPT-4, Claude, Gemini) to identify which performs best for policy encoding. All metrics published openly so civic tech organizations can learn from our approach.

Deliverable: 5-10 programs encoded nationwide with published quality metrics. Documentation of which LLMs work best, common failure modes, and replicable methodology.

**Milestone 3 (Months 4-6): LLM Evaluation Research**

Research question: How accurately can LLMs estimate benefit eligibility and amounts?

Generate thousands of test cases:
- Household variations: Income ($0-100K), size (1-8), composition, employment, disabilities
- Programs: SNAP, TANF, LIHEAP, CCDF, Medicaid, housing assistance
- Edge cases: Categorical eligibility, benefit cliffs, program interactions

Three test conditions:
1. LLM alone (baseline)
2. LLM + raw policy documents
3. LLM + PolicyEngine API (optimal)

Measure accuracy against PolicyEngine's validated calculations. Identify where LLMs fail: hallucinated eligibility, calculation errors, missed interactions, invented rules.

This provides quantitative evidence for why benefit navigation needs structured calculation tools, not just language models.

Deliverable: Published research with open test suite and evaluation framework. Dashboard showing which approaches work, accuracy rates, and failure patterns.

**Expected Outcomes:**

**Technical achievements:**
- Atlas providing stable document access for 4 major programs across 50 states
- AI code generation matching human quality for 5-10 programs
- Published benchmarks showing 3-5× encoding speed improvement
- Research establishing LLM accuracy baselines for benefit calculations

**Ecosystem impact:**
- All improvements available as open-source Python package and Docker image
- Published methodology enabling other organizations to adopt AI-assisted encoding
- Research informing the field about appropriate AI use in benefit navigation
- Partner organizations immediately able to offer newly encoded programs

**Why this matters:**
Manual encoding is the bottleneck limiting benefit calculator coverage. If AI can accelerate this by even 3× while maintaining quality, it transforms what's possible. Partners can expand from serving users in a few states to nationwide coverage. New programs can be added in days instead of months. The entire ecosystem becomes more responsive to policy changes and user needs.