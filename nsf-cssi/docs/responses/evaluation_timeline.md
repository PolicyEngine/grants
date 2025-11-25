# 3. Evaluation Framework and Success Metrics

## 3.1 Validation Strategy

Validating imputation quality requires comparing imputed values against ground truth. We employ three complementary strategies:

### 3.1.1 Internal Validation (Holdout)

Within single surveys, we create artificial imputation tasks:
1. Select variables to treat as "missing" in a random subset of records
2. Impute these variables using only the remaining observed variables
3. Compare imputed values to actual values

This enables rapid iteration during development but cannot validate cross-survey imputation.

### 3.1.2 External Validation (Restricted Data)

The gold standard: compare imputations against actual linked data. We will:

1. **Census RDC Access**: Apply for access to internally linked CPS-SCF files at a Federal Statistical Research Data Center. Co-PI Ogorek has existing RDC project access.

2. **Validation Protocol**:
   - Compute imputed SCF variables for CPS records
   - Within RDC, compare to actual linked values
   - Export only aggregate accuracy metrics (approved outputs)
   - Publish validation results without releasing restricted data

3. **Published Benchmarks**: Results become public benchmarks against which other methods can compare, even without restricted access.

### 3.1.3 Indirect Validation (Auxiliary Statistics)

Validate that imputed data reproduce known population relationships:
- IRS Statistics of Income: Compare imputed capital gains, dividends to tax data aggregates
- Federal Reserve Financial Accounts: Compare imputed wealth totals to macro aggregates
- BLS Consumer Expenditure: Compare imputed consumption to published CEX statistics

## 3.2 Evaluation Metrics

### 3.2.1 Distributional Accuracy

**Quantile Loss**: Primary metric measuring accuracy across the distribution
```
QL_τ(y, ŷ) = τ(y - ŷ)⁺ + (1-τ)(ŷ - y)⁺
```
Average across quantiles τ ∈ {0.1, 0.25, 0.5, 0.75, 0.9} captures full distribution.

**Kolmogorov-Smirnov Distance**: Maximum difference between imputed and true CDFs

**Coverage**: Proportion of true values within imputation confidence intervals

### 3.2.2 Relationship Preservation

**Correlation Matrices**: Compare pairwise correlations in imputed vs. true data

**Regression Coefficient Comparison**: Estimate standard models (e.g., wealth on income, education) in imputed and true data; compare coefficients

**Conditional Distribution Tests**: Beyond marginals, test that P(wealth | income, age) matches

### 3.2.3 Downstream Task Performance

**Policy Simulation Accuracy**: For PolicyEngine, compare microsimulation results using imputed vs. true data for:
- Means-tested benefit eligibility (requires wealth)
- Tax liability (requires income from assets)
- Distributional analysis (requires full economic picture)

## 3.3 Success Targets

| Metric | Baseline (QRF) | Year 1 Target | Year 3 Target |
|--------|----------------|---------------|---------------|
| Mean Quantile Loss (SCF wealth) | 1.00 | 0.90 | 0.80 |
| Correlation preservation (r) | 0.85 | 0.90 | 0.93 |
| Coverage (90% CI) | 0.82 | 0.88 | 0.90 |
| Internal consistency violations | 5% | 2% | <1% |

## 3.4 Benchmark Suite

We will release standardized benchmark tasks enabling reproducible method comparison:

1. **SCF-to-CPS Wealth**: Impute 8 wealth variables onto CPS-ASEC
2. **CEX-to-CPS Consumption**: Impute 12 spending categories onto CPS
3. **SIPP-to-CPS Assets**: Impute asset and program participation variables
4. **Cross-validation Splits**: Predefined train/test splits for consistent evaluation

Benchmarks include preprocessing scripts, evaluation code, and leaderboards for community contribution.

---

# 4. Timeline and Milestones

## Year 1: Foundation and Core Methods

**Q1-Q2: Framework Hardening**
- Refactor existing QRF implementation for production reliability
- Establish CI/CD pipeline with automated testing
- Create standardized data preprocessing modules
- Document existing functionality

**Q3: CTGAN Integration**
- Integrate SDV library CTGAN implementation
- Adapt for conditional imputation (not synthesis)
- Implement survey weight handling
- Initial SCF-to-CPS experiments

**Q4: TVAE Integration and Validation**
- Add TVAE as alternative backend
- Develop internal validation framework (holdout tests)
- Begin RDC application for external validation
- Release MicroImpute v1.5 with generative methods

**Year 1 Deliverables**:
- MicroImpute v1.5 with CTGAN/TVAE
- Internal validation benchmark suite
- Documentation and tutorials
- Conference paper draft (ML venue)

## Year 2: Advanced Methods and Applications

**Q1-Q2: Advanced Generative Methods**
- Implement CTAB-GAN+ for long-tailed distributions
- Evaluate diffusion models (TabDDPM) as they mature
- Optimize training for large surveys

**Q3: Multi-Variable Block Imputation**
- Develop variable block definitions for common surveys
- Implement cross-block consistency constraints
- CEX consumption imputation pipeline

**Q4: Enhanced CPS v2**
- Apply best methods to create Enhanced CPS with wealth and consumption
- External validation (RDC access expected by this point)
- Release public Enhanced CPS dataset

**Year 2 Deliverables**:
- MicroImpute v2.0 with advanced methods
- Enhanced CPS v2 public dataset
- External validation results
- Methods paper submission (statistics/econometrics journal)

## Year 3: Community Adoption and Sustainability

**Q1-Q2: Panel Data Preparation**
- Tools for longitudinal imputation (preparing synthetic panels)
- Temporal consistency constraints
- Integration with MicroCalibrate for weight adjustment

**Q3: Documentation and Training**
- Comprehensive user guide
- Video tutorials
- Workshop materials
- Student training grants

**Q4: Sustainability Transition**
- Community governance model
- Contribution guidelines and review process
- Long-term hosting and maintenance plan
- Final benchmark publications

**Year 3 Deliverables**:
- MicroImpute v3.0 (production release)
- Panel preparation tools
- Training materials and workshops
- Sustainability plan documentation

## Milestone Summary

| Milestone | Target Date | Success Criterion |
|-----------|-------------|-------------------|
| M1: CTGAN/TVAE integration | Month 12 | Methods pass internal validation |
| M2: External validation initiated | Month 15 | RDC access approved |
| M3: Enhanced CPS v2 | Month 24 | Public release with documentation |
| M4: Advanced methods | Month 27 | CTAB-GAN+/diffusion benchmarked |
| M5: Production release | Month 36 | v3.0 with sustainability plan |

---

# 5. Broader Impacts

## 5.1 Democratizing Access to Enhanced Microdata

The primary broader impact is **expanding who can conduct sophisticated policy research**. Currently, analyzing interactions between income, wealth, and consumption requires:
- Institutional affiliation with RDC access
- Months of application processing
- Travel to secure facilities
- Output review delays

MicroImpute enables researchers at any institution to create enhanced microdata on their personal computer in minutes. This particularly benefits:

**Graduate Students**: Dissertation research on wealth inequality, retirement security, or consumption patterns becomes feasible without restricted data applications that may outlast degree timelines.

**Teaching Institutions**: Faculty at colleges without research infrastructure can assign meaningful empirical projects using real (enhanced) data.

**International Researchers**: Scholars outside the US cannot access Census RDCs; MicroImpute provides alternative pathways to study American economic data.

**State and Local Analysts**: Policy offices analyzing state-specific impacts often lack federal restricted data access; imputation enables localized analysis.

## 5.2 Improving Policy Analysis Quality

Enhanced microdata enables more comprehensive policy analysis:

**Means-Tested Programs**: Many benefits (Medicaid, SNAP, SSI) have asset tests. Without wealth data, analysts cannot accurately model eligibility. MicroImpute-enhanced CPS enables proper means-testing simulation.

**Tax Policy**: Capital gains, dividends, and interest income are poorly captured in CPS. SCF imputation enables more accurate tax incidence analysis, particularly for reforms affecting investment income.

**Retirement Security**: Social Security reform analysis requires understanding the joint distribution of earnings, wealth, and consumption. Current tools force analysts to examine each dimension separately.

## 5.3 Methodological Contribution

The project advances survey methodology by:

1. **Establishing Best Practices**: Rigorous benchmarks determine which methods work best for which variable types, guiding future research
2. **Open Source Infrastructure**: Unlike proprietary tools (e.g., Census DAS), MicroImpute is fully transparent and reproducible
3. **Bridging ML and Social Science**: Demonstrates practical applications of generative models, encouraging adoption

## 5.4 Training and Workforce Development

**Student Participation**: Budget includes participant support for 5 students annually to attend MicroImpute workshops, prioritizing students from institutions without strong quantitative training.

**Workshop Series**: Annual workshops at NBER Summer Institute or APPAM teaching researchers to use MicroImpute for policy analysis.

**Documentation**: Comprehensive tutorials designed for researchers without ML backgrounds, lowering barriers to adoption.

## 5.5 Open Science and Reproducibility

All project outputs are open:
- **Code**: MIT license, GitHub repository
- **Data**: Enhanced datasets with clear documentation
- **Methods**: Published papers with reproducible experiments
- **Benchmarks**: Public leaderboards enabling community contribution

This transparency enables verification, extension, and adaptation for other countries' surveys.
