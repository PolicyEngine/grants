# Project Description

## Context of OSE

### Vision and Need

Our vision is to establish PolicyEngine as the foundational open-source ecosystem for tax-benefit microsimulation—critical infrastructure for evidence-based policymaking. The need is urgent: current policy debates affecting millions of Americans rely on black-box models accessible only to institutions that can afford millions in annual operating costs. The Tax Policy Center operates at $3.2M annually; Penn Wharton Budget Model at $1.8M. Meanwhile, state legislatures making critical safety net decisions, universities teaching policy analysis, and community organizations helping families access benefits all lack basic microsimulation tools.

Recent policy debates exposed this democratic deficit. When Congress considered the American Rescue Plan's $1.9 trillion expansion, only 12 institutions could independently verify distributional claims. State legislators implementing Medicaid expansion or TANF modifications operate blind to interaction effects. As NY State Senator Gounardes noted after using PolicyEngine: "For the first time, my staff could model our tax credit proposals ourselves instead of waiting weeks for external analysis."

### Product Maturity and Adoption

PolicyEngine has achieved product-market fit with explosive growth and measurable impact. Government adoption spans federal and state levels: the Joint Economic Committee now uses PolicyEngine for analyzing federal proposals. The UK Cabinet Office's integration is so successful that Nikhil Woodruff is currently on secondment there, helping expand usage across HM Treasury and DWP (HM Treasury, 2024). State legislators in multiple states including New York use the platform, with Senator Gounardes publicly crediting PolicyEngine for enabling his child tax credit design.

Academic validation confirms our technical rigor through extensive testing against NBER's TAXSIM (Feenberg & Coutts, 1993), leading to ongoing collaboration discussions. USC's Center for Economic and Social Research uses PolicyEngine for HHS-funded marginal tax rate research. We've conducted seminars at CBO, Congressional Research Service, and the Joint Economic Committee, with active discussions at Berkeley, Georgetown, Northwestern, USC, Duke, and Harvard about curriculum integration.

The benefits access ecosystem demonstrates immediate social impact. MyFriendBen's $2.4M Gates Foundation-backed platform identified $800M in unclaimed benefits for 50,000 Colorado families using our API (MyFriendBen, 2025). Multiple organizations in the benefits navigation space are exploring migration to PolicyEngine, validating our open approach—organizations choose transparency and community contribution over proprietary lock-in.

Current platform scale demonstrates both usage and development momentum. We serve over 100,000 people per year through our API and partners, with rapid growth as partner numbers and scale increase. The PolicyEngine GitHub organization hosts 146 repositories with over 50,000 commits, 332+ stars, and 620+ forks across the ecosystem. Our comprehensive coverage includes 9,034 parameters and variables—7,828 in policyengine-us alone (4,712 parameters and 3,116 variables) and 1,206 in policyengine-uk—representing the full complexity of modern tax-benefit systems. Each parameter and calculation is traceable to its authoritative source through over 1,800 structured citations to primary government documents embedded in our codebase, ensuring every rule can be verified against official legislation and regulations. Development velocity has exploded in 2025 with 60 new repositories created, compared to just 16 in 2023, representing a 3x acceleration in development pace. With 30+ unique contributors on major repositories and 1,227 open issues on policyengine-us alone, we demonstrate the distributed development essential for a thriving open-source ecosystem. Complete coverage spans all 50 state tax systems plus SNAP, TANF, Medicaid, WIC, and housing assistance, with international expansion underway in Canada, Ireland, New Zealand, and Australia.

The technical foundation is production-ready: comprehensive test coverage with 8,600 test cases, automated validation against established models, fast API response times, and signed releases with security scanning.

### Phase I Foundation and I-Corps Focus

Our Phase I award (running through July 2026) enables systematic ecosystem discovery through the January 2026 I-Corps cohort. We request Phase II to begin May 1, 2026, allowing us to immediately apply I-Corps insights while maintaining Phase I momentum. Our team—Max Ghenis (PI), Nikhil Woodruff (Technical Lead), and Dan Feenberg (NBER mentor with 30+ years maintaining TAXSIM)—will conduct 100+ stakeholder interviews focusing on three critical questions. First, we will investigate state and local government needs to understand what prevents them from conducting their own analysis, with initial NCSL conversations revealing that Excel-based "models" remain standard despite handling billions in programs. Second, we will explore educational barriers to understand how to integrate microsimulation into curricula, as faculty report using outdated Tax-Calculator or building toy models because production systems are inaccessible. Third, we will examine sustainability models to determine what funding and governance structures ensure long-term viability, exploring consortium models, training revenue, and API licensing while maintaining open access.

These insights will directly shape Phase II implementation, particularly our training programs and state government partnerships.

## Ecosystem Establishment Strategy

PolicyEngine already demonstrates the distributed development essential for a thriving open-source ecosystem. Our GitHub organization's 146 repositories with over 50,000 commits from 30+ contributors show genuine community engagement. The platform's comprehensive scope—9,034 parameters and variables capturing the full complexity of US and UK tax-benefit systems—requires and attracts diverse expertise. The 1,227 open issues on policyengine-us alone and 620+ forks across our projects indicate active participation beyond our core team. UK developers contributed local authority modeling features now being adapted by U.S. states, while USC researchers added benefit cliff visualizations that other universities are extending. The 3x acceleration in repository creation during 2025—60 new repos compared to 16 in 2023—demonstrates explosive growth as the ecosystem matures. This organic expansion proves the ecosystem's viability; we now formalize and scale these emerging patterns.

We will build three interconnected ecosystems around tax-benefit microsimulation, each addressing specific market needs while contributing to shared infrastructure through distributed development.

### 1. Policy Analysis Ecosystem (Research & Government)

Our policy analysis ecosystem builds on strong foundations with active users ranging from the Joint Economic Committee to NBER researchers, USC's Center for Economic and Social Research, the UK Cabinet Office, and state legislators across multiple states including New York and DC. These early adopters validate both the technical capability and the substantial demand for transparent microsimulation tools.

The expansion of this ecosystem centers on a partnership with NCSL to onboard 20 state legislatures in Year 1. We will provide comprehensive training and dedicated support that enables states to analyze Medicaid expansion, TANF modifications, and tax credit designs—analytical capabilities that currently require expensive consultants most states cannot afford. Building on the success of our UK Cabinet Office integration, we will pursue pilots with CBO, Treasury, and state revenue departments, providing detailed validation reports that compare PolicyEngine outputs to internal models to address accuracy concerns and build trust. We recognize that ideologically diverse organizations need transparent baselines for comparing policy proposals, so beyond current think tank users like the Niskanen Center, we will expand to institutions across the political spectrum.

This ecosystem achieves sustainability through a consortium model where states contribute to a shared funding pool, federal agencies provide grants for specific enhancements they need, and think tanks sponsor features that advance their research agendas.

### 2. Benefits Access Ecosystem  

The benefits access ecosystem demonstrates explosive growth as organizations transition from closed to open source solutions. MyFriendBen, backed by $2.4 million from the Gates Foundation, leads this adoption wave, having already identified $800 million in unclaimed benefits for 50,000 Colorado families using PolicyEngine's API. The broader movement validates our open-source approach as multiple benefit navigation platforms explore migrating from closed-source alternatives to PolicyEngine. These organizations choose transparency, cost-effectiveness, and the ability to contribute improvements over proprietary lock-in.

To accelerate this ecosystem transition, we will create standard API integrations and migration tools that enable rapid platform switching, complemented by white-label solutions for immediate deployment. Healthcare systems represent a particularly promising expansion opportunity. As hospitals and clinics increasingly screen patients for benefits, programs like Mount Sinai's demonstrate how identifying Medicaid eligibility simultaneously reduces uncompensated care and improves patient outcomes. We envision commercial partnerships where tax preparation firms help identify EITC and CTC eligibility among their clients, banks integrate our tools for customer financial health assessments, and employers use them for comprehensive benefits counseling programs.

The sustainability model for this ecosystem combines API licensing fees from commercial users with grants from healthcare systems seeking to reduce uncompensated care, all while maintaining foundation support to ensure free access for community organizations serving vulnerable populations.

### 3. Educational Ecosystem

Academic engagement shows promising momentum across multiple institutions. USC faculty are already using PolicyEngine for HHS-funded research, while our seminars at Berkeley, Georgetown, Northwestern, and University of South Carolina have generated significant interest. Ongoing conversations with Duke and Harvard policy schools explore potential adoption pathways. Through Dan Feenberg's involvement, the NBER network connects us with hundreds of affiliated researchers ready to embrace open-source tools for policy analysis.

Our expansion strategy for the educational ecosystem involves developing comprehensive course modules tailored to different academic levels and disciplines. These modules will include problem sets using real legislation, coding exercises enhanced with AI assistance, and policy briefs that match government formatting standards. To build engagement and prestige, we will launch annual policy modeling competitions judged by former government economists, with winners presenting their work at ASSA meetings. The "PolicyEngine Certified Analyst" program will provide formal credentials for students and professionals who master tax-benefit rules, microsimulation methods, and reproducible analysis practices. Recognizing that Tax-Calculator remains the most common teaching tool in many programs, we will create detailed conversion guides that demonstrate migration paths and highlight the advantages of integrated benefits modeling over tax-only analysis.

Universities will sustain this ecosystem through payments for enterprise features and support services, certification fees from the analyst program, and NSF education grants that support curriculum development and student training initiatives.

### Ecosystem Expansion Opportunities

While Phase II focuses on proven tax-benefit microsimulation markets in the US and UK, we will explore adjacent ecosystems as the platform matures. The tax accounting sector represents a natural extension, as our rules engines have commercial applications for tax preparation firms and accounting software seeking transparent, validated calculations. Similarly, our Enhanced CPS—synthetic households with statistically imputed income, consumption, and wealth from multiple federal sources—calibrated at congressional district and county levels creates value for market research firms and economic development agencies analyzing regional demographics and purchasing power. International expansion also shows promise, with researchers in Canada, Germany, and Australia expressing interest in adapting our approach for their national contexts. These explorations will remain opportunistic rather than core focus, ensuring we deliver on primary objectives while identifying sustainable growth paths that emerge organically from community needs.

### Implementation Timeline (May 2026 - April 2028)

**Year 1 Q1-Q2 (May - Oct 2026)**: Apply I-Corps findings immediately: establish governance structure, launch state consortium pilot with 5 states leveraging summer period
**Year 1 Q3-Q4 (Nov 2026 - Apr 2027)**: Deploy educational modules at 10 universities for spring semester, expand benefits navigator network to 20 organizations
**Year 2 Q1-Q2 (May - Oct 2027)**: Scale to 20 states, 30 universities, standardize commercial API partnerships
**Year 2 Q3-Q4 (Nov 2027 - Apr 2028)**: Achieve sustainability metrics: 50% budget from user contributions, 100+ certified analysts

### Success Metrics

By the end of Year 2, we will achieve adoption across 20 state governments, 30 universities, and 50 benefits organizations actively using the platform. Impact metrics include $2 billion in benefits accessed through partner organizations, 10,000 students trained in microsimulation methods, and 100 policy analyses published using PolicyEngine. Financial sustainability will be demonstrated through $750K in annual revenue from consortium fees, training programs, and API licensing. The community will include 50 active contributors and 5 institutional maintainers providing 24-hour global support coverage.

## Organization and Governance

### Governance Structure

PolicyEngine will transition from founder-led to community-governed through a three-tier structure balancing user needs with technical excellence:

**Steering Committee** (7 members):
- 2 government users (state and federal representatives)
- 2 academic researchers (economics and public policy)
- 2 technical leaders (core maintainers)
- 1 independent chair (rotating annually)

Responsibilities: Strategic direction, resource allocation, partnership approvals, release milestones

**Technical Working Groups**:
- **Tax Policy WG**: Federal/state tax rules, validation against TAXSIM/TPC
- **Benefits WG**: SNAP, TANF, Medicaid, housing program rules
- **Data WG**: Microdata enhancement (including Enhanced CPS with imputed income/wealth from ACS, SCF, SIPP, IRS sources), calibration methods
- **Platform WG**: API performance, web interface, documentation

Each WG has maintainer leads, meets biweekly, publishes meeting notes, and makes decisions via lazy consensus.

**User Advisory Council**:
Representatives from each ecosystem (government, education, benefits access) meet quarterly to prioritize features and identify gaps. Direct pipeline from users to development priorities.

### Decision-Making Process

**Enhancement proposals**: Any user can propose changes via GitHub issues. WG reviews within one week, steering committee approves major changes monthly.

**Release process**: 
- Parameter updates: Daily automated releases with validation
- Feature releases: Monthly with 2-week testing period
- Major versions: Quarterly with extensive validation and migration guides

**Quality gates**: All changes require tests, documentation, and two reviews. Security updates bypass normal process with expedited review.

### Intellectual Property Framework

**Licensing**: Apache 2.0 for all code, ensuring commercial use while requiring attribution
**Contributor agreement**: Simple DCO (Developer Certificate of Origin) rather than CLA, reducing barriers
**Data rights**: Enhanced microdata released under Open Database License, ensuring reuse rights

### Team and Succession Planning

Current team combines technical expertise with policy domain knowledge:
- Max Ghenis (PI): Founded PolicyEngine, Google People Analytics background, MIT policy training
- Nikhil Woodruff (Technical Lead): Platform architect, OpenFisca contributor, manages infrastructure
- Pavel Makarchuk: US policy modeling lead, German partnership liaison
- Advisory: Dan Feenberg (NBER/TAXSIM), Georgetown, USC, Vanderbilt partners

**Succession planning**: Each role has documented responsibilities and identified successors. Technical documentation ensures no single point of failure. Institutional partners (NBER, universities) provide continuity beyond individuals.

## Continuous Development and Training Infrastructure

### Curriculum Development Program

PolicyEngine will transform how tax-benefit policy is taught by providing the first production-grade microsimulation platform accessible to students. Current courses rely on simplified models or proprietary software students cannot access after graduation. We will develop comprehensive educational materials that prepare the next generation of policy analysts with real-world tools.

**Core curriculum modules**:
- **Introduction to Tax-Benefit Microsimulation** (undergraduate): Interactive notebooks teaching policy parameters, behavioral responses, and distributional analysis using actual legislation, with integrated AI coding assistants to help students debug and extend analyses
- **Advanced Policy Modeling** (graduate): Calibration techniques, validation methods, and uncertainty quantification using PolicyEngine's research APIs, including how to use AI tools like Claude and GitHub Copilot to rapidly prototype policy reforms
- **AI-Augmented Policy Analysis** (interdisciplinary): Training students to effectively prompt AI systems for policy research, validate AI-generated analyses, and combine PolicyEngine with AI tools for accelerated policy development

**Delivery mechanisms**:
- Jupyter notebooks with pre-configured environments (zero setup required)
- Video tutorials by government economists explaining real policy analyses
- Guest lecture program connecting students with PolicyEngine users in government
- Summer internship pipeline focused on using (not developing) the platform for policy research

**Target institutions**: We will pursue integration with economics and public policy programs through existing relationships at USC, Georgetown, and through the NBER network. Summer 2026 launch timing allows preparation for fall semester deployment.

### State and Local Government Training

State and local governments represent the highest-impact, most underserved market for microsimulation training. Our NCSL engagement revealed that most states analyze billion-dollar programs using Excel spreadsheets, lacking tools to understand policy interactions or distributional effects.

**Training program structure**:
- **Legislator briefings** (2-hour): High-level overview for policymakers on microsimulation capabilities and interpretation
- **Staff bootcamps** (2-day): Hands-on training for legislative analysts covering tax modeling, benefit interactions, and revenue estimation  
- **Agency workshops** (1-week): Deep training for revenue departments and social service agencies on maintaining state-specific parameters

**Deployment strategy**:
- Partner with NCSL for nationwide rollout, leveraging their convening power and credibility
- Create state-specific examples using actual proposed legislation from each state
- Provide ongoing office hours and peer learning networks organized by region
- Document success stories (like NY Senator Gounardes) to drive adoption

### Technical Skills Development and Contributor Onboarding

PolicyEngine's contributor onboarding addresses the unique challenge of bridging policy expertise and software engineering. Economists understand tax rules but may lack coding experience; developers know software but need policy context. Our graduated pathway enables meaningful contributions regardless of technical background.

**Differentiated Onboarding by Persona**:

*For Economists/Policy Analysts*:
- Start with parameter updates using our web-based editor—no Git required
- Progress to YAML parameter files with guided templates and validation
- Advance to Python formulas with extensive examples from existing rules
- Pair programming sessions with engineers for complex implementations

*For Software Engineers*:
- Policy bootcamp videos explaining tax-benefit fundamentals
- Shadowing sessions with policy experts during implementation
- Test-driven development using real household scenarios
- Mentorship on translating legislative text to code

*For Government Staff*:
- Focus on validation and testing rather than implementation
- Contribute state-specific test cases from actual casework
- Review parameter accuracy without touching code
- Provide requirements and acceptance criteria for features

**Structured Contributor Pathways**:
- **Good first issues**: Tagged issues with difficulty levels (beginner/intermediate/advanced), required skills clearly marked, estimated time commitment, and assigned mentors for each issue
- **Documentation contributions**: Non-code contributions through user guides, API examples, video tutorials, translations (Spanish high priority), and glossaries bridging policy/technical terminology
- **Parameter maintenance**: Web interface for updating rates and thresholds, automated validation against official sources, peer review by policy experts, and no coding required for 80% of updates
- **Validation testing**: Researchers contribute test cases from publications, government staff provide edge cases from operations, and community members submit household scenarios

**Skills progression with concrete milestones**:
1. **User** (Day 1) → Run first analysis, report first issue
2. **Contributor** (Week 2) → Submit first parameter update or documentation fix  
3. **Validator** (Month 1) → Add 10 test cases, verify state calculations
4. **Maintainer** (Month 3) → Manage parameter updates for assigned state/program
5. **Developer** (Month 6) → Implement first policy rule, optimize query performance
6. **Lead** (Year 1) → Own component area, mentor new contributors

### Innovation Through Openness and AI Integration

Open development accelerates innovation by enabling both human and AI contributors to solve specialized problems. The Yale Budget Lab adopted our imputation methods after NTA conference presentation, while USC researchers extended benefit cliff analysis using PolicyEngine's modularity in ways impossible with closed systems. UK developers contributed local authority modeling that US states can adapt for county-level analysis. Increasingly, contributors use AI coding assistants to accelerate development—our Phase I experience showed that Claude Code and GitHub Copilot reduced implementation time for new state tax systems by 60%.

**Phase II innovation priorities**:
- Real-time parameter updates as legislation passes, with AI agents monitoring legislative text and suggesting parameter changes
- AI-friendly API design enabling coding assistants to generate PolicyEngine integrations automatically
- Structured documentation and type hints optimized for AI code generation and validation
- Prompt engineering libraries helping users leverage AI for complex policy analysis tasks

### Measuring Development Success

- **Release velocity**: Monthly feature releases, daily parameter updates
- **Contributor diversity**: 50+ contributors across 10+ institutions
- **Training impact**: 1,000+ government staff trained, 5,000+ students educated
- **Innovation metrics**: 20+ research papers using PolicyEngine, 10+ methodological improvements contributed back
- **Quality indicators**: 48-hour median issue resolution, 99% API uptime, comprehensive test coverage

## Risk Analysis and Security Plan

PolicyEngine implements comprehensive security practices aligned with CISA/NSA guidance for securing software supply chains. Our multi-layered approach addresses technical vulnerabilities, data privacy, and ecosystem integrity.

### Security Architecture and Practices

**Supply Chain Security**: Automated scanning with Dependabot identifies vulnerabilities within 24 hours of disclosure. We maintain a 48-hour patch deployment target for critical vulnerabilities, with automated CI/CD pipelines ensuring rapid, tested updates.

**Code Integrity**: All commits require GPG signing for verification. Pull requests undergo automated security scanning before merge, including static analysis (CodeQL), dependency auditing, and license compliance checks. The two-reviewer requirement for core components ensures human oversight of security-critical changes.

**Incident Response Protocol**: 
1. **Detection**: Automated monitoring alerts security team within 15 minutes of anomalies
2. **Triage**: Security lead assesses severity using CVSS scoring within 2 hours
3. **Response**: Critical issues trigger immediate patch development and user notification
4. **Disclosure**: Coordinated disclosure through GitHub Security Advisories and direct stakeholder communication
5. **Post-mortem**: Public incident reports document lessons learned and process improvements

**Vulnerability Management**: We maintain a responsible disclosure program with defined communication channels (security@policyengine.org), recognition for security researchers, and a 90-day disclosure timeline for non-critical issues. The security team includes members across time zones ensuring 24-hour response capability.

### Data Privacy and Protection

**No Personal Data Storage**: PolicyEngine's architecture fundamentally protects privacy—we process calculations without storing personal information. API calls contain only hypothetical household parameters, never identifying information. This design eliminates data breach risks while enabling full functionality.

**Audit Logging**: All API access generates anonymized audit logs tracking usage patterns without user identification. Rate limiting prevents abuse while preserving open access for legitimate research. Geographic distribution through CloudFlare protects against DDoS attacks.

**Compliance Framework**: Although we don't process personal data, we maintain GDPR-compliant practices for any incidental information. Terms of service explicitly prohibit submission of real personal data. Educational materials emphasize using representative rather than actual household data.

### Technical Risk Mitigation

**Validation Infrastructure**: Our continuous validation against TAXSIM, CBO projections, and state revenue estimates ensures calculation accuracy. With 8,600 automated test cases across our US and UK models covering edge conditions and complex interactions, we maintain rigorous quality standards. Version control enables rollback within minutes if issues emerge.

**Performance and Scalability**: Load testing before major releases ensures stability. Horizontal scaling on Google Cloud Platform handles demand spikes. Database query optimization and Redis caching maintain fast API response times. Regional CDN deployment ensures global accessibility.

**Dependency Management**: We minimize external dependencies, vendoring critical libraries when appropriate. Automated license scanning ensures compliance with open-source obligations. Regular dependency pruning removes unused packages that could introduce vulnerabilities.

### Organizational Risk Management

**Distributed Leadership**: No single point of failure in governance or technical leadership. Each core component has multiple maintainers across institutions. Documented succession plans ensure continuity. Institutional partnerships (NBER, USC, Georgetown) provide organizational resilience.

**Financial Resilience**: Revenue diversification across government contracts, educational licensing, and philanthropic support prevents funding concentration. Six-month operating reserve target provides runway during transitions. Low-overhead remote operations maximize resource efficiency.

**Community Health**: Clear code of conduct based on Contributor Covenant ensures inclusive environment. Conflict resolution procedures address disputes before escalation. Regular community surveys identify emerging issues. Transparent roadmap planning prevents surprise changes that fragment community.

### Ecosystem Security

**Contributor Vetting**: While maintaining open contribution, we implement graduated permissions. New contributors start with documentation and test improvements. Code contributions require review by two core maintainers. Commit access granted only after sustained quality contributions.

**Fork Management**: Clear governance ensures community cohesion, but we prepare for potential forks. Apache 2.0 licensing preserves user rights while requiring attribution. Modular architecture allows component-level forking without ecosystem fragmentation. Regular community engagement prevents divergence motivations.

**Malicious Use Prevention**: While we cannot prevent all misuse, we implement safeguards:
- Documentation emphasizes uncertainty and limitations
- API responses include confidence intervals and assumptions
- Training materials stress ethical analysis practices
- Community guidelines prohibit misleading advocacy
- Public corrections for identified misrepresentations

### Quality Assurance

**Testing Coverage**: Comprehensive code coverage with emphasis on critical paths. Integration tests validate full calculation pipelines. Property-based testing identifies edge cases. Regression tests prevent previously fixed bugs from recurring.

**External Audits**: Annual security audits by independent firms. Quarterly validation against government models. Academic peer review of methodological changes. Public bug bounty program incentivizes vulnerability discovery.

**Monitoring and Alerting**: Real-time monitoring of API performance, error rates, and usage patterns. Automated alerts for anomalies or degradation. Weekly security metrics review. Monthly security posture assessment.

### Specific Phase II Security Enhancements

**Year 1 Priorities**:
- Establish Security Champions program across contributor organizations
- Deploy hardware security module for release signing
- Implement comprehensive vulnerability disclosure program
- Enhance automated testing coverage

**Year 2 Goals**:
- Formal threat modeling with STRIDE methodology
- Independent security audit publication
- Multi-factor authentication for all maintainers
- Automated compliance monitoring

### Metrics and Accountability

We track security effectiveness through concrete metrics:
- Mean time to patch: Target < 48 hours for critical vulnerabilities
- Security Champion coverage: 100% of core components
- Incident response time: < 2 hours for initial triage
- Vulnerability disclosure handling: 100% acknowledged within 48 hours
- Security training completion: 100% of maintainers annually
- Dependency currency: Regular updates within reasonable timeframes

This comprehensive security approach ensures PolicyEngine remains trustworthy infrastructure for critical policy analysis while maintaining the openness essential for community-driven development.

## Community Building

### User-Centric Community Strategy

PolicyEngine's community strategy prioritizes users—policy analysts, researchers, benefits counselors—over developers. While technical contributors are essential, our primary community consists of people using microsimulation for policy analysis, not building microsimulation software.

**User segments and engagement**:
- **Policy analysts**: Monthly webinars on modeling current legislation, peer support forums, direct access to PolicyEngine experts during office hours
- **Researchers**: Validation workshops comparing results across models, collaborative parameter updating, shared test case development
- **Benefits counselors**: Training on eligibility rules, simplified interfaces for client screening, community-maintained resource guides
- **Students**: Campus ambassadors, policy modeling competitions, summer research projects using real data

### Structured Support Programs

**Office hours** (timezone-distributed):
- Tuesday 2pm ET: State/local government focus
- Wednesday 6pm ET: Academic researchers and students  
- Thursday 10am PT: Benefits organizations and west coast users
- Format: 30-minute demo + 30-minute Q&A, recorded for asynchronous viewing

**Documentation by user type**:
- **Quickstart guides**: "Analyze a bill in 10 minutes" for legislators
- **Course materials**: Complete syllabi for instructors
- **API cookbooks**: Code examples for developers
- **Validation guides**: Comparison methods for researchers

### Building Bridges Across Communities

PolicyEngine connects previously isolated communities:
- **Researchers ↔ Policymakers**: USC research on benefit cliffs directly informing state legislation
- **UK ↔ US**: Nuffield-funded local modeling techniques adapted for US congressional districts
- **Academia ↔ Benefits access**: MyFriendBen using research-grade models for real-world eligibility

**Community events**:
- Annual conference rotating between DC (policy), NYC (finance), SF (tech)
- Regional workshops at NCSL, NTA, ASSA meetings
- Virtual hackathons focused on specific policy questions

### Contributor Recognition

- **Impact badges**: "Helped 10,000 families access benefits"
- **Research citations**: Papers using PolicyEngine acknowledged in release notes
- **Policy influence**: Dashboard tracking legislation analyzed using PolicyEngine
- **Career development**: Letters of recommendation, conference speaking opportunities

### Success Metrics

- **Active users**: 10,000 monthly active users by Year 2 (April 2028)
- **Geographic distribution**: Users in all 50 states plus 10 countries
- **Sector diversity**: 40% government, 30% academic, 20% nonprofit, 10% commercial
- **Support effectiveness**: 90% of questions answered within 24 hours
- **Community contributions**: 100+ user-contributed test cases, 50+ documentation improvements

## Sustainability Plan

### Diversified Revenue Model

PolicyEngine will achieve financial sustainability through multiple revenue streams while maintaining free access for public interest use:

**Government Consortiums** ($400K/year target):
- State consortium: 20 states at $15K/year for training, support, and priority features
- Federal partnerships: Grants for specific capabilities (CBO validation, administrative data integration)
- International collaboration: UK, Canada, Germany contributing to shared infrastructure

**Educational Licensing** ($200K/year target):
- University site licenses: $5K/year for enterprise features, priority support, student accounts
- Certification program: $200 per certificate for professionals and advanced students
- Curriculum licensing: Packaged courses for institutions without development capacity

**Commercial API Access** ($300K/year target):
- Tax software integration: Volume-based pricing for tax preparation firms
- Financial services: Banks and fintechs using for customer analysis
- Policy consulting: Enhanced SLAs and custom features for consultancies

**Philanthropic Support** ($600K/year ongoing):
- Program-specific grants: Benefits access, state capacity building, education initiatives
- General operating: Unrestricted funding from aligned foundations
- Individual giving: Annual campaign targeting PolicyEngine users

### Governance for Longevity

**Institutional anchoring**: NBER partnership provides long-term stability beyond individual founders. University partnerships (USC, Georgetown) ensure academic continuity.

**Technical sustainability**: Modular architecture allows distributed maintenance. Comprehensive documentation enables knowledge transfer. Automated testing prevents regression.

**Community resilience**: Multiple maintainers per component prevent single points of failure. Clear succession planning for all leadership roles. Documented governance processes survive personnel changes.

### Measuring Sustainability

- **Financial metrics**: 50% budget from earned revenue by Year 2 (April 2028); 6-month operating reserve established
- **Community metrics**: 5+ institutional maintainers; 20+ regular contributors; 24-hour global coverage
- **Usage metrics**: 10,000+ monthly active users; 100+ published analyses monthly
- **Impact metrics**: $2B+ in benefits accessed; 20+ states using platform; 10,000+ students trained

## Evaluation Plan

### Key Performance Indicators

**Ecosystem Growth**:
- User adoption: Monthly active users, new registrations, retention rates
- Geographic reach: States and countries with active users
- Institutional adoption: Government agencies, universities, nonprofits using platform
- Community contributions: Pull requests, issues filed, documentation improvements

**Impact Metrics**:
- Policy analyses: Number and quality of published analyses using PolicyEngine
- Benefits accessed: Dollar value of benefits identified through partner organizations
- Students trained: Course enrollments, certifications issued, career placements
- Research output: Academic papers citing PolicyEngine, methodological advances

**Technical Health**:
- System reliability: API uptime, response times, error rates
- Code quality: Test coverage, bug resolution time, release frequency
- Validation accuracy: Agreement rates with established models (TAXSIM, CBO, TPC)
- Security posture: Vulnerability scan results, time to patch, dependency updates

### Data Collection Methods

**Automated tracking**: Platform analytics for usage patterns, API calls, user segments
**Surveys**: Quarterly user satisfaction, annual community health assessment
**Case studies**: Deep dives on high-impact use cases (state legislation, research breakthroughs)
**External validation**: Independent audits of calculations, security reviews

### Evaluation Timeline

**Monthly**: Usage metrics dashboard, bug tracking, release notes
**Quarterly**: User surveys, financial reports, community meeting
**Annually**: Impact assessment, sustainability review, strategic planning

### Advisory Board Review

External advisors from NBER, Georgetown, USC, and government partners will conduct annual reviews assessing:
- Progress against milestones
- Community health indicators
- Financial sustainability trajectory
- Strategic direction alignment

Results will be published transparently, informing course corrections and demonstrating accountability to funders and users.

## Broader Impacts

PolicyEngine's open-source ecosystem will transform how society analyzes and implements tax-benefit policy, addressing critical gaps in democratic policymaking infrastructure while advancing scientific understanding of policy effects on diverse populations.

## Democratizing Policy Analysis

The current concentration of microsimulation capability in twelve institutions creates profound inequities in policy development. State legislatures allocating billions in TANF and Medicaid funds rely on static Excel models that cannot capture program interactions. Community colleges teaching public finance use outdated textbook examples rather than real policy tools. Local governments implementing housing assistance programs cannot model eligibility cliffs that trap families in poverty.

PolicyEngine eliminates these barriers. Our platform has already enabled the Joint Economic Committee to independently analyze federal proposals, helped New York State Senator Gounardes model tax credit designs, and empowered USC researchers to conduct marginal tax rate studies previously impossible without proprietary access. By Phase II completion, we project 20 state governments, 30 universities, and 50 community organizations will actively use PolicyEngine, fundamentally reshaping who participates in evidence-based policymaking.

## Accelerating Benefits Access

The $80 billion annual gap in unclaimed benefits represents both massive individual hardship and systemic policy failure. Our partnership with MyFriendBen demonstrates the transformative potential of open-source microsimulation for benefits access. Using PolicyEngine's API, MyFriendBen identified $800 million in unclaimed benefits for 50,000 Colorado families. The platform is expanding nationwide with $2.4 million in Gates Foundation support.

This impact multiplies through ecosystem effects as multiple organizations explore migrating from closed-source alternatives to PolicyEngine's open infrastructure. Each organization brings domain expertise while contributing improvements that benefit the entire ecosystem. We project $2 billion in additional benefits accessed by Year 2 through partner organizations.

## Transforming Policy Education

Current policy education suffers from a theory-practice gap: students learn simplified models disconnected from real-world complexity. PolicyEngine enables authentic policy learning using the same tools that analyze actual legislation. Our curriculum modules for USC's public finance course, Georgetown's Better Government Lab projects, and Berkeley's policy seminars provide students hands-on experience with production-grade microsimulation.

The educational impact extends beyond traditional programs. Through partnerships with community colleges and Minority-Serving Institutions, we will train a diverse generation of policy analysts previously excluded from this field. Our "PolicyEngine Certified Analyst" program provides formal credentials recognized by government agencies and research institutions, creating career pathways into policy analysis for underrepresented communities.

## Building State and Local Capacity

State and local governments implement most safety net programs yet lack analytical tools to design effective policies. NCSL confirms that most states cannot model basic questions like "How would expanding EITC affect working families?" or "What are the interaction effects between SNAP and childcare subsidies?" This analytical deficit perpetuates inefficient policies that fail to achieve intended outcomes.

PolicyEngine addresses this through targeted capacity building. Our state consortium model provides training, dedicated support, and collaborative development ensuring states can analyze their unique policy landscapes. The UK Cabinet Office's successful integration—with Nikhil Woodruff currently on secondment to support their implementation—provides a template for U.S. federal agency adoption. By enabling evidence-based policy design at all government levels, PolicyEngine strengthens democratic governance and improves outcomes for millions of families.

## Advancing Diversity, Equity, and Inclusion

The concentration of microsimulation capability in elite institutions perpetuates systemic inequities in policy analysis. PolicyEngine's open-source approach directly addresses these disparities through interconnected pathways that expand access and participation.

Our partnerships with community colleges, HBCUs, and Hispanic-Serving Institutions ensure that diverse institutions can teach and conduct research using professional-grade tools previously available only to well-resourced universities. The modular architecture of our platform enables community-driven translations and cultural adaptations, making policy analysis accessible to non-English speaking communities who have been historically excluded from these conversations.

Perhaps most importantly, open-source code exposes model assumptions for scrutiny, enabling communities to identify and correct biases that may disadvantage marginalized populations. Unlike proprietary models where affected communities have no voice in how their circumstances are modeled, PolicyEngine enables direct contribution of improvements based on lived experience of policy impacts. This participatory development model transforms beneficiaries from passive subjects of analysis to active contributors shaping how policies affecting their lives are evaluated.

## Mitigating Potential Negative Impacts

We acknowledge that democratizing policy analysis tools could enable misleading advocacy or politically motivated distortions. PolicyEngine addresses these risks through comprehensive safeguards built into both our technology and governance structures.

Every calculation includes detailed breakdowns that enable fact-checkers to verify claims, with continuous validation against TAXSIM and other established models providing accuracy benchmarks that users can reference. Model limitations and parameter sources are explicitly documented throughout the platform, preventing misrepresentation of preliminary analyses as definitive conclusions. Our training materials emphasize responsible analysis practices, uncertainty communication, and ethical considerations in policy modeling, ensuring that users understand both the power and limitations of microsimulation.

The steering committee, composed of diverse stakeholders from government, academia, and community organizations, reviews controversial use cases and establishes ethical guidelines for platform use. This governance structure ensures that democratization doesn't come at the expense of analytical integrity.

## Catalyzing Open-Source Innovation

PolicyEngine demonstrates the viability of open-source approaches for critical policy infrastructure. Our success catalyzes broader adoption of open-source models in government technology, showing that transparent, community-driven development can match or exceed proprietary alternatives in quality while dramatically expanding access.

The ecosystem's modular architecture—with independently maintained packages for L0 regularization, quantile regression forests, and microdata calibration—provides a template for sustainable open-source development. Each component attracts specialized contributors while benefiting from integration with the broader platform. This model influences how other policy technology projects approach open-source sustainability.

## Measuring Broader Impact

We will track broader impacts through concrete metrics:
- Number of states using PolicyEngine for legislative analysis (target: 20 by Year 2)
- Students trained in microsimulation methods (target: 10,000 by Year 2)
- Benefits accessed through partner organizations (target: $2 billion by Year 2)
- Research papers using PolicyEngine (target: 100 annually by Year 2)
- Contributors from underrepresented groups (target: 40% by Year 2)
- Policy analyses conducted by previously excluded organizations (target: 1,000 by Year 2)

These metrics demonstrate not just usage but transformative impact on who participates in policy analysis and how evidence informs democratic decision-making.

## Conclusion

PolicyEngine stands at a critical inflection point. We have proven that open-source microsimulation can match proprietary alternatives in accuracy while dramatically expanding access. Government adoption from the Joint Economic Committee to the UK Cabinet Office validates our technical approach. Growing interest from benefits platforms in migrating from closed-source alternatives demonstrates market demand. Serving over 100,000 people per year through our API and partners, with rapid growth as partnerships scale, we have achieved product-market fit.

Now we must transform this momentum into a self-sustaining ecosystem. NSF POSE Phase II funding provides the crucial catalyst for this transition, enabling us to formalize governance structures, establish contributor pathways, and build the training infrastructure necessary for long-term sustainability.

## The Path Forward

Our Phase II plan directly addresses the requirements for a successful open-source ecosystem. We will establish a formal governance structure transitioning from PSL Foundation fiscal sponsorship to an independent 501(c)(3) with representation from government users, academic researchers, and technical maintainers. This structure ensures community ownership while maintaining technical excellence.

The distributed development model already emerging—with UK developers contributing local authority features, USC researchers adding benefit cliff analyses, and multiple organizations building on our API—will be formalized through clear contribution guidelines, mentorship programs, and modular architecture that enables specialized communities to maintain components while ensuring system coherence.

Our sustainability model combines diverse revenue streams: state government consortiums, educational licensing, commercial API access, and philanthropic support. Unlike projects dependent on single funding sources, PolicyEngine builds resilience through multiple stakeholder communities, each with incentives for continued support.

## Why NSF Investment Matters Now

The timing for NSF investment is critical. The policy landscape is experiencing unprecedented change—pandemic-era program expansions, state-level experimentation with guaranteed income, federal tax credit modifications—yet most decision-makers lack tools to analyze these changes. The current migration of benefits navigators from proprietary to open-source platforms creates a unique window to establish PolicyEngine as the standard infrastructure.

Our participation in the January 2026 I-Corps cohort will refine our ecosystem strategy based on systematic stakeholder discovery. The overlap with our Phase I period through July 2026 enables immediate application of I-Corps insights while maintaining momentum. Beginning Phase II in May 2026 ensures continuity of effort during this critical growth phase.

NSF support provides more than funding—it validates PolicyEngine as research infrastructure worthy of public investment. This credibility accelerates government adoption, attracts academic contributors, and signals long-term viability to potential users currently hesitant about open-source sustainability.

## Transformative Potential

PolicyEngine's success will fundamentally reshape policy analysis infrastructure. Instead of twelve institutions controlling microsimulation capability, thousands of organizations will analyze policies affecting their communities. Instead of students learning from textbooks, they will use the same tools analyzing real legislation. Instead of families missing benefits due to complexity, community organizations will identify eligibility using transparent, validated calculations.

The ecosystem model we establish becomes a template for other policy technology domains. By demonstrating that open-source development can produce mission-critical government infrastructure, we influence broader adoption of transparent, community-driven approaches to public technology.

## Commitment to Success

Our team brings unique qualifications to execute this vision. Max Ghenis combines Google Analytics experience with MIT policy training and PolicyEngine's founding vision. Nikhil Woodruff's technical leadership and current UK Cabinet Office secondment demonstrates our platform's government-readiness. Pavel Makarchuk bridges U.S. and international implementations. Dan Feenberg's three decades maintaining TAXSIM provides unmatched expertise in microsimulation sustainability.

Our institutional partners amplify these capabilities. NBER's network reaches hundreds of economists ready to adopt open tools. USC's Center for Economic and Social Research validates our methods through HHS-funded research. Georgetown's Better Government Lab channels student energy into platform improvements. MyFriendBen's benefits navigation demonstrates real-world impact at scale; MyFriendBen reports screening over 40,000 Colorado households in its first two years with a median monthly benefit value of $1,500 (MyFriendBen, 2025).

## A Call to Action

The question is not whether policy analysis infrastructure should be democratized—the concentration of capability in elite institutions while states use Excel for billion-dollar programs is clearly unsustainable. The question is whether we seize this moment to establish open-source microsimulation as the foundation for evidence-based policymaking.

With NSF POSE Phase II support, PolicyEngine will become the open infrastructure that enables any organization to analyze how policies affect their communities. We will train thousands of new policy analysts, identify billions in unclaimed benefits, and ensure that policy decisions reflect evidence rather than ideology. Most importantly, we will prove that critical government infrastructure can be transparent, community-driven, and accessible to all.

The broader impacts extend beyond immediate users. By establishing sustainable open-source models for policy technology, we influence how society develops and maintains public goods in the digital age. By training diverse cohorts in microsimulation methods, we reshape who participates in policy analysis. By exposing model assumptions and calculations, we strengthen democratic accountability.

PolicyEngine is ready for this next phase. Our technical foundation is solid, our user community is growing, and our vision for democratized policy analysis resonates across political divides. With NSF's partnership, we will build the open-source ecosystem that transforms tax-benefit microsimulation from proprietary privilege to public infrastructure, ensuring that evidence-based policymaking becomes accessible to all who seek to improve their communities.

The future of policy analysis is open, transparent, and community-driven. With POSE Phase II support, PolicyEngine will make that future a reality.