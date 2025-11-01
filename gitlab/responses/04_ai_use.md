PolicyEngine will deploy AI across three integrated systems that transform policy documents into verified benefit calculations:

**1. Atlas: AI-Powered Document Infrastructure**

Government benefit documentation presents a unique challenge—policy documents scatter across thousands of state and local websites, links break frequently, and PDFs disappear without warning. Atlas addresses this infrastructure failure by continuously monitoring sources, archiving documents, and tracking updates to ensure benefit rules remain accessible.

We use LLMs to identify relevant policy documents through intelligent web search and classification. Semantic embeddings enable discovery of related provisions across jurisdictions, while change detection algorithms monitor for policy updates that trigger re-encoding workflows. Our working demo at https://policyengine.github.io/atlas/ demonstrates these capabilities. Nava has already expressed interest in using Atlas as source material for their AI tools, validating market demand.

**2. AI Code Generation with Rigorous Benchmarking**

The heart of our approach transforms policy text into executable code. LLMs extract benefit rules from Atlas documents and generate PolicyEngine Python code, but the innovation lies in our validation methodology. We establish gold-standard implementations where human experts encode programs with comprehensive test coverage, then measure whether AI-generated code can match that quality.

PolicyEngine already provides nationwide coverage for major federal programs including SNAP, Medicaid, CHIP, ACA premium subsidies, WIC, federal and state income tax credits, and SSI. This strong foundation serves as training data for our AI systems. However, complex state-administered programs remain partially covered. We've manually encoded TANF in seven states, CCDF childcare subsidies in four states, LIHEAP energy assistance in six states, and SSI state supplements in three states. This grant enables nationwide expansion of these state-specific programs, chosen because we've proven feasibility, state variations create complexity that benefits from automation, and partner organizations explicitly need broader coverage.

The development process maintains rigorous quality standards. LLMs read policy documents and extract eligibility rules, then generate PolicyEngine code that runs through our test suites. We compare results against expert implementations, recording successes and failures to iteratively improve prompts until AI quality matches human baselines.

We leverage state-of-the-art LLMs from OpenAI, Anthropic, and other providers, with prompts refined through analysis of over 1,000 successfully merged contributions. We're already using advanced coding agents for TANF encoding—this project systematizes and measures that approach. Our validation covers test suite pass rates, code structure and readability, edge case handling, and documentation completeness, with all metrics published openly.

This benchmarking matters because it separates capability from hype. We'll establish which models excel at policy encoding, identify where human review remains essential, and create reproducible methodology for the civic tech community.

**3. LLM Accuracy Evaluation Research**

Beyond code generation, we'll conduct systematic research on a fundamental question: How accurately can LLMs determine benefit eligibility? This research generates thousands of test cases spanning diverse household scenarios and benefit programs, then measures accuracy under three conditions: LLMs operating alone, LLMs with access to policy documents, and LLMs using PolicyEngine's structured API.

Test cases cover the full spectrum of real-world complexity. We vary household income from $0 to $100,000, family sizes from single individuals to eight-person households, and compositions including single parents, married couples, and multigenerational families. We test against major programs including SNAP, TANF, LIHEAP, CCDF, Medicaid, and housing assistance, with particular attention to edge cases like categorical eligibility, benefit cliffs, and program interactions.

This research provides quantitative evidence about when structured calculation tools are necessary versus when language models suffice. By measuring where LLMs hallucinate eligibility, miscalculate amounts, or invent nonexistent rules, we'll help the field understand appropriate boundaries for AI deployment in benefits navigation.

**Integration and Technical Support**

These three components form an integrated pipeline: Atlas maintains authoritative documents, code generation transforms those documents into calculations, and our evaluation research validates that structured tools outperform unstructured AI. OpenAI technical advisors will help optimize prompts for policy language, prevent hallucinations in code generation, design unbiased evaluation methodology, and ensure test coverage without training data contamination.

**Open Source Impact**

As public infrastructure, PolicyEngine multiplies the impact of these improvements. Every enhancement becomes immediately available through our Python package and Docker image, enabling any nonprofit, government agency, or startup to build on AI-accelerated infrastructure. Published benchmarks and evaluation frameworks become public goods, helping the entire civic tech field understand AI's capabilities and limitations in benefit calculations.

This isn't about replacing human expertise—it's about augmenting it. AI handles repetitive extraction and initial code generation, freeing policy experts to focus on validation, edge cases, and ensuring vulnerable families receive accurate information about critical support programs.