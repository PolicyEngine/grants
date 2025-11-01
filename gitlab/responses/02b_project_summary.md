Encoding benefit rules from policy documents is slow, manual work. PolicyEngine provides open-source calculation infrastructure (Python package, Docker, API) used by MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition, Mirza. We've manually encoded TANF, CCDF childcare subsidies, LIHEAP energy assistance, and SSI state supplements for select states—nationwide coverage requires hundreds of developer hours per program.

We'll build an AI pipeline: document retrieval and archiving feeds LLMs that extract rules and generate PolicyEngine code. The innovation is rigorous benchmarking—human experts encode programs as gold standards, then we measure whether AI matches that quality using test suites and iterative improvement. Goal: reduce encoding from weeks to hours.

Research component: generate thousands of test cases measuring LLM benefit estimation accuracy with policy documents versus PolicyEngine API. This quantifies why structured tools matter.

Deliverables: Document infrastructure, 5-10 programs encoded nationwide with quality benchmarking, published LLM accuracy research. Everything open-source for any organization building benefit tools.