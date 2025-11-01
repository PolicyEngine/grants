PolicyEngine will deploy AI across three integrated systems:

**1. Atlas: Document Infrastructure**
Government benefit documents scatter across thousands of websites with frequent link rot. Atlas uses LLMs to continuously monitor, archive, and track policy documents. Our demo (https://policyengine.github.io/atlas/) shows these capabilities. Nava has expressed interest in using Atlas for their AI tools.

**2. AI Code Generation**
LLMs extract rules from documents and generate PolicyEngine Python code, validated against expert implementations. PolicyEngine already covers SNAP, Medicaid, CHIP, ACA subsidies, WIC, and federal/state tax credits nationwide. This grant expands state-specific programs we've partially encoded: TANF (7→50 states), CCDF (4→50), LIHEAP (6→50), SSI supplements (3→50).

We test AI code against expert baselines measuring: test pass rates, code quality, edge case coverage, documentation. Multiple LLMs (OpenAI, Anthropic, Google) are evaluated to identify best performers. All metrics published openly.

**3. LLM Evaluation Research**
Generate thousands of test cases measuring LLM accuracy under three conditions: LLM alone, LLM+documents, LLM+PolicyEngine API. Test scenarios span diverse households ($0-100K income, 1-8 members) and programs (SNAP, TANF, LIHEAP, CCDF, Medicaid). Research identifies where LLMs fail, helping establish appropriate AI boundaries.

**Integration**: Atlas provides documents→code generation creates rules→evaluation validates effectiveness. OpenAI advisors help optimize prompts, prevent hallucinations, ensure unbiased methodology.

**Open Source Impact**: All improvements available through Python package/Docker image. Published benchmarks become public goods for civic tech.