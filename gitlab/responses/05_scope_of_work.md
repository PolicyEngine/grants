**Development Progress (Where We Are Now):**

PolicyEngine isn't starting from zero—we have production systems demonstrating feasibility:

Proven ML capability: Our enhanced microdata uses quantile regression forests for income imputation (40%+ accuracy improvement). This is PRODUCTION code serving 100K+ API users. Stochastic imputation (Milestone 3) extends existing, validated ML infrastructure.

Policy document corpus: 2,500+ policy citations collected, validated, and indexed. This training data for LLM rule extraction already exists. We've experimented with LLM-based policy search through our MCP server—proof we can integrate LLMs effectively.

Partner validation: MyFriendBen, Starlight, Student Basic Needs Coalition, and Amplifi use our API in production. They've confirmed faster encoding and stochastic imputation are their #1 infrastructure needs. Demand is proven.

Infrastructure: Google Cloud Platform, API handling 100K users, open-source repositories, CI/CD pipelines all operational. We're adding AI to existing infrastructure, not building from scratch.

Estimate: 30% of technical groundwork complete. Primary development needed: LLM fine-tuning for extraction/generation, extending ML models to full household profiles, explanation prompt optimization.

**Six-Month Demonstration:**

**Milestone 1 (Months 1-2): Integrated Rule Extraction & Code Generation**

Build end-to-end AI pipeline: policy documents → extracted rules → generated PolicyEngine code. Target improvements: fine-grained eligibility details for existing programs (income phase-out calculations, asset test nuances, categorical eligibility chains), rapid updates when policies change (e.g., SNAP emergency allotments, state EITC adjustments), and missing state variations in federal programs.

AI Use: Fine-tune LLMs on PolicyEngine's 2,500+ policy documents (training data ready). Develop extraction prompts for eligibility criteria and benefit formulas. Generate Python code following PolicyEngine patterns (1,000+ existing variables as training corpus). Human review before deployment.

Deliverable: 10 new programs encoded. Measure: encoding time reduction (target 50%+), accuracy vs. expert review (target 90%+), partner adoption rate.

**Milestone 2 (Months 2-4): Stochastic Imputation Extension**

Extend PolicyEngine's existing ML imputation (currently: income only) to full household profiles: assets, childcare expenses, medical costs, family composition.

AI Use: Build on proven quantile regression forest foundation. Train gradient boosting models on 300K+ households. Predict distributions for missing inputs. Generate benefit range estimates with confidence intervals.

Deliverable: Stochastic API live with Starlight and MyFriendBen. Validation: 80%+ of actual values within predicted ranges. User testing: 3× completion rate improvement from reduced data collection.

**Milestone 3 (Months 4-6): Explanation Layer & Full Integration**

Deploy LLM explanation system. Integrate all three AI components with partners. Measure end-to-end impact.

AI Use: Generate plain-language explanations from calculation traces. Include policy citations, scenario comparisons, confidence levels. Partner testing and iteration.

Deliverable: Complete AI stack deployed with MyFriendBen, Starlight, Student Basic Needs Coalition. Measured impact:

Full pipeline operational: documents → rules → code → stochastic calculations → explanations. Monitor accuracy, speed, partner adoption, downstream benefits accessed.

**Expected Outcomes:**

Programs encoded: 20-30 new benefit programs (vs. 5-10 without AI). Encoding time: 50-75% reduction per program. Stochastic API: 40% less user data required for estimates, 3× completion rate improvement.

Partner adoption: MyFriendBen, Starlight, Student Basic Needs Coalition integrate new programs within 2 weeks of encoding (vs. 2-3 months for manual integration).

Economic impact: 20 programs × 5,000 users per program × $1,500 average benefit = $150M in benefits accessed. 600× ROI through infrastructure leverage—one improvement helps ALL navigators.

Deliverable: Open-source AI prompts, ML models, evaluation report. Published "playbook" enabling any civic tech organization to replicate AI-accelerated rules-as-code.
