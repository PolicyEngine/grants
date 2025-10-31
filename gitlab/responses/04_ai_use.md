PolicyEngine will deploy AI across three integrated systems to automate rules-as-code from policy documents to calculations:

**1. Automated Rule Extraction & Code Generation (The Core Innovation)**

LLMs analyze policy PDFs, legislative text, and regulatory manuals to extract benefit eligibility rules—income limits, phase-out rates, household requirements, asset tests. The AI then generates PolicyEngine Python code from extracted rules: variable definitions, formulas, parameter structures. Human developers review outputs, but AI handles the initial heavy lift.

Current process: Developer reads 50-page policy manual, hand-codes variables, tests edge cases. 40-80 hours per program.

AI process: LLM extracts rules to JSON schema → generates Python code → developer reviews/refines. 10-15 hours per program.

Technical approach: Fine-tune LLMs on PolicyEngine's 2,500+ annotated policy documents (our gold-standard training corpus). Develop structured extraction prompts for benefit formulas. Implement validation checking AI-generated code against PolicyEngine coding standards.

Why this is transformative: We've spent 3 years manually encoding 1,000+ variables. AI enables encoding the remaining 80% of benefit programs in 1 year instead of 10. This removes the bottleneck preventing MyFriendBen from offering California EITC, Starlight from covering Texas childcare subsidies, Student Basic Needs Coalition from serving all 50 states.

**2. Stochastic Imputation for Incomplete User Data (Already 30% Built)**

Machine learning models predict missing household characteristics when benefit navigators have partial user information. Instead of requiring users to answer 50 questions, we calculate benefit ranges from 30 questions by statistically imputing likely values for the missing 20.

We've already built the foundation: PolicyEngine's enhanced CPS microdata uses quantile regression forests to improve income imputation accuracy 40%+. This grant extends that to full household profiles—predicting assets, childcare expenses, medical costs, family composition from partial inputs.

Technical approach: Train gradient boosting models on 300,000+ households in enhanced microdata. Generate benefit range estimates with confidence intervals. When Starlight knows income but not assets, we predict asset distribution and calculate "you likely qualify for $1,200-2,400 in benefits (80% confidence)."

Why this matters: 40% less data collection = 3× more users complete screening (reduces dropout). More people get estimates, more people apply, more benefits accessed. Partners report data collection is #1 user friction point.

**3. Natural Language Explanation Layer**

LLMs translate PolicyEngine's calculation outputs into plain language for consumer tools. When API returns "$3,200 SNAP, $1,800 TANF, $400 EITC," AI explains: "With your household size and income, you qualify for the maximum SNAP benefit. The TANF amount is based on your state's payment standard for a family of four. Your EITC phases in as earnings increase—working 10 more hours per week could increase this by $120/month."

Technical approach: Generate explanations from PolicyEngine calculation traces. Include citations to policy sources, confidence levels, scenario comparisons. Fine-tune on partner feedback about which explanations resonate vs. confuse users.

Why partners need this: MyFriendBen wants to show not just "you qualify" but WHY and WHAT IF. Starlight's credit union partners need to explain complex benefit interactions. Our API currently returns numbers; partners write explanations manually. AI automates this.

**Integration & OpenAI Support:**

These three components form an integrated pipeline: Documents → Extracted rules → Generated code → Calculations with partial data → Plain language explanations. OpenAI technical advisors will be crucial for: (1) Optimizing extraction prompts for complex policy language, (2) Preventing hallucinations in code generation, (3) Ensuring explanation quality and readability, (4) Handling edge cases and ambiguous policy text.

API credits enable: Processing thousands of policy documents (rule extraction), generating code for hundreds of variables, producing millions of explanations for end-users through partners.

**Why This Is Different:**

Most AI benefit projects focus on consumer interfaces. We're automating the infrastructure layer that ALL tools depend on. This is higher leverage: instead of helping one navigator serve more people, we help EVERY navigator cover more programs. Each hour of AI-accelerated encoding multiplies across MyFriendBen's 50K users, Starlight's credit unions, Student Basic Needs Coalition's campuses, and future partners we don't know yet.
