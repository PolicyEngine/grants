# 1. Cyberinfrastructure Need and Vision

## 1.1 The Survey Data Fragmentation Problem

Comprehensive economic and policy analysis requires variables that no single survey captures. Consider a researcher studying how Social Security reform affects household financial security. They need:

- **Income and demographics** from the Current Population Survey Annual Social and Economic Supplement (CPS-ASEC), which covers 100,000+ households with detailed earnings, transfer income, and family structure
- **Wealth and retirement assets** from the Survey of Consumer Finances (SCF), which captures net worth, 401(k) balances, and debt with oversampling of high-wealth households
- **Consumption patterns** from the Consumer Expenditure Survey (CEX), which tracks spending on healthcare, housing, food, and other categories

No public-use dataset contains all these variables. Researchers face three inadequate options:

**Option 1: Restricted Data Access.** The Census Bureau maintains internally linked files combining CPS with administrative records, but access requires: (a) lengthy applications (6-18 months); (b) travel to Federal Statistical Research Data Centers; (c) output review preventing timely analysis; and (d) prohibition on sharing code or intermediate results. This option excludes most researchers, particularly graduate students, those at teaching-focused institutions, and international scholars.

**Option 2: Separate Analyses.** Researchers analyze each survey independently, losing the ability to examine interactions between income, wealth, and consumption. A study of carbon tax incidence cannot jointly model how taxes affect spending patterns (CEX) across the wealth distribution (SCF) for different income groups (CPS).

**Option 3: Ad Hoc Imputation.** Researchers implement custom imputation procedures of varying quality, with no standardized tools, validation frameworks, or reproducibility. Results depend heavily on methodological choices that are rarely documented or justified.

## 1.2 Limitations of Current Imputation Methods

Several imputation approaches exist, each with significant limitations for multi-variable survey enhancement:

**Statistical Matching (Hot-Deck).** Matches records across surveys based on shared covariates, copying variable values from donor records. Limitations: (a) only preserves relationships with matching variables, not unobserved correlations; (b) cannot generate values outside the donor pool; (c) produces identical values for multiple recipients, reducing variance.

**Sequential Regression (SRMI).** Imputes variables one at a time using regression models, iterating until convergence. Used by Census Bureau for SIPP Synthetic Beta. Limitations: (a) order-dependent—different variable orderings yield different results; (b) assumes variables follow regression model forms; (c) accumulates errors across iterations.

**Quantile Random Forests (QRF).** Our current approach in MicroImpute. Trains random forests to predict conditional quantile distributions, then samples from predicted distributions. Advantages: handles non-linear relationships, provides uncertainty quantification. Limitations: (a) still sequential—imputes one variable at a time; (b) cannot capture joint distributions of multiple variables; (c) may produce internally inconsistent records (e.g., high assets but no asset income).

**Fully Synthetic Data.** Generates entirely artificial records mimicking statistical properties of real data. Census Bureau has proposed this for American Community Survey. Recent research (Hotz et al., PNAS 2024) demonstrates fundamental limitations: "Synthetic census microdata are not suitable for most research and policy applications" because models cannot capture the complex, high-dimensional relationships researchers need to study.

## 1.3 The Gap: Multi-Variable Generative Imputation

The critical gap is infrastructure for **imputing coherent bundles of related variables simultaneously** while preserving observed data. This requires:

1. **Joint distribution modeling**: Capturing correlations among imputed variables (e.g., assets, debts, and retirement accounts should be jointly plausible)
2. **Conditional generation**: Generating imputed values conditional on observed variables (demographics, income) without modifying observations
3. **Mixed data handling**: Processing continuous variables (dollar amounts), categorical variables (asset ownership), and their interactions
4. **Distributional fidelity**: Preserving marginal distributions, especially tails (high wealth, extreme consumption)
5. **Scalability**: Processing 100,000+ household records with dozens of variables

Recent advances in generative machine learning—particularly Conditional Tabular GANs (CTGAN), Tabular VAEs (TVAE), and diffusion models—provide the technical foundations to address this gap, but no production-ready, researcher-accessible implementation exists for survey imputation applications.

## 1.4 Vision: MicroImpute as Research Infrastructure

We envision MicroImpute as foundational cyberinfrastructure enabling a new paradigm for survey-based research:

**For Individual Researchers**: A Python library providing simple APIs to impute SCF wealth variables onto CPS records, CEX consumption onto any demographic survey, or custom variable sets across user-provided datasets. No ML expertise required—researchers specify source survey, target survey, variables to impute, and receive enhanced microdata with uncertainty quantification.

**For Research Teams**: Standardized benchmarking tools to compare imputation methods against restricted-data ground truth, enabling rigorous method selection and validation. Teams can document and reproduce imputation choices, improving transparency and replicability.

**For the Field**: Open-source infrastructure that becomes the standard approach for survey enhancement, analogous to how Stata's `mi` commands standardized multiple imputation for missing data. Published benchmarks establish which methods work best for which variable types, guiding future research.

**For PolicyEngine**: Enhanced microdata enabling tax and benefit microsimulation that incorporates wealth (for means-tested programs), consumption (for excise taxes), and their interactions—currently impossible with public CPS data alone.
