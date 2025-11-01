**Who: Stakeholder Definition**

Primary stakeholders: Low-income individuals and families accessing benefits through navigation tools—people earning below living wage, experiencing economic insecurity, navigating SNAP, Medicaid, TANF, childcare subsidies, energy assistance, and other safety net programs.

Demographics: Predominantly women (primary caregivers, single parents), communities of color disproportionately reliant on safety net programs, immigrants accessing programs without citizenship requirements, people with disabilities navigating complex eligibility rules, working families facing benefit cliffs.

Intermediaries: Benefit navigation tools (MyFriendBen, Amplifi, Starlight, Student Basic Needs Coalition) serving these populations. Case workers, community organizations, legal aid providers.

**How Many: Scale and Reach**

Six-month pilot: Infrastructure improvements serving existing users across PolicyEngine API partners. MyFriendBen reports 50,000+ users, with additional users through Amplifi, Starlight, and Student Basic Needs Coalition partnerships.

Projected growth: As AI accelerates program encoding, partners can expand coverage. If encoding time reduces by even 3-5× (conservative estimate), partners could add 15-20 new programs versus 5-10 baseline. This expanded coverage could enable partners to serve more users, though exact numbers depend on their outreach and adoption efforts.

Long-term potential: PolicyEngine API is open-source infrastructure. As coverage expands through AI acceleration, any organization building benefit navigation tools could leverage these improvements.

**What Impact: Infrastructure Improvements and Downstream Effects**

PolicyEngine provides calculation infrastructure that multiple benefit navigators depend on. When we improve this infrastructure, benefits flow through to partner organizations and ultimately their users. However, measuring exact economic impact requires careful consideration of multiple factors.

**Direct Infrastructure Improvements (Measurable):**
- Encoding speed: Target 3-5× faster program coverage (reducing 40-80 hours to 10-20 hours per program)
- Coverage expansion: 15-20 new benefit programs in 6 months (versus 5-10 baseline)
- API performance: Reduced latency through caching and optimization
- Data requirements: Reduced through more intelligent form design and skip logic

**Downstream Effects (Estimated with Uncertainty):**

When partners like MyFriendBen can offer more programs, they potentially help more users access benefits. However, the actual impact depends on multiple factors:
- User awareness and trust in the tools
- Complexity of application processes beyond eligibility determination
- Partner organizations' capacity to support increased demand
- Accuracy of benefit calculations translating to successful applications

Conservative scenario: If newly encoded programs reach 10,000 users who successfully access an average of $1,000 in annual benefits, that represents $10 million in benefits accessed. This would be significant, though actual numbers could vary widely based on program uptake and successful benefit receipt.

More optimistic scenario: Some programs like childcare subsidies have transformative effects—enabling parents to maintain employment. If 1,000 parents can work due to accessing childcare benefits they didn't know about, the wage preservation effect could be substantial, though precise calculation requires assumptions about employment rates and wages.

**Measurement Approach:**

Rather than claiming specific ROI multiples, we'll track:

Partner metrics:
- Number of API calls for newly encoded programs
- Partner-reported user engagement with new programs
- Qualitative feedback on infrastructure improvements

Infrastructure metrics:
- Programs encoded per month (before/after AI acceleration)
- Time reduction per program encoding
- Test coverage and accuracy scores
- API latency improvements

Outcome indicators (where partners can provide):
- Number of users receiving eligibility estimates for new programs
- Self-reported benefits accessed (with appropriate caveats about self-reporting)
- Case studies of successful benefit access

**Why Infrastructure Matters:**

GitLab could fund individual benefit navigators directly. However, funding shared infrastructure creates different leverage—improvements multiply across multiple organizations simultaneously. When PolicyEngine adds a program or capability, every partner organization can immediately offer it to their users without duplicating development effort.

This approach acknowledges that:
- Infrastructure improvements enable but don't guarantee impact
- Multiple factors affect whether eligible families actually receive benefits
- Measurement of downstream effects requires partnership and time
- Even conservative estimates suggest meaningful potential impact

**Change to Existing Program:**

PolicyEngine currently encodes 5-10 new programs annually through manual effort. AI acceleration could expand this to 15-20+ programs, focusing on complex state-administered benefits like TANF, CCDF, LIHEAP, and SSI supplements that we've proven feasible in select states.

This isn't about replacing human expertise—it's about augmenting it. Human experts still validate every rule, review edge cases, and ensure accuracy. AI handles the repetitive extraction and initial code generation, freeing experts to focus on validation and complex policy interpretation.

The efficiency improvement could transform benefit navigation from fragmented, program-by-program development to more systematic coverage—though realizing this potential requires continued partnership with frontline organizations who understand user needs.