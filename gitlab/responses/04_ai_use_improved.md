PolicyEngine will deploy AI across three integrated systems transforming policy documents into verified benefit calculations:

**1. Atlas: AI-Powered Document Infrastructure**

LLMs retrieve, process, and maintain policy documents that benefit rules depend on. Current challenge: policy documents scatter across 50 state websites, links break, PDFs disappear. Atlas solves this by continuously monitoring sources, archiving documents, and tracking updates.

AI use: LLMs identify relevant policy documents through web search and classification. Semantic search using embeddings finds related provisions across jurisdictions. Change detection algorithms monitor when policies update, triggering re-encoding workflows.

We have a working Atlas demo at https://policyengine.github.io/atlas/ that demonstrates AI-powered document crawling and permanent archiving. Nava has expressed interest in using Atlas as source material for their AI tools, validating demand. This grant scales it from demo to systematic coverage.

**2. AI Code Generation with Rigorous Benchmarking**

LLMs extract benefit rules from Atlas documents and generate PolicyEngine Python code. The innovation is rigorous validation: we establish "golden PR" benchmarks where human experts encode programs as gold standards, then measure whether AI can match that quality.

Target programs for nationwide expansion based on what we've manually encoded in select states:
- **TANF** (Temporary Assistance for Needy Families) - currently in 7 states, expand to all 50
- **CCDF** (Child Care and Development Fund) - state childcare subsidies, currently in 4 states
- **LIHEAP** (Low Income Home Energy Assistance) - currently in 6 states (CO, CA, IL, NC, MA, TX)
- **SSI State Supplements** - additional state payments to federal SSI, currently in 3 states
- **State rental assistance** - varies widely by state, currently sporadic coverage

These programs were chosen because: (1) we have manual implementations proving feasibility, (2) state variations are complex enough to benefit from AI acceleration, (3) partner organizations have explicitly requested broader coverage.

Process: LLM reads policy document → extracts eligibility rules → generates PolicyEngine code → runs through test suite → compares against human golden PR → records pass/fail → adjusts prompts → retries. Iterative improvement until AI code quality matches human expert baseline.

Technical: Off-the-shelf LLMs (GPT-4, Claude) with prompts validated against 1,000+ merged PolicyEngine PRs. We're already using Claude Code agents for TANF encoding with specialized skills—this systematizes and measures that approach.

Validation methodology: (1) Test suite pass rates, (2) AI-assisted code review comparing structure/readability, (3) Edge case coverage, (4) Documentation quality. All metrics published openly.

Why rigorous benchmarking matters: Shows what AI can actually do versus hype. Establishes which LLMs work best for policy encoding. Identifies where human review remains essential. Creates replicable methodology for civic tech.

**3. LLM Benefit Estimation Evaluation (Research Component)**

Generate thousands of test cases (household characteristics × benefit programs × edge cases) and measure: Can LLMs accurately estimate benefit eligibility and amounts?

Three conditions tested:
- LLM alone (just the model)
- LLM + raw policy documents
- LLM + PolicyEngine API access (structured tool)

Measure accuracy against PolicyEngine ground truth. Identify failure modes: Do LLMs hallucinate eligibility? Miscalculate amounts? Miss edge cases? Invent rules that don't exist?

This demonstrates PolicyEngine's value proposition. When people ask "why not just use ChatGPT for benefits?" we'll have data showing actual accuracy rates and failure patterns.

Test case generation: Vary income ($0-100K), household size (1-8), composition (single/married, children/no children), employment, assets, expenses, disabilities. Cross with programs (SNAP, TANF, LIHEAP, CCDF, Medicaid, housing). Generate edge cases (categorical eligibility, benefit cliffs, interaction effects).

Publication: Results show which LLMs perform best, where they fail, and quantitative evidence for why benefit navigation needs structured tools like PolicyEngine rather than relying on LLM knowledge alone.

**Integration & OpenAI Support:**

These three components integrate: Atlas provides documents → Code generation creates rules → LLM evaluation validates that structured tools (PolicyEngine API) outperform unstructured AI alone.

OpenAI technical advisors will help: (1) Optimize prompts for policy language extraction, (2) Prevent hallucinations in code generation, (3) Design fair LLM evaluation methodology, (4) Ensure test cases cover diverse scenarios without contamination.

API credits enable: Processing thousands of policy documents (Atlas), generating code for hundreds of variables, running thousands of LLM benefit estimation tests.

**Open Source Multiplier:**

PolicyEngine is public infrastructure. Improvements don't just help current partners—they're freely available as Python package and Docker image. Any nonprofit, government agency, or startup building benefit tools can use AI-accelerated PolicyEngine. Published research and benchmarks help the entire civic tech field understand AI capabilities and limitations for benefit calculations.