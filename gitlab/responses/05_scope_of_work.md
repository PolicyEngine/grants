**Development Progress (Where We Are Now):**

PolicyEngine isn't starting from zero—we're already using AI extensively in production. We've deployed Claude Code multi-agent workflows for policy research automation (documented in our recent blog post), where specialized agents handle data fetching, Python script writing, and report generation. We've built the policyengine-claude plugin enabling other researchers to use Claude Code with PolicyEngine through the Model Context Protocol. We've integrated GPT-4 into our web app for generating policy analysis from microsimulation results. These aren't experiments—they're production features serving users.

For rules encoding specifically, we're using Claude Code agents with specialized skills and slash commands to encode new TANF programs. Early validation shows AI can draft accurate code when prompted with examples from our 1,000+ merged pull requests—human-reviewed, production-tested code serving as the gold standard for how expert developers translate policy language into executable calculations.

Our enhanced microdata, which uses quantile regression forests for income imputation, is production code serving over 100,000 API users with 40% improved accuracy. Stochastic imputation will extend this validated ML infrastructure to full household profiles. We've also built an MCP server demonstrating effective LLM integration and collected 2,500+ policy document citations that serve as training data for rule extraction.

Partner validation confirms demand: MyFriendBen, Amplifi, Starlight, and Student Basic Needs Coalition use our API in production and have confirmed that faster policy updates and stochastic imputation are critical infrastructure needs. Our Google Cloud Platform infrastructure, API systems, and CI/CD pipelines are all operational, meaning we're adding AI to existing, proven systems rather than building from scratch. We estimate we're 30% complete on technical groundwork—this isn't theoretical research, it's scaling experiments that are working.

**Six-Month Demonstration:**

**Milestone 1 (Months 1-2): Integrated Rule Extraction & Code Generation**

We'll build an end-to-end AI pipeline that takes policy documents and produces validated PolicyEngine code. Our target improvements focus on fine-grained eligibility details for existing programs (income phase-out calculations, asset test nuances, categorical eligibility chains), rapid updates when policies change (like SNAP emergency allotments or state EITC adjustments), and missing state variations in federal programs.

The AI approach uses off-the-shelf LLMs (GPT-4, Claude) with carefully designed prompts validated against PolicyEngine's 1,000+ merged pull requests. We'll develop structured extraction prompts for eligibility criteria and benefit formulas, generate Python code following proven patterns from our production codebase, and leverage our existing Claude Code agent experiments with TANF encoding. All AI-generated code goes through human review before deployment to ensure accuracy and maintainability.

We'll measure success through encoding time reduction (targeting 50% or more), accuracy compared to expert review (targeting 90% or higher), and partner adoption rates. The deliverable is 10 new programs or major improvements encoded using AI assistance, with published metrics comparing AI-assisted development to traditional manual encoding.

**Milestone 2 (Months 2-4): Stochastic Imputation Extension**

Building on PolicyEngine's existing ML imputation capabilities (which currently handle income only), we'll extend the system to predict full household profiles including assets, childcare expenses, medical costs, and family composition. This uses the same proven quantile regression forest foundation that already works in production, training gradient boosting models on 300,000+ households in our enhanced microdata to predict distributions for missing inputs and generate benefit range estimates with confidence intervals.

The practical impact is significant: instead of requiring users to answer 50 questions to get benefit estimates, navigators can provide useful ranges with only 30 questions answered. This stochastic API will launch with Starlight and MyFriendBen, validated to ensure 80% or more of actual household values fall within our predicted ranges. User testing will measure whether reduced data collection produces the expected 3× improvement in completion rates that partners anticipate.

**Milestone 3 (Months 4-6): Explanation Layer & Full Integration**

The final milestone deploys our LLM explanation system and integrates all three AI components with partners to measure end-to-end impact. The explanation layer generates plain-language descriptions from calculation traces, including policy citations, scenario comparisons, and confidence levels, with partner testing ensuring the AI-generated explanations are actually comprehensible to real users.

With the full pipeline operational—documents flowing to extracted rules to generated code to stochastic calculations to plain-language explanations—we'll monitor accuracy, processing speed, partner adoption patterns, and downstream benefits accessed by end users. The complete AI stack will be deployed with MyFriendBen, Amplifi, Starlight, and Student Basic Needs Coalition, giving us real-world validation across different use cases and user populations.

**Expected Outcomes:**

From a technical perspective, we expect to encode 20-30 new benefit programs or major improvements versus the 5-10 baseline we'd achieve with manual encoding, representing a 50-75% reduction in encoding time per program. The stochastic API will enable benefit estimates with 40% less required user data, and early testing suggests this could produce a 3× improvement in user completion rates. Partner adoption should be rapid, with new programs integrated within 2 weeks of encoding rather than the 2-3 months typical for manual integration.

The economic impact flows through our partners to end users. With AI enabling 20 programs serving 5,000 users each at an average $1,500 in benefits accessed, we conservatively estimate $150 million in benefits accessed—a 600× return on the $250K investment. This calculation is based on actual partner feedback about which programs they need, realistic user volumes from their current platforms, and conservative average benefit amounts across multiple program types.

Our final deliverables will be fully open-source: AI prompts and frameworks, ML models and training code, and a comprehensive evaluation report documenting what worked, what didn't, and how other civic tech organizations can replicate our AI-accelerated approach to rules-as-code development.
