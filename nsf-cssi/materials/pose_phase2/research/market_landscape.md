# PolicyEngine Market Landscape and Adoption Research

This document synthesizes current adopters, adjacent users, and expansion opportunities for PolicyEngine’s open-source rules engine and enhanced local microdata. It focuses on concrete use cases and an evidence‑oriented path to adoption across public, private, and nonprofit sectors in the U.S., with international extensions.

## Executive Summary

- PolicyEngine’s immediate adoption beachheads are: (1) public policy analysis (government, think tanks, academic labs); (2) benefit navigation platforms; (3) journalists and analysts covering fiscal policy; and (4) teaching and research in economics/public policy programs.
- The rules engine appeals to tax professionals, consultancies, and software vendors seeking transparent calculations and program logic, while the local microdata (with planned consumption integration) enables county‑level demand, affordability, and incidence analyses for market research, retailers, utilities, transportation, and insurers.
- A modular architecture (L0, MicroImpute, MicroCalibrate) plus governance and security practices lowers perceived risk for institutional adoption and creates tractable contribution surfaces for external maintainers.

## Current Usage Snapshot (illustrative)

The following reflect engagements and pilots referenced in internal materials and blog posts. These are included to anchor near‑term partner development and should be refreshed with direct confirmations for the final proposal:

- Benefit navigation ecosystem: Pilots and integrations with nonprofit platforms (e.g., Benefit Navigator/ImagineLA, MyFriendBen) to power eligibility and benefit estimation flows via API and rules.
- Academic and research partners: Analyses, validation, and teaching use across economics/public policy courses and labs; state‑level TAXSIM comparisons provide a familiar validation touchpoint for reviewers and analysts.
- Government engagement: UK Cabinet Office secondment (cofounder) to integrate PolicyEngine into policy development workflows; provides a concrete template for U.S. public‑sector adoption.

Planned follow‑ups: obtain letters from 3–5 external users/contributors (e.g., academic labs, benefit platforms, government partners) confirming concrete usage and intended engagement.

## Expansion Segments — Rules Engine (Policy/Tax/Program Logic)

1) Public sector policy analysis
- Federal budget and tax units; state revenue departments; legislative fiscal offices.
- Uses: baseline projections, distributional analysis (deciles, geographic cuts), revenue/benefit scoring, quick policy iteration.
- Drivers: transparency, reproducibility, and the ability to inspect and adapt program logic.

2) Think tanks and research institutes
- Independent policy shops; university‑affiliated centers; philanthropic research programs.
- Uses: evidence briefs, interactive explainers, replicable technical appendices; modeling alternatives and sensitivity analysis.
- Drivers: transparent methods; credible open tooling; fast reproduction and peer review.

3) Academic programs (economics, public policy, data science)
- Instruction and capstones using a live rules engine with validated datasets; replication projects; student fellowships and maintainer pipelines.
- Drivers: high‑quality open tools; versioned releases; contributor mentorship; reproducible pipelines.

4) Journalists and civic technologists
- Budget, tax, and benefits beats; explanatory graphics; interactive calculators; watchdog analysis of proposals.
- Drivers: time‑to‑insight; credibility via open code; ability to share notebooks and methods.

5) Professional services (accounting, tax, advisory)
- Accounting firms and boutique economic consultancies requiring transparent program logic and state overlays; auditability; fast “what‑if” analysis for clients.
- Drivers: correctness, audit trails, and the option to self‑host or integrate with internal systems.

6) Tax software and API vendors
- Integration of rules for new scenarios; program add‑ons (credits, benefits); APIs for eligibility screens.
- Drivers: time‑to‑market; verifiable logic; OSS maintenance pathways for new geographies and programs.

## Expansion Segments — Enhanced Local Microdata (with Consumption Integration)

The enhanced microdata vision combines imputation (MicroImpute) and gradient‑descent reweighting (MicroCalibrate) to align with administrative targets, with a roadmap to integrate consumption data. The resulting local (e.g., county‑level) panels support:

1) Market research and retailers
- Demand estimation by county and demographic segments; scenario analysis for tax/benefit changes; store footprint planning; price sensitivity and basket composition studies.
- Deliverables: county‑level demand indices; category‑level elasticities; interactive dashboards; reproducible notebooks.

2) Consumer packaged goods (CPG) and e‑commerce
- Category demand forecasts; distributional impacts from policy changes (e.g., SNAP adjustments); cross‑market comparisons; promotion optimization.
- Deliverables: time‑series forecasts and policy scenario overlays; attribution analyses for observed changes.

3) Utilities, telco, and transportation
- Affordability modeling for rate design; program eligibility targeting; demand modeling under policy shifts (e.g., fuel taxes, credits).
- Deliverables: localized affordability/demand maps; customer segmentation models; policy sensitivity tools.

4) Financial services and insurers
- Household cash‑flow stress measures; premium affordability; default/claim risk sensitivity to policy scenarios; localized index construction.
- Deliverables: county‑level financial stress metrics; exposure/risk overlays under tax/benefit reforms.

5) Healthcare and benefits administrators
- Estimating program take‑up impacts from policy tweaks; targeting of outreach; distributional effects on households.
- Deliverables: eligibility and participation modeling; outreach prioritization indices; evaluation dashboards.

### Consumption Data Integration Plan

- Data sources: public microdata (e.g., Consumer Expenditure Survey microdata) and other open economic indicators to estimate consumption patterns by county and demographic groups; link via imputation to household records.
- Pipeline: (1) impute consumption components using Quantile Regression Forests; (2) reweight to match administrative totals; (3) generate county‑level aggregates and elasticities; (4) publish versioned releases.
- Outputs: county‑level consumption panels; category‑specific demand indices; reproducible code and documentation.
- Responsible data use: retain clean separation of code and any restricted data; provide clear guidance for users integrating proprietary sources.

## UK and International Extensions

- International collaborators can participate (without NSF funds). PolicyEngine’s UK model and the Cabinet Office engagement demonstrate portability and government‑grade workflows. We will use the UK experience as a blueprint for U.S. public‑sector onboarding (governance, security, reproducibility, and training).
- Expansion path: prioritize countries where comparable administrative targets and survey data enable the calibration pipeline; leverage community maintainers and working groups per country/domain.

## Data Partnerships and Governance

- Licensing and governance: permissive licensing for core code; clear guidelines for data adapters; codeowners on critical paths; signed releases and SBOM for downstream assurance.
- Documentation and reproducibility: notebooks and pipelines that allow institutional users to audit, rerun, and extend analyses; versioned datasets with change logs.

## Candidate Organizations and Roles (Illustrative)

Public Sector
- Federal/State budget and revenue offices; legislative fiscal committees; municipal planning departments.
- Roles: model validation; baseline and scoring; geographic incidence analysis; program evaluation.

Research & Academia
- University policy labs; economic research institutes; methods courses; capstone programs.
- Roles: reproducible research; validation; methods contributions; training future maintainers.

Platforms & Nonprofits
- Benefit navigation platforms; social service providers; community organizations; philanthropic programs backing public interest analytics.
- Roles: real‑world deployments; eligibility/benefit estimation; outreach targeting.

Private Sector
- Tax/advisory practices; tax software vendors; consultancies; market research firms; retailers; utilities; telcos; transportation; financial services; insurers; real estate.
- Roles: local demand and affordability modeling; scenario planning; risk and exposure analytics.

Note: The Prenatal‑to‑3 Policy Impact Center and similar evidence hubs are natural methodological collaborators and potential users of reproducible program rules and local microdata; confirm alignment, data requirements, and letter options.

## Go‑to‑Market and Partnership Motions

- Government template: replicate the UK Cabinet Office model for U.S. agencies—designate a policy owner, a technical counterpart, and a clear handoff from pilot to sustained use; produce governance/security artifacts up front (SBOM, signed releases, codeowners, incident response).
- Academic template: syllabus kits, datasets, and assignments that plug into courses; short sprints leading to documented contributions; co‑authored case studies.
- Platform template: drop‑in API endpoints, reference integrations, and examples; SLAs for pilot windows; co‑marketing via case studies.
- Private‑sector template: county‑level consumption/demand indices and policy sensitivity; reproducible notebooks; trial licenses for hosted artifacts while keeping code open.

## Evidence and Metrics (for reviewers and partners)

- Adoption: named deployments; monthly active users; external PRs/issues; number of community maintainers; citations and media mentions.
- Quality/Security: test coverage; time‑to‑merge; signed release coverage; vulnerability MTTR; reproducibility audits.
- Calibration: share of targets within tolerance; loss reduction trajectories; stability across holdout splits; logs and dashboards.
- Teaching/Workforce: number of courses/labs using PolicyEngine; student contributions; maintainer pipelines.

## Risks and Mitigations

- Resource constraints for public‑sector onboarding → Mitigation: compact pilot scope; upfront security/governance artifacts; documented playbooks.
- Data gaps at local levels → Mitigation: transparent imputation and calibration methods; documented confidence intervals; community feedback loops; staged releases.
- Fragmentation across forks → Mitigation: strong core governance; contribution guidelines; codeowners; regular tagged releases.

## Next Actions

- Secure 3–5 letters of collaboration reflecting current use and planned engagement (users/contributors and a government partner letter).
- Prioritize 2–3 market vertical pilots for the local microdata (retail/CPG; utilities/telco; insurers) to demonstrate policy sensitivity and demand estimation.
- Publish a public roadmap and dashboards with calibration metrics and release cadence.

