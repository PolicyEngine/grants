**Development Progress**

PolicyEngine already demonstrates significant AI integration and comprehensive coverage. We provide nationwide calculations for SNAP, Medicaid, CHIP, ACA subsidies, WIC, federal tax credits, and all major state income taxes. This foundation represents thousands of hours of manual encoding that now serves as training data for our AI systems. We rapidly adopt cutting-edge models as they release and now use multi-agent workflows for policy research through our custom plugins. Our Atlas demo (https://policyengine.github.io/atlas/) shows functioning document retrieval and archiving capabilities. The enhanced microdata powering our API uses machine learning techniques including quantile regression forests, serving thousands of users daily.

Our foundation includes over 1,000 merged contributions providing training data, plus 2,500 policy citations ensuring accuracy. We're actively using AI coding agents to encode TANF programs, proving the approach works but highlighting the need for systematization and measurement to expand complex state-administered programs.

We estimate 40% of required infrastructure already exists. The primary development need involves systematizing AI code generation with rigorous quality measurement and conducting comprehensive evaluation research.

**Six-Month Implementation Plan**

**Months 1-2: Document Infrastructure and Baseline Standards**

We'll scale Atlas from demonstration to systematic coverage of programs we've successfully encoded in select states. This includes expanding TANF from seven states to nationwide coverage, CCDF childcare subsidies from four states, LIHEAP energy assistance from six states, and SSI state supplements from three states. The system will implement continuous monitoring to prevent link rot and capture policy updates in real-time.

Simultaneously, human experts will create three gold-standard program implementations with comprehensive test suites documenting edge cases and establishing quality baselines. These expert implementations become the benchmark against which we measure AI performance, ensuring generated code meets professional standards.

Deliverable: Atlas covering target programs across all states, plus three expert implementations with complete test coverage serving as quality benchmarks.

**Months 2-4: AI Code Generation and Quality Validation**

Building on Atlas's document foundation, we'll deploy LLMs to extract rules and generate PolicyEngine code for 5-10 programs nationwide. The process emphasizes continuous quality improvement through iterative refinement.

AI-generated code undergoes rigorous evaluation against expert implementations. We measure test pass rates, analyze code structure and readability, assess edge case coverage, and evaluate documentation quality. Failed attempts inform prompt adjustments, creating a feedback loop that drives quality toward human baselines.

We'll test multiple language models from leading providers including OpenAI, Anthropic, and Google to identify optimal performers for policy encoding. All metrics will be published openly, enabling civic tech organizations to learn from our methodology and results.

Deliverable: 5-10 programs encoded nationwide with published quality metrics, documentation of model performance comparisons, and reproducible methodology for AI-assisted policy encoding.

**Months 4-6: Comprehensive Accuracy Research**

The final phase addresses a critical question: How accurately can LLMs estimate benefit eligibility? This research systematically evaluates LLM performance across thousands of test cases representing real-world diversity.

Test scenarios span household incomes from $0 to $100,000, family sizes from one to eight members, and various compositions including single parents, married couples, and multigenerational families. We'll evaluate major programs including SNAP, TANF, LIHEAP, CCDF, Medicaid, and housing assistance, with special attention to edge cases involving categorical eligibility, benefit cliffs, and program interactions.

Each test case runs under three conditions to establish clear performance boundaries. First, LLMs operate independently without additional resources. Second, they access raw policy documents from Atlas. Third, they utilize PolicyEngine's structured API. This comparison quantifies the value of structured calculation tools versus unstructured AI approaches.

The research identifies specific failure modes, documenting where LLMs hallucinate eligibility, miscalculate benefit amounts, miss program interactions, or invent nonexistent rules. These findings help establish appropriate boundaries for AI deployment in benefits navigation.

Deliverable: Published research paper with open test suite and evaluation framework, plus an interactive dashboard displaying accuracy rates and failure patterns across different approaches.

**Expected Outcomes**

Technical achievements include Atlas providing stable document access for four major programs nationwide, AI code generation matching expert quality for 5-10 programs, benchmarks demonstrating 3-5× encoding speed improvements, and research establishing clear baselines for LLM accuracy in benefit calculations.

The ecosystem impact extends beyond PolicyEngine. All improvements release as open-source tools through our Python package and Docker image. Published methodologies enable other organizations to adopt AI-assisted encoding. Research findings inform the entire field about appropriate AI deployment. Partner organizations can immediately offer newly encoded programs to their users.

This transformation matters because manual encoding currently bottlenecks benefit calculator expansion. Even threefold acceleration while maintaining quality fundamentally changes what's possible. Partners can expand from limited state coverage to nationwide reach. New programs deploy in days rather than months. The entire ecosystem becomes more responsive to policy changes and user needs.