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

GitLab could fund 10 individual benefit navigators to expand their coverage. Alternatively, funding calculation infrastructure that multiple navigators depend on creates different leverage. PolicyEngine and BenefitsKitchen power MyFriendBen (50K users), Amplifi's benefit navigation platform, Starlight (credit union partnerships), Student Basic Needs Coalition (college students), and others. When infrastructure improves, the benefits multiply across the entire ecosystem.

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

**ROI Calculation (Better Accuracy, More Coverage):**

Impact from AI-accelerated improvements (based on partner feedback):
- Fine-grained eligibility details (asset tests, categorical eligibility, phase-outs): Partners estimate 20K users currently getting "unable to calculate" can now get accurate estimates = $30M in benefits
- Rapid policy updates: Keeping current with policy changes (SNAP emergency allotments, state EITC adjustments) serves 30K users faster = $45M
- Nuanced state variations: 20K users get state-specific calculations instead of federal-only = $30M
- Partner-specific features: Custom calculations for unique use cases (Starlight financial data integration, MyFriendBen screening flows) = $25M
- New complex programs: 10 programs too complex to encode manually, AI makes feasible, 10K users = $20M

Total conservative: $150M in benefits accessed from AI-enabled improvements.

ROI: $150M ÷ $250K = 600× return

Wage preservation calculation (childcare subsidy example):
- Texas/Florida childcare enables 8,000 parents to retain employment
- Average $28K annual wages (BLS data for sectors childcare enables: retail, food service, healthcare support)
- 8,000 × $28K = $224M in annual wages preserved
- ROI: 900×

Infrastructure leverage is real: Every navigator improvement helps 100,000+ existing users PLUS every future user across ALL platforms. One investment, unlimited multiplication.

**Measurement:**

Partner metrics: Track user growth in AI-enabled programs, engagement rates, reported benefits accessed.

Infrastructure metrics: Programs encoded per month, encoding time reduction, API latency, accuracy vs. human expert validation.

Economic metrics: Partner-reported $ in benefits accessed through newly encoded programs, estimated wage preservation from workforce-enabling programs (childcare, TANF).

Publication: Open evaluation report documenting encoding speed improvements, partner adoption, estimated downstream economic impact, challenges encountered, and replication guide for other civic tech infrastructure providers.

**Change to Existing Program:**

PolicyEngine currently serves 100,000+ users through partner tools, but coverage is limited by manual encoding speed. This project transforms HOW FAST we expand coverage: 20-30 programs in 6 months instead of 5-10. That 5× improvement means partners can serve 5× more benefit types.

Real example: When partners need fine-grained eligibility details (categorical eligibility chains, asset test exceptions, state-specific phase-out calculations), manual encoding takes weeks. With AI: days. This responsiveness directly translates to partners serving edge cases they currently have to tell users "we can't calculate that yet."

The efficiency improvement compounds: Faster encoding → Partners expand faster → More people access benefits → More data validates models → AI improves → Even faster encoding. This virtuous cycle transforms benefit navigation from artisanal (one navigator, one state, one program at a time) to industrial scale (systematic coverage of all programs, all states, all navigators simultaneously).

**Why Infrastructure Investment Wins:**

Funding PolicyEngine means funding calculation infrastructure that multiple navigators use. MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition, Benefits Kitchen, Code for America, and organizations that don't exist yet all benefit from faster PolicyEngine development. Infrastructure leverage means each improvement multiplies across the entire ecosystem, reaching hundreds of thousands today and millions tomorrow.
