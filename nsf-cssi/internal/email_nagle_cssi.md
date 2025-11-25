# Email to Dr. Nagle (via CSSIQueries)

**To:** CSSIQueries@nsf.gov
**Subject:** CSSI Elements inquiry for Dr. Nicholas Nagle (SBE/BCS) - Open infrastructure for tax-benefit microsimulation

---

Dear Dr. Nagle,

I just left you a voicemail and wanted to follow up by email. I'm preparing a CSSI Elements proposal for the December 1 deadline and hoped to briefly check fit with SBE's priorities—though I realize this timing is tight given the holiday week.

**The research infrastructure gap:** Public economics increasingly requires modeling the joint tax-benefit system—how income taxes interact with SNAP, Medicaid, and EITC to shape household incentives. Yet existing infrastructure was built for an earlier era: TAXSIM (1,000+ citations) models taxes but not benefits; benefit microsimulation models are proprietary and not accessible to independent researchers. Neither supports open reform modeling. Researchers studying effective marginal tax rates, benefit cliffs, or optimal policy design must cobble together separate tools.

**What we've built:** PolicyEngine is open-source infrastructure modeling the complete U.S. tax-benefit system in a unified framework. We encode federal and state income taxes *plus* major benefit programs (SNAP, Medicaid, TANF, EITC, and more), enabling researchers to study the full system. Users can model any hypothetical reform—not just current law. Everything runs on calibrated microdata via modern Python APIs, with 1,800+ statutory citations embedded in the codebase.

We're validated against TAXSIM itself (MOU with NBER; Dan Feenberg serves as advisor) and the Atlanta Fed Policy Rules Database. Current users include the Joint Economic Committee and UK Cabinet Office. Partner applications (MyFriendBen, Amplifi, others) have identified over $1B in unclaimed benefits for low-income families.

**The research opportunity:** Consider studying how CTC expansions interact with SNAP phase-outs to affect labor supply—this requires modeling taxes and benefits together at population scale. Or studying effective marginal tax rates across states—requiring unified 50-state tax and benefit models. PolicyEngine enables this research, but our infrastructure needs modernization for population-scale analysis (150M+ tax units), continuous validation as law changes, and interfaces for R/Stata users.

**The ask:** ~$600K over 3 years to build the infrastructure layer enabling rigorous research on the joint tax-benefit system—something no existing tool supports.

We plan to submit regardless, but if you have a moment to confirm we're targeting the right program (Elements vs. Framework) and directorate (SBE vs. OAC), that would be helpful—even after the deadline if timing doesn't permit before.

Best regards,
Max Ghenis
CEO, PolicyEngine
max@policyengine.org
NSF POSE Phase I awardee (#2229069)
