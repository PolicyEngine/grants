Six-month demonstration building and validating AI infrastructure across the complete rules-as-code pipeline:

**Milestone 1 (Months 1-2): LLM-Powered Rule Extraction**

Build AI system extracting benefit rules from policy documents. Focus on 10 high-impact state programs currently not in PolicyEngine (e.g., state EITC variations, childcare subsidies, energy assistance).

AI Use: Fine-tune LLMs on PolicyEngine's existing 2,500+ annotated policy documents. Develop structured extraction prompts for eligibility criteria, benefit formulas, income limits. Output: JSON schemas validated against source documents.

Deliverable: Functional rule extraction pipeline processing 100+ state policy documents with 85%+ accuracy vs. human expert review.

**Milestone 2 (Months 2-3): AI-Assisted Code Generation**

LLMs generate PolicyEngine Python code from extracted rule schemas. Human developers review and refine AI-generated variables, formulas, and parameters.

AI Use: Develop prompts translating rule schemas into PolicyEngine code structure. Train on existing codebase (1,000+ variables) to learn patterns. Implement validation checking generated code against PolicyEngine standards.

Deliverable: 10 new state benefit programs encoded with 50%+ reduction in developer time. Published accuracy metrics comparing AI-generated vs. human-written code.

**Milestone 3 (Months 3-4): Stochastic Imputation Models**

Build ML models predicting missing household characteristics to enable benefit calculations with partial information.

AI Use: Train quantile regression forests and gradient boosting models on PolicyEngine's enhanced CPS microdata (300K+ households). Predict distributions for missing inputs (income, assets, household composition, expenses). Generate benefit range estimates with confidence intervals.

Deliverable: Stochastic API endpoint enabling benefit range predictions with partial household data. Validation showing 80%+ of actual values fall within predicted ranges.

**Milestone 4 (Months 4-5): LLM Explanation Layer**

Build natural language explanation system translating calculations into plain language for consumer tools.

AI Use: Fine-tune LLMs to generate explanations from PolicyEngine calculation traces. Include citations to policy sources, confidence levels, and scenario comparisons ("if your income increases by $500/month, your benefits decrease by $120/month"). Develop templates for common eligibility scenarios.

Deliverable: Explanation API integrated with 3 partner tools (MyFriendBen, Student Basic Needs Coalition, one additional partner). User testing showing 90%+ comprehension of AI-generated explanations.

**Milestone 5 (Months 5-6): Partner Integration & Impact Measurement**

Deploy complete AI stack with benefit navigation partners and measure downstream impact.

AI Use: Full pipeline operational - documents → rules → code → calculations → explanations. Monitor accuracy, speed, user comprehension. A/B test AI-generated vs. human-written explanations.

Deliverable: Published evaluation showing: (1) 5-10× faster program encoding, (2) benefit range predictions enabling estimates with 40% less user data collection, (3) partner user growth enabled by expanded coverage, (4) estimated $ in benefits accessed through newly encoded programs.

**Expected Outcomes:**

Technical: 20-30 new benefit programs encoded (vs. 5-10 baseline). API latency reduced 50%+ through ML prediction caching. Explanation quality matching human experts in user comprehension tests.

Partner Impact: MyFriendBen, Starlight, Student Basic Needs Coalition, Amplifi gain access to programs not previously available. Measured through partner user growth and engagement with new program coverage.

Economic Impact: Each new encoded program enables partners to serve additional users. Conservative estimate: 10 programs × 5,000 users each × $1,500 average benefit = $75M in benefits accessed enabled by faster encoding. 300× ROI on $250K grant through downstream partner impact.

Open Source: All AI prompts, validation frameworks, and stochastic models published open-source, enabling other civic tech organizations to replicate the approach.
