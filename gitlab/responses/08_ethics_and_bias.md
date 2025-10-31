AI-powered rules-as-code presents significant ethical concerns we're committed to addressing:

**1. Hallucination Risk (Accuracy):**

Concern: LLMs might generate plausible-but-wrong benefit rules or calculations, leading people to incorrect benefit expectations.

Mitigation:
- Deterministic validation: All AI-generated rules validated against authoritative sources before deployment
- Human-in-the-loop: Developers review all AI-generated code before production
- Confidence scores: LLM outputs include confidence metrics; low-confidence rules flagged for human review
- Continuous testing: AI-generated calculations tested against known cases and partner feedback
- Transparency: All rules cite source documents; users/partners can verify
- Never use AI for final eligibility determinations—only for extraction, code drafting, and explanation

**2. Bias in Stochastic Imputation:**

Concern: ML models predicting missing household data might perpetuate demographic biases, disadvantaging already-marginalized groups.

Mitigation:
- Training data audits: Enhanced Census microdata analyzed for demographic representation across race, gender, geography
- Fairness metrics: Test predicted benefit ranges across demographic groups, flag disparities
- Confidence intervals: Provide ranges, not point estimates—acknowledge uncertainty
- Partner feedback: MyFriendBen and other frontline tools report if predictions seem biased
- Open-source models: Public scrutiny enables community-driven bias detection and correction
- Validation: Compare predictions against actual benefit receipt data from partners

**3. Coverage Gaps (Equity):**

Concern: AI might accelerate encoding of "easy" programs while neglecting complex programs serving marginalized communities.

Mitigation:
- Prioritize underserved programs: Explicitly target state programs with low digitization (e.g., tribal benefits, immigrant-accessible programs)
- Partner input: MyFriendBen, Student Basic Needs Coalition identify high-need coverage gaps
- Accessibility scoring: Track which demographics each new program serves; balance coverage
- Public roadmap: Transparent about what's covered vs. gaps

**4. Explainability (Trust):**

Concern: AI-generated explanations might be incomprehensible or misleading to low-literacy users.

Mitigation:
- Readability testing: All LLM outputs tested for grade 6-8 reading level
- User testing with frontline partners: MyFriendBen validates explanations with actual users
- Multiple explanation styles: Technical (for caseworkers) vs. plain language (for individuals)
- Opt-out: Partners can disable AI explanations, use human-written text instead
- Feedback loops: Track which explanations confuse users, iterate prompts

**5. Open Source vs. Safety:**

Concern: Publishing AI models might enable malicious use (e.g., benefit fraud schemes).

Mitigation:
- Publish prompts/architecture but not fine-tuned weights for sensitive models
- Code generation models: safe to publish (help civic tech, no fraud risk)
- Stochastic models: published with usage guidelines
- Rule extraction: partnering with government agencies ensures appropriate use
- Community governance: Open-source community can flag misuse

**6. Partner Responsibility:**

Concern: PolicyEngine provides infrastructure; partners deploy to end-users. Errors propagate.

Mitigation:
- SLAs with partners: Accuracy guarantees, update timelines, validation requirements
- Error reporting: Partners report calculation errors; we fix within 48 hours
- Staged rollout: New AI-encoded programs marked "beta" until validated through usage
- Liability clarity: Terms of service specify PolicyEngine provides tools, partners own end-user experience
- Continuous monitoring: Track API error rates, partner satisfaction, user-reported issues

**7. Economic Impact Equity:**

Concern: Faster encoding might primarily benefit programs serving easier-to-reach populations.

Mitigation:
- Explicit equity goals: Half of new programs must serve populations below poverty line
- Language accessibility: Prioritize programs with multilingual documentation
- Geographic equity: Ensure rural and Southern states receive coverage, not just large states

**Governance:**

We'll establish an AI ethics review process: monthly review of AI-generated rules, quarterly bias audits, published accuracy dashboards, partner feedback incorporated into development priorities. All ethical concerns documented in public GitHub issues, enabling transparent community discussion.

PolicyEngine's open-source foundation is our core ethical safeguard—every line of AI-generated code is publicly reviewable, every calculation reproducible, every assumption documented. When benefit calculations affect whether families can afford food or housing, transparency isn't optional.
