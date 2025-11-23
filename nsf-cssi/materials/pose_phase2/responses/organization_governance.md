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