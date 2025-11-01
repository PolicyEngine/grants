PolicyEngine will deploy AI across three integrated systems to automate rules-as-code from policy documents to calculations:

**1. Automated Rule Extraction & Code Generation**

LLMs analyze policy PDFs and legislative text to extract benefit eligibility rules—income limits, phase-out rates, asset tests. AI then generates PolicyEngine Python code from extracted rules. Human developers review outputs, but AI handles initial translation from policy language to executable code.

Current process: 40-80 hours per program. AI-assisted: 10-15 hours per program.

Technical approach: Off-the-shelf LLMs (GPT-4, Claude) with prompts validated against PolicyEngine's 1,000+ merged pull requests—human-reviewed code showing how experts translate policy to calculations. We're already using Claude Code agents to encode new TANF programs with specialized skills and slash commands.

This enables keeping pace with policy updates (hundreds annually across 50 states), capturing edge cases, and responding to partner needs within days instead of months.

**2. Stochastic Imputation for Incomplete User Data**

Machine learning models predict missing household characteristics when benefit navigators have partial information. Instead of requiring 50 questions, calculate benefit ranges from 30 questions by imputing likely values for missing data.

Foundation already built: PolicyEngine's enhanced microdata uses quantile regression forests for income imputation (production code serving 100K+ users). This extends that validated approach to assets, expenses, family composition.

Technical: Train gradient boosting models on 300,000+ households. Predict distributions with confidence intervals. When Starlight knows income but not assets, we calculate "likely $1,200-2,400 in benefits (80% confidence)."

Impact: Reduced data collection improves completion rates. Partners report data collection is a major user friction point.

**3. Natural Language Explanation Layer**

LLMs translate PolicyEngine calculations into plain language. When API returns "$3,200 SNAP," AI explains why and what if: "With your household size and income, you qualify for maximum SNAP. This phases out as income increases—working 10 more hours weekly could reduce benefits by $120/month."

Partners need this: MyFriendBen wants to show not just "you qualify" but WHY. Our API currently returns numbers; partners write explanations manually.

**Integration & OpenAI Support:**

These form an integrated pipeline: Documents → Rules → Code → Calculations with partial data → Plain language explanations.

OpenAI technical advisors will help optimize prompts for complex policy language, prevent hallucinations in code generation, and ensure explanation quality. API credits enable processing thousands of policy documents and generating millions of explanations for end-users through partners.

**Infrastructure Leverage:**

Most AI benefit projects focus on consumer interfaces. We're automating infrastructure that multiple tools depend on. When we improve PolicyEngine, it helps MyFriendBen's 50K users, Amplifi's platform, Starlight's credit unions, and Student Basic Needs Coalition's campuses simultaneously.
