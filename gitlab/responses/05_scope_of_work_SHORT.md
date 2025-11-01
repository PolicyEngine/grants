**Current Progress**
PolicyEngine provides nationwide coverage for SNAP, Medicaid, CHIP, ACA subsidies, WIC, federal/state taxes. We have 2,000+ merged contributions and 2,500+ policy citations. Atlas demo operational. Already using AI agents for TANF encoding. ~40% of infrastructure exists.

**Months 1-2: Document Infrastructure & Baselines**
Scale Atlas to systematic coverage for TANF, CCDF, LIHEAP, SSI supplements nationwide. Implement continuous monitoring to prevent link rot. Human experts create three gold-standard implementations with comprehensive test suites as quality benchmarks.

Deliverable: Atlas covering target programs across 50 states, three expert implementations with full test coverage.

**Months 2-4: AI Code Generation**
Deploy LLMs to generate PolicyEngine code for 5-10 programs nationwide. Evaluate against expert implementations measuring test pass rates, code quality, edge cases, documentation. Test multiple providers (OpenAI, Anthropic, Google) to identify best performers. Published metrics enable civic tech learning.

Deliverable: 5-10 programs encoded nationwide with quality metrics and reproducible methodology.

**Months 4-6: Accuracy Research**
Generate thousands of test cases across diverse households and programs. Compare LLM accuracy: alone vs. with documents vs. with PolicyEngine API. Identify failure modes (hallucinated eligibility, calculation errors, missed interactions).

Deliverable: Published research with open test suite and interactive dashboard showing accuracy patterns.

**Impact**: 3-5× encoding speed, systematic nationwide coverage, published methodology for civic tech, immediate availability to partners. Transforms state-specific program encoding from months to days.