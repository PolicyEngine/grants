**Who: Stakeholder Definition**

Primary stakeholders: Low-income individuals and families accessing benefits through navigation tools—people earning below living wage, experiencing economic insecurity, navigating SNAP, Medicaid, TANF, childcare subsidies, energy assistance, and other safety net programs.

Demographics: Predominantly women (primary caregivers, single parents), communities of color disproportionately reliant on safety net programs, immigrants accessing programs without citizenship requirements, people with disabilities navigating complex eligibility rules, working families facing benefit cliffs.

Intermediaries: Benefit navigation tools (MyFriendBen, Starlight, Amplifi, Student Basic Needs Coalition) serving these populations. Case workers, community organizations, legal aid providers.

**How Many: Scale and Reach**

Six-month pilot: Infrastructure serving 100,000+ existing users across PolicyEngine API partners (MyFriendBen, Starlight, Student Basic Needs Coalition, Amplifi).

Year 2: Expanded coverage enables partners to reach 250,000-500,000 users as faster encoding unlocks previously inaccessible programs.

Long-term potential: PolicyEngine API is open-source infrastructure. Anyone building benefit navigation tools can use it. As coverage expands through AI acceleration, potential reach is millions—every benefit navigator in the U.S. can leverage faster, more comprehensive rules-as-code.

**What Impact: Specific Outcomes and Scale**

PolicyEngine is infrastructure, not a consumer tool. Our impact is indirect but measurable through partners:

Direct infrastructure improvements:
- Encoding speed: 5-10× faster program coverage (from 40-80 hours to 10-15 hours per program)
- Coverage expansion: 20-30 new benefit programs in 6 months (vs. 5-10 baseline)
- API performance: 50% latency reduction through ML prediction caching
- Accessibility: Benefit range estimates with 40% less required user data (enabling more people to get estimates)

Downstream economic impact through partners:

MyFriendBen currently serves 50,000+ users. They're constrained by PolicyEngine coverage—when we don't have a program encoded, they can't help users access it. Faster AI encoding directly removes this constraint.

Starlight partners with credit unions serving low-income members. Their benefit prediction depends on PolicyEngine calculations. Stochastic imputation enables them to provide estimates when members have incomplete financial data, expanding their reach.

Student Basic Needs Coalition uses PolicyEngine for SNAP calculations serving college students. Faster encoding of state-specific variations helps them serve more campuses.

Conservative ROI calculation:
- 20 new programs encoded through AI (vs. 5 without)
- Each program serves 5,000 additional users across partners = 75,000 incremental users
- Average $1,500 in benefits accessed per user (conservative, based on multi-program navigation)
- Total benefits accessed: $112.5M
- ROI: $112.5M ÷ $250K = 450× return

Alternative calculation (wage preservation, following MyFriendBen model):
- Faster encoding enables partners to expand TANF, childcare subsidy, Medicaid coverage
- These programs enable workforce participation
- 10,000 parents retain employment through childcare access
- Average $25K annual wages × 10,000 = $250M in wages preserved
- ROI: 1,000×

We acknowledge this is indirect impact—PolicyEngine provides infrastructure, partners serve people. But infrastructure bottlenecks have cascading effects. When rules-as-code coverage is limited, millions of people can't access benefits through digital tools because those tools simply can't calculate eligibility. AI-accelerated encoding removes that bottleneck.

**Measurement:**

Partner metrics: Track user growth in AI-enabled programs, engagement rates, reported benefits accessed.

Infrastructure metrics: Programs encoded per month, encoding time reduction, API latency, accuracy vs. human expert validation.

Economic metrics: Partner-reported $ in benefits accessed through newly encoded programs, estimated wage preservation from workforce-enabling programs (childcare, TANF).

Publication: Open evaluation report documenting encoding speed improvements, partner adoption, estimated downstream economic impact, challenges encountered, and replication guide for other civic tech infrastructure providers.

**Change to Existing Program:**

PolicyEngine currently serves 100,000+ users through partner tools, but our coverage is limited by manual encoding speed. This project doesn't change what PolicyEngine does (benefit calculation infrastructure)—it transforms how fast we can expand coverage. The efficiency improvement is dramatic: encode 20-30 programs instead of 5-10 in the same time period. This 5×+ improvement directly translates to partners being able to serve 5× more benefit types, reaching populations currently underserved by digital navigation tools.
