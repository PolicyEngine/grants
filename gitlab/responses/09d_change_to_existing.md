PolicyEngine currently covers major federal programs (SNAP, Medicaid, federal tax credits) and state tax credits nationwide. We model TANF, CCDF (childcare), LIHEAP, and SSI state supplements in select states (CO, CA, IL, NC, MA, TX) where partners funded deep implementations.

This project systematizes expanding partial state coverage to nationwide: LIHEAP in 50 states (currently 6), WIC state variations, Section 8 rules by jurisdiction, state rental assistance programs, potentially Medicaid LTSS state variations.

Efficiency improvements measured through:
- Encoding time per program: targeting 50%+ reduction (manual baseline: 40-80 hours, AI-assisted target: 20-40 hours with validation)
- Programs encoded per 6 months: targeting 5-10 vs. typical 2-5 baseline
- Quality maintained: AI code must match human golden PR standards (test suite pass rates, edge case coverage, documentation quality)

Current: If partner needs LIHEAP in a new state, manual encoding takes weeks. With AI pipelines: potentially hours if quality benchmarks are met.

Current: Partners request features; we prioritize by capacity. With AI: respond faster to more requests.

Bigger vision: This is a step toward open-source rules detailed enough for ADMINISTERING benefits, not just screening. If AI can encode rules accurately at fine-grained levels (edge cases, exceptions, interaction effects), government agencies could use PolicyEngine inside county benefit offices for actual eligibility determination—not just navigation tools for applicants. That requires higher quality standards, which is why rigorous benchmarking against golden PRs is essential.

Improvement compounds: Faster encoding → partners expand coverage → more users access benefits → more validation data → AI improves → even faster encoding. This could transform from state-by-state artisanal development to systematic nationwide coverage precise enough for government administration.
