**Who: Stakeholder Definition**

Primary stakeholders: Low-income individuals and families accessing benefits through navigation tools—people earning below living wage, experiencing economic insecurity, navigating SNAP, Medicaid, TANF, childcare subsidies, energy assistance, and other safety net programs.

Demographics: Predominantly women (primary caregivers, single parents), communities of color disproportionately reliant on safety net programs, immigrants accessing programs without citizenship requirements, people with disabilities navigating complex eligibility rules, working families facing benefit cliffs.

Intermediaries: Benefit navigation tools (MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition) serving these populations. Case workers, community organizations, legal aid providers.

**How Many: Scale and Reach**

Six-month pilot: Infrastructure serving 100,000+ existing users across PolicyEngine API partners (MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition).

Year 2: Expanded coverage enables partners to reach 250,000-500,000 users as faster encoding unlocks previously inaccessible programs.

Long-term potential: PolicyEngine API is open-source infrastructure. Anyone building benefit navigation tools can use it. As coverage expands through AI acceleration, potential reach is millions—every benefit navigator in the U.S. can leverage faster, more comprehensive rules-as-code.

**What Impact: Specific Outcomes and Scale**

**The Infrastructure Leverage Argument:**

GitLab could fund 10 individual benefit navigators to expand their coverage. Alternatively, funding calculation infrastructure that multiple navigators depend on creates different leverage. PolicyEngine powers MyFriendBen (50K users), Amplifi's benefit navigation platform, Starlight (credit union partnerships), Student Basic Needs Coalition (college students), and others. When infrastructure improves, the benefits multiply across the entire ecosystem.

When we add fine-grained eligibility calculations, every navigator offers more accurate estimates. When stochastic imputation reduces data collection, every tool's completion rate improves. Infrastructure investment has multiplicative impact—one improvement helps hundreds of thousands across multiple platforms.

PolicyEngine is infrastructure, but infrastructure with massive leverage:

Direct infrastructure improvements:
- Encoding speed: 5-10× faster program coverage (from 40-80 hours to 10-15 hours per program)
- Coverage expansion: 20-30 new benefit programs in 6 months (vs. 5-10 baseline)
- API performance: 50% latency reduction through ML prediction caching
- Accessibility: Benefit range estimates with 40% less required user data (enabling more people to get estimates)

Downstream economic impact through partners:

MyFriendBen currently serves 50,000+ users. They're constrained by PolicyEngine coverage—when we don't have a program encoded, they can't help users access it. Faster AI encoding directly removes this constraint.

Starlight partners with credit unions serving low-income members. Their benefit prediction depends on PolicyEngine calculations. Stochastic imputation enables them to provide estimates when members have incomplete financial data, expanding their reach.

Student Basic Needs Coalition uses PolicyEngine for SNAP calculations serving college students. Faster encoding of state-specific variations helps them serve more campuses.

**Impact Through Partners:**

PolicyEngine is infrastructure—we measure impact through what partners achieve with improved capabilities:

Technical improvements: AI-accelerated encoding (targeting 20-30 programs vs. 5-10 baseline), 50-75% reduction in encoding time per program, stochastic imputation enabling benefit estimates with less user data.

Partner adoption: When we add programs or capabilities, partners integrate them. MyFriendBen, Amplifi, Starlight, and Student Basic Needs Coalition will measure user engagement with AI-enabled features, completion rates with stochastic imputation, and benefits accessed through newly encoded programs.

We'll measure and report: encoding speed improvements, programs added, partner integration speed, partner-reported user metrics. Since we're infrastructure, the economic impact depends on how partners deploy improvements to end users.

**Measurement:**

Partner metrics: Track user growth in AI-enabled programs, engagement rates, reported benefits accessed.

Infrastructure metrics: Programs encoded per month, encoding time reduction, API latency, accuracy vs. human expert validation.

Economic metrics: Partner-reported $ in benefits accessed through newly encoded programs, estimated wage preservation from workforce-enabling programs (childcare, TANF).

Publication: Open evaluation report documenting encoding speed improvements, partner adoption, estimated downstream economic impact, challenges encountered, and replication guide for other civic tech infrastructure providers.

**Change to Existing Program:**

PolicyEngine currently serves 100,000+ users through partner tools. Manual encoding limits how fast we expand coverage. This project transforms that speed: targeting 20-30 programs in 6 months instead of 5-10 baseline. When partners need fine-grained eligibility details (categorical eligibility chains, asset test exceptions, state-specific phase-out calculations), manual encoding takes weeks. With AI assistance: days.

Faster encoding means partners can respond to user needs more rapidly. The efficiency improvement compounds: faster encoding enables partners to expand coverage, more users access benefits, more data validates our models, AI improves, encoding gets even faster. This cycle could transform benefit navigation from program-by-program development to systematic coverage.

**Why Infrastructure:**

PolicyEngine powers MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition, and other benefit navigation tools. When we improve calculation infrastructure, all partners benefit simultaneously. Each improvement multiplies across the ecosystem. Infrastructure investment has different leverage than funding individual navigators.
