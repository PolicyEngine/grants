Validation & Interoperability Plan

We will operate a transparent validation harness that compares PolicyEngine to peer models and to published scores. Comparisons run automatically in CI against versioned scenario packs, and the harness emits signed scorecards and dashboards that show deltas by provision and geography over time. An independent evaluator will audit assumptions and methods and publish an assessment. Phase II funds support the harness, scenario mapping, CI integration, and release operations—not net‑new features.

Scope
- Cross‑model: TAXSIM (NBER), PSL Tax‑Calculator, Atlanta Fed Policy Rules Database (PRD) scenarios, Yale Budget Lab tools, BenefitKitchen (where permitted).
- Published scores: ITEP, Tax Foundation, CBO, JCT.
- International: UK (IPPR, HMT, OBR) and Canada (SPSDM) using public documentation and scenarios, in collaboration with partners.

Artifacts
- Scenario packs: machine‑readable inputs with provenance and notes on assumptions and definitions.
- Mappers: repeatable transformations between each model’s inputs/outputs and PolicyEngine’s; documented caveats.
- CI jobs: per‑PR comparison runs; thresholds for flagging deltas; signed artifacts archived per release.
- Dashboards: provision‑ and geography‑level comparisons; trend lines across releases.

Governance
- Results and caveats are published; disagreements trigger an issue with a minimal reproducer and a plan of record.
- When a partner funds an improvement, it ships as a signed, reproducible release with documentation.

