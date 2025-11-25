# Email to Dr. Nagle (via CSSIQueries)

**To:** CSSIQueries@nsf.gov
**Subject:** CSSI Elements inquiry for Dr. Nicholas Nagle (SBE/BCS) - Next-generation infrastructure for tax-benefit research

---

Dear Dr. Nagle,

I just left you a voicemail and wanted to follow up by email. I'm preparing a CSSI Elements proposal for the December 1 deadline and hoped to confirm fit.

**Context:** NBER's TAXSIM has been foundational cyberinfrastructure for public economics—1,000+ academic citations over 30 years. But TAXSIM has limitations that constrain the next generation of research:
- Taxes only, no benefit programs (SNAP, Medicaid, TANF)
- Closed-source Fortran—researchers can't inspect or extend
- Current law only—can't model policy reforms
- No integrated microsimulation on large datasets
- No modern API for programmatic access

**What we've built:** PolicyEngine is open-source infrastructure that addresses each of these gaps. We encode federal and state income taxes *plus* major benefit programs, enabling researchers to study the full tax-benefit system. Users can model any hypothetical reform, not just current law. Everything runs on calibrated microdata via Python APIs, and the code is fully inspectable.

We're validated against TAXSIM itself (MOU with NBER/Dan Feenberg) and the Atlanta Fed Policy Rules Database. Current users include the Joint Economic Committee and UK Treasury. Dan Feenberg, TAXSIM's creator, serves as an advisor.

**The research opportunity:** Imagine revisiting decades of tax incidence studies while incorporating SNAP phase-outs, Medicaid cliffs, and EITC interactions. That's the research PolicyEngine enables—but our core infrastructure needs modernization to support population-scale analysis (100M+ tax units), continuous validation as law changes, and interfaces for R/Stata users.

**The ask:** ~$600K over 3 years to build the infrastructure layer that makes PolicyEngine as foundational for the next generation of public economics as TAXSIM has been for the last.

**Questions:**
- Is Elements the right track for this scope?
- Is SBE the appropriate home?
- Any guidance on reviewer priorities?

Best regards,
Max Ghenis
CEO, PolicyEngine
max@policyengine.org
NSF POSE Phase I awardee (#2229069)
