# NSF CSSI Elements Proposal

## MicroImpute: Machine Learning Infrastructure for Survey Data Enhancement

**PI**: Max Ghenis, PolicyEngine / PSL Foundation
**Co-PI**: Ben Ogorek, PolicyEngine
**Requested Amount**: $578,000 over 3 years

---

# Project Summary

## Overview

Economic and policy researchers routinely need variables that span multiple surveys—income from the Current Population Survey (CPS), wealth from the Survey of Consumer Finances (SCF), and consumption from the Consumer Expenditure Survey (CEX)—but accessing restricted linked microdata requires lengthy applications, secure facilities, and prohibits sharing results with the broader research community. This project will develop MicroImpute, open-source machine learning infrastructure that enables researchers to create enhanced survey microdata by imputing variables across datasets without requiring restricted data access.

Current imputation methods, including our existing Quantile Random Forest (QRF) implementation, process variables sequentially, which can produce internally inconsistent records where imputed wealth is implausible given imputed consumption. We will extend MicroImpute with generative machine learning methods—Conditional Tabular GANs (CTGAN), Tabular Variational Autoencoders (TVAE), and diffusion models—that impute coherent bundles of related variables simultaneously. This approach preserves the joint distribution of imputed variables while maintaining the integrity of observed data, enabling new research applications in tax policy, retirement security, and consumption-based welfare analysis.

The project will deliver: (1) a hardened, production-ready imputation library with multiple ML backends; (2) standardized benchmark datasets for method comparison; (3) enhanced versions of PolicyEngine's publicly available microdata; and (4) comprehensive documentation enabling adoption by the research community.

## Intellectual Merit

This project advances cyberinfrastructure for computational social science by developing novel applications of generative ML to survey data enhancement. While GANs and VAEs have been applied to synthetic data generation, their use for targeted multi-variable imputation—preserving real observations while adding coherent variable blocks—represents a methodological innovation. The work will produce rigorous benchmarks comparing generative methods against traditional approaches (statistical matching, sequential regression, QRF), establishing best practices for the field. The technical challenges of handling mixed continuous-categorical data, preserving complex variable relationships, and scaling to population-representative samples will yield insights applicable beyond survey imputation to broader tabular data problems.

## Broader Impacts

MicroImpute will democratize access to enhanced survey microdata, removing barriers that currently limit sophisticated policy analysis to researchers with restricted data access. The infrastructure will enable: graduate students to conduct dissertation research on wealth inequality using imputed SCF variables; state policy analysts to model consumption tax incidence without CEX access; and international researchers to apply validated methods to their national surveys. All code will be open-source (MIT license), with comprehensive tutorials designed for researchers without ML expertise. The project will train the next generation of computational social scientists through workshops and student participation grants, with particular attention to reaching researchers at institutions without established restricted data programs.

## Keywords

Survey data imputation; generative machine learning; CTGAN; tabular data synthesis; microdata enhancement; Current Population Survey; Survey of Consumer Finances; open-source infrastructure

---

# Project Description

## 1. Cyberinfrastructure Need and Vision

### 1.1 The Survey Data Fragmentation Problem

Comprehensive economic and policy analysis requires variables that no single survey captures. Consider a researcher studying how Social Security reform affects household financial security. They need:

- **Income and demographics** from the Current Population Survey Annual Social and Economic Supplement (CPS-ASEC), which covers 100,000+ households with detailed earnings, transfer income, and family structure
- **Wealth and retirement assets** from the Survey of Consumer Finances (SCF), which captures net worth, 401(k) balances, and debt with oversampling of high-wealth households
- **Consumption patterns** from the Consumer Expenditure Survey (CEX), which tracks spending on healthcare, housing, food, and other categories

No public-use dataset contains all these variables. Researchers face three inadequate options:

**Option 1: Restricted Data Access.** The Census Bureau maintains internally linked files combining CPS with administrative records, but access requires: (a) lengthy applications (6-18 months); (b) travel to Federal Statistical Research Data Centers; (c) output review preventing timely analysis; and (d) prohibition on sharing code or intermediate results. This option excludes most researchers, particularly graduate students, those at teaching-focused institutions, and international scholars.

**Option 2: Separate Analyses.** Researchers analyze each survey independently, losing the ability to examine interactions between income, wealth, and consumption. A study of carbon tax incidence cannot jointly model how taxes affect spending patterns (CEX) across the wealth distribution (SCF) for different income groups (CPS).

**Option 3: Ad Hoc Imputation.** Researchers implement custom imputation procedures of varying quality, with no standardized tools, validation frameworks, or reproducibility. Results depend heavily on methodological choices that are rarely documented or justified.

### 1.2 Limitations of Current Imputation Methods

Several imputation approaches exist, each with significant limitations for multi-variable survey enhancement:

**Statistical Matching (Hot-Deck).** Matches records across surveys based on shared covariates, copying variable values from donor records. Limitations: (a) only preserves relationships with matching variables, not unobserved correlations; (b) cannot generate values outside the donor pool; (c) produces identical values for multiple recipients, reducing variance.

**Sequential Regression (SRMI).** Imputes variables one at a time using regression models, iterating until convergence. Used by Census Bureau for SIPP Synthetic Beta. Limitations: (a) order-dependent—different variable orderings yield different results; (b) assumes variables follow regression model forms; (c) accumulates errors across iterations.

**Quantile Random Forests (QRF).** Our current approach in MicroImpute. Trains random forests to predict conditional quantile distributions, then samples from predicted distributions. Advantages: handles non-linear relationships, provides uncertainty quantification. Limitations: (a) still sequential—imputes one variable at a time; (b) cannot capture joint distributions of multiple variables; (c) may produce internally inconsistent records.

**Fully Synthetic Data.** Generates entirely artificial records mimicking statistical properties of real data. Recent research (Hotz et al., PNAS 2024) demonstrates fundamental limitations: "Synthetic census microdata are not suitable for most research and policy applications" because models cannot capture the complex, high-dimensional relationships researchers need to study.

### 1.3 The Gap: Multi-Variable Generative Imputation

The critical gap is infrastructure for **imputing coherent bundles of related variables simultaneously** while preserving observed data. This requires:

1. **Joint distribution modeling**: Capturing correlations among imputed variables
2. **Conditional generation**: Generating imputed values conditional on observed variables
3. **Mixed data handling**: Processing continuous and categorical variables together
4. **Distributional fidelity**: Preserving marginal distributions, especially tails
5. **Scalability**: Processing 100,000+ household records with dozens of variables

Recent advances in generative machine learning—particularly CTGAN, TVAE, and diffusion models—provide the technical foundations to address this gap, but no production-ready, researcher-accessible implementation exists for survey imputation applications.

### 1.4 Vision: MicroImpute as Research Infrastructure

We envision MicroImpute as foundational cyberinfrastructure enabling a new paradigm for survey-based research. For individual researchers: simple Python APIs to impute variables across surveys. For research teams: standardized benchmarking tools to compare methods. For the field: open-source infrastructure that becomes the standard approach for survey enhancement.

---

## 2. Technical Approach

### 2.1 Architecture Overview

MicroImpute provides a unified interface across multiple imputation backends:

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                      │
│   Python API  │  CLI Tools  │  Jupyter Widgets  │  Dashboard │
├─────────────────────────────────────────────────────────────┤
│                   Imputation Engine Layer                    │
│  QRF  │  CTGAN  │  TVAE  │  CTAB-GAN+  │  TabDDPM  │ Custom │
├─────────────────────────────────────────────────────────────┤
│                  Data Processing Layer                       │
│  Preprocessing │ Mixed-Type Encoding │ Post-processing       │
├─────────────────────────────────────────────────────────────┤
│                  Validation & Benchmarking                   │
│  Quantile Loss │ Distribution Tests │ Relationship Metrics  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Proposed Generative Methods

**Conditional Tabular GAN (CTGAN)**: Addresses fundamental challenges of applying GANs to tabular data through mode-specific normalization for multimodal continuous variables and conditional generation for imbalanced categories. We adapt CTGAN for imputation by conditioning on observed variables and generating only imputation targets.

**Tabular Variational Autoencoder (TVAE)**: Uses the VAE framework with separate output heads for continuous (Gaussian) and categorical (softmax) variables. More stable training than GANs, often better benchmark performance, natural uncertainty quantification through latent space sampling.

**CTAB-GAN+**: Extends CTGAN with Gaussian mixture + Student's T for long-tailed distributions (critical for wealth data), auxiliary classifier for improved categorical quality, and information loss penalty for relationship preservation.

**Diffusion Models (TabDDPM)**: Emerging state-of-the-art for tabular generation. We will evaluate as the methodology matures.

### 2.3 Multi-Variable Block Imputation

The key innovation is imputing **variable blocks** rather than individual variables:

**Wealth Block**: net_worth, total_assets, total_debt, retirement_accounts, home_equity, etc.

**Consumption Block**: food_spending, housing_costs, healthcare, transportation, etc.

Within each block, generative models learn joint distributions ensuring internal consistency. A record cannot have retirement_accounts > total_assets or interest_income without checking_savings.

### 2.4 Software Engineering

- **Language**: Python 3.10+, PyTorch for deep learning
- **Dependencies**: SDV library (CTGAN/TVAE), scikit-learn, pandas/polars
- **API Design**: Consistent interface across methods
- **Testing**: Unit, integration, and statistical validation tests
- **Documentation**: Sphinx-generated docs with tutorials

---

## 3. Evaluation Framework

### 3.1 Validation Strategy

**Internal Validation**: Holdout tests within single surveys create artificial imputation tasks.

**External Validation**: Compare imputations against actual linked data via Census RDC access. Only aggregate accuracy metrics exported.

**Indirect Validation**: Compare imputed aggregates to IRS SOI, Federal Reserve Financial Accounts, BLS statistics.

### 3.2 Success Targets

| Metric | Baseline (QRF) | Year 3 Target |
|--------|----------------|---------------|
| Mean Quantile Loss | 1.00 | 0.80 |
| Correlation preservation | 0.85 | 0.93 |
| Coverage (90% CI) | 0.82 | 0.90 |
| Internal consistency violations | 5% | <1% |

---

## 4. Timeline and Milestones

**Year 1**: Framework hardening, CTGAN/TVAE integration, internal validation, MicroImpute v1.5 release

**Year 2**: Advanced methods (CTAB-GAN+, diffusion), CEX imputation, Enhanced CPS v2 release, external validation

**Year 3**: Panel preparation tools, documentation, workshops, sustainability plan, MicroImpute v3.0 production release

---

## 5. Broader Impacts

### 5.1 Democratizing Access

MicroImpute expands who can conduct sophisticated policy research by removing restricted data barriers. Benefits graduate students, teaching institutions, international researchers, and state/local policy analysts.

### 5.2 Improving Policy Analysis

Enhanced microdata enables proper means-testing simulation (requires wealth), accurate tax incidence analysis (requires asset income), and comprehensive retirement security analysis.

### 5.3 Training and Open Science

Annual workshops, student participation grants, comprehensive tutorials, and fully open-source code (MIT license) with long-term preservation on Zenodo.

---

# Budget Summary

| Category | Total (3 years) |
|----------|-----------------|
| Senior Personnel (PI + Co-PI) | $125,000 |
| Research Engineer (0.5 FTE) | $225,000 |
| Fringe Benefits (30%) | $105,000 |
| Consultant (Sabelhaus) | $45,000 |
| Travel | $15,000 |
| Participant Support | $15,000 |
| Computing & Software | $36,000 |
| Indirect Costs (10%) | $52,000 |
| **Total Request** | **$578,000** |

---

# References Cited

Hotz, V. J., et al. (2024). The shortcomings of synthetic census microdata. *PNAS*, 121(51).

Xu, L., et al. (2019). Modeling tabular data using conditional GAN. *NeurIPS*.

Zhao, Z., et al. (2023). CTAB-GAN+: Enhancing tabular data synthesis. *Frontiers in Big Data*.

[Additional references in supplementary materials]
