# NSF CSSI Elements: PolicyEngine Core

**Open Tax-Benefit Rules Infrastructure**

## Overview

| Field | Value |
|-------|-------|
| Program | NSF CSSI Elements |
| Amount | $568,178 |
| Duration | 3 years |
| Deadline | December 1, 2025 |
| Status | Draft |

## Scope

This proposal focuses on **core infrastructure modernization** for PolicyEngine's tax-benefit rules engine:

1. **Native Scenario Branching**: Handle tax provisions requiring calculation under multiple alternatives (credit vs. deduction elections, AMT, Social Security trust fund accounting)

2. **Continuous Validation Infrastructure**: Automated pipelines comparing every release against TAXSIM (NBER) and Atlanta Fed Policy Rules Database

3. **Performance Optimization**: Enable population-scale microsimulation (100M+ tax units)

## Key Partnerships

- **NBER**: MOU with James Poterba, Dan Feenberg (TAXSIM creator) as technical advisor
- **Atlanta Fed**: MOU for Policy Rules Database validation
- **NSF**: Active POSE Phase I award (through July 2026)

## Directory Structure

```
nsf-cssi-elements/
├── grant.yaml                 # Project metadata and scope
├── README.md                  # This file
├── docs/
│   └── responses/
│       ├── project_summary.md     # 1-page summary
│       └── project_description.md # 15-page narrative
├── budget/
│   ├── budget.yaml            # Detailed budget breakdown
│   └── budget_justification.md # NSF budget narrative
└── supplementary/
    └── data_management_plan.md # Required DMP (2 pages)
```

## Remaining Tasks

- [ ] Biographical sketches (SciENcv format)
- [ ] Current and pending support
- [ ] Facilities, equipment, and other resources
- [ ] Final PDF assembly
- [ ] Research.gov submission

## Timeline

| Date | Task |
|------|------|
| Nov 25 | Complete draft narrative |
| Nov 26-27 | Polish, gather supplementary docs |
| Nov 28 | Internal review |
| Nov 29 | Final edits |
| Dec 1 | Submit via Research.gov |

## Contact

Max Ghenis (PI) - max@policyengine.org
