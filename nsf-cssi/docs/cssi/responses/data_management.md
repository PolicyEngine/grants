# Data Infrastructure and Management

## Overview

PolicyEngine's data infrastructure represents a fundamental innovation in policy microsimulation: the first fully open, reproducible data pipeline that achieves accuracy comparable to restricted administrative data. Our Enhanced Current Population Survey (Enhanced CPS) methodology has proven that synthetic data combined with modern machine learning and calibration can match gold-standard models that rely on confidential IRS files. This section describes our comprehensive data architecture, validation framework, and plans to extend these capabilities to support diverse research communities.

**Core Innovation**: We transform publicly available survey data into research-grade microdata through a two-stage process: (1) machine learning-based imputation using quantile regression forests, and (2) gradient descent calibration to thousands of administrative targets. This approach enables full reproducibility while maintaining distributional accuracy across income sources, demographic groups, and policy outcomes.

## Data Sources and Integration

### Survey Microdata

Our primary data infrastructure builds on harmonized survey datasets that provide comprehensive demographic and economic coverage:

**Current Population Survey Annual Social and Economic Supplement (CPS ASEC)**:
- Primary cross-sectional data source for US microsimulation
- Annual sample of ~150,000 individuals in ~75,000 households
- Comprehensive income data across wages, self-employment, transfers, and investment income
- Detailed demographics including age, education, geography, family structure
- Public domain availability ensures full reproducibility

**Panel Study of Income Dynamics (PSID)**:
- Longest-running US household panel survey (since 1968)
- Essential for longitudinal earnings dynamics and lifecycle modeling
- Training data for quantile regression forests that impute lifetime earnings trajectories
- Enables dynamic microsimulation for Social Security, retirement, and intergenerational policy analysis
- Publicly accessible with restricted-use agreements

**Survey of Income and Program Participation (SIPP)**:
- Short-term panel structure (3-4 years) with monthly income detail
- Detailed program participation data for SNAP, SSI, Medicaid validation
- Wealth modules supplement CPS asset data
- Serves as additional training source for ML imputation

**International Survey Harmonization**:
- UK: Family Resources Survey (FRS), Living Costs and Food Survey (LCFS), Wealth and Assets Survey (WAS)
- Canada: Survey of Labour and Income Dynamics (SLID), Survey of Household Spending (SHS)
- Australia: Household, Income and Labour Dynamics in Australia (HILDA)
- Cross-national comparative analysis through Luxembourg Income Study (LIS) and OECD databases

### Administrative Data Integration

While individual-level administrative data remains restricted, we leverage published aggregate statistics for calibration and validation:

**IRS Statistics of Income (SOI)**:
- Tax return aggregates by income level, filing status, state
- Detailed breakdowns of income sources, deductions, credits
- Primary calibration targets for tax microsimulation
- Over 4,000 calibration targets from SOI alone

**Social Security Administration (SSA)**:
- Annual Statistical Supplement with benefit distributions by type, age, state
- OASDI Trustees Reports with long-run financial projections
- Earnings distributions for covered workers
- Beneficiary counts and average benefit amounts
- Essential for Social Security microsimulation validation

**Census Bureau**:
- American Community Survey (ACS) with 3+ million annual respondents
- Population estimates and projections by age, sex, race, geography
- Small Area Income and Poverty Estimates (SAIPE)
- Geographic micro-targeting capabilities

**Bureau of Labor Statistics (BLS) and Bureau of Economic Analysis (BEA)**:
- Real-time economic indicators via FRED API
- National accounts aggregates for top-down validation
- Consumer Price Index for inflation adjustments
- Employment statistics for labor market calibration

### Real-Time Data Integration

Our infrastructure supports automated ingestion of policy and economic updates:

**Legislative and Regulatory Tracking**:
- Automated parsing of tax law changes from IRS publications
- State legislative database integration for sub-national policy variation
- Benefit program rule updates from federal and state agencies
- Version control of policy parameters tied to effective dates

**Economic Indicators**:
- Federal Reserve Economic Data (FRED) API integration
- Automatic quarterly updates of wage indices, inflation, interest rates
- Market data feeds for wealth and investment modeling
- Demographic projections from Census and SSA

## Enhanced CPS: Proven Synthetic Data Innovation

### The Reproducibility Challenge

All major US tax-benefit models historically relied on the IRS Public Use File (PUF), which cannot be publicly shared due to confidentiality restrictions. This created a reproducibility crisis: researchers could not verify published analyses, test alternative methodologies, or independently evaluate policy proposals. Even well-funded institutions required special data access agreements, excluding academic researchers, civil society organizations, and international scholars.

**PolicyEngine solved this problem**. Our Enhanced CPS is the only publicly available microdata producing tax-benefit estimates that match restricted-access models. Congressional offices use PolicyEngine for actual legislative analysis. Academic researchers cite our estimates in peer-reviewed publications. International researchers replicate our methodology for their countries. This proves synthetic data can achieve research-grade accuracy.

### Two-Stage Methodology

**Stage 1: Machine Learning Imputation**

We employ quantile regression forests (QRF) to impute missing or underreported income components onto the CPS:

*Quantile Regression Forests* predict the full conditional distribution of income variables, not just means. This preserves heterogeneity within demographic cells and captures realistic variation in income sources across the distribution. For each income type (self-employment, interest, dividends, retirement income), we:
1. Train QRF models on data sources with superior measurement (e.g., SIPP for transfer income, Survey of Consumer Finances for capital income)
2. Predict conditional quantiles on the CPS using shared demographic and economic predictors
3. Sample from predicted quantile distributions to generate synthetic values
4. Preserve covariance structure through copula methods

The CPS is cloned into two copies: one filling missing variables, one replacing existing with imputed. These concatenate to create the Extended CPS with doubled sample size (~150,000 households) and comprehensive income detail.

**Stage 2: Gradient Descent Calibration**

We reweight the Extended CPS to match over 7,000 administrative targets simultaneously using gradient descent optimization:

*Calibration targets* come from IRS SOI, Census, CBO, and other authoritative sources, spanning:
- Income distributions by source and filing status
- Tax liability and credits by income level
- State-level aggregates for sub-national accuracy
- Demographic cross-tabs (age × income, education × state)
- Benefit program participation rates and spending

*Optimization framework* employs PyTorch with Adam optimizer:
```
minimize: Σ[(target - weighted_estimate)² / target²]
subject to: weights > 0
regularization: dropout + log-transform prevents overfitting
```

The algorithm iterates until convergence, typically 5,000-10,000 epochs. Final weights range from 0.1 to 10, maintaining reasonable variance while achieving tight target matching.

### Validation Results

**Revenue Estimates**: Enhanced CPS tax revenue matches Joint Committee on Taxation estimates within 2% for major provisions (EITC expansion, Child Tax Credit, top marginal rate changes). This is the gold standard for US tax modeling.

**Distributional Analysis**: Our quintile-level burden tables match Tax Policy Center's published analyses, which use the restricted PUF. Poverty and inequality metrics align with Census official statistics.

**Geographic Accuracy**: State-level revenue estimates correlate >0.95 with actual IRS collections. Congressional district estimates enable precise constituency impact analysis.

**External Validation**: Over 50 academic papers, 100+ media citations, and adoption by multiple legislative offices demonstrate real-world credibility.

### Computational Infrastructure

**Tools Developed**:
- `microimpute`: Open-source ML imputation library supporting QRF, random forests, deep learning, and traditional methods
- `microcalibrate`: Gradient descent reweighting with PyTorch backend, supporting GPU acceleration and distributed optimization
- Full pipeline available at github.com/PolicyEngine/policyengine-us-data

**Performance**:
- Enhanced CPS generation: 6-8 hours on standard compute (32 cores, 128GB RAM)
- Incremental updates: 1-2 hours when only calibration targets change
- Fully automated via GitHub Actions, ensuring reproducibility

**Data Versioning**: Each Enhanced CPS version is tagged with:
- Source survey vintage
- Calibration target snapshot
- Imputation model specifications
- Full lineage of transformations
- Validation metrics dashboard

## Dynamic Microsimulation Infrastructure

### Longitudinal Data Innovation

Our Social Security dynamic microsimulation model extends the Enhanced CPS methodology from cross-sectional to longitudinal analysis. This represents the first open-source model comparable to proprietary tools like Urban Institute's DYNASIM and CBO's CBOLT.

**The Challenge**: Social Security benefits depend on lifetime earnings histories (up to 35 years), but cross-sectional surveys only capture current year. Panel surveys like PSID have longitudinal data but sample sizes 20× smaller than CPS.

**Our Solution**: Statistical matching combines CPS sample size with PSID dynamics:
1. Train quantile regression forests on PSID to learn earnings transition patterns by age, education, sex, race
2. Impute full earnings histories (age 18-retirement) onto Enhanced CPS respondents
3. Model demographic transitions (marriage, divorce, disability, mortality) using hazard models
4. Age the panel forward year-by-year with continued calibration to SSA projections
5. Calculate benefits using PolicyEngine's comprehensive Social Security rules engine

### Quantile Regression for Panel Construction

Traditional statistical matching uses conditional means, losing distributional detail. We employ quantile regression forests specifically to preserve:

**Earnings Mobility Patterns**:
- Persistence at bottom quartile vs. top quartile (asymmetric mobility)
- Age-earnings profiles varying by education and cohort
- Variance decomposition into permanent vs. transitory components
- Realistic representation of high-income earner trajectories

**Training and Validation**:
- Train on PSID longitudinal records (1968-present, 18,000+ persons)
- Validate against PSID hold-out sample (20% test set)
- Compare predicted transition matrices to observed PSID dynamics
- Match published studies of earnings mobility and lifecycle profiles

**Imputation to CPS**:
- For each CPS respondent, predict conditional earnings distribution at each future age
- Sample from predicted distributions to generate synthetic earnings path
- Multiple imputation (m=5-10) to propagate uncertainty
- Maintain family structure and correlations across household members

### Multi-Target Calibration

The synthetic panel is calibrated to SSA administrative targets:

**Cross-Sectional Targets** (annual):
- Covered earnings distributions by age, sex
- Beneficiary counts by type (retirement, disability, survivors)
- Average benefit amounts by claiming age
- State-level aggregates

**Longitudinal Targets**:
- Age-earnings profiles by birth cohort
- Career length distributions
- Benefit replacement rates by lifetime earnings percentile
- Widow/widower benefit patterns

**Fiscal Targets**:
- Total OASDI benefit payments
- Trust fund income and outgo
- Long-run actuarial balance

Calibration uses the same gradient descent framework as Enhanced CPS, now with time-varying weights that preserve both cross-sectional and longitudinal accuracy.

### Demographic Modeling

Critical lifecycle transitions affect Social Security eligibility and benefits:

**Marriage and Divorce**:
- Hazard models by age, education, earnings
- Spousal benefit eligibility
- Divorced spouse benefits after 10-year marriages

**Disability Onset**:
- Disability Insurance (DI) claiming by age, occupation, health
- Conversion to retirement benefits at full retirement age
- Work history requirements

**Mortality**:
- Differential mortality by socioeconomic status
- Survivor benefit eligibility
- Life expectancy assumptions aligned with SSA actuaries

All transition models estimated from survey data (SIPP, HRS) and validated against administrative statistics.

## Privacy and Security Framework

### Differential Privacy Implementation

As our infrastructure scales to sensitive datasets, we implement formal privacy guarantees:

**Differential Privacy for Aggregations**:
- Add calibrated noise to query results ensuring (ε, δ)-differential privacy
- Privacy budget allocation across researchers and queries
- Automatic privacy accounting and quota enforcement
- Trade-off tuning between privacy level and utility

**Synthetic Data with Privacy Guarantees**:
- Generative models (GANs, VAEs) trained with differential privacy
- Public release of synthetic microdata with provable privacy bounds
- Validation that synthetic data maintains statistical utility for policy analysis

### Secure Multi-Party Computation

For federated analysis across institutions without data sharing:

**Secure Enclaves**:
- Hardware-based trusted execution environments (Intel SGX, ARM TrustZone)
- Computation on encrypted data
- Audit logs of all data access

**Federated Learning**:
- Distributed model training across institutions
- Only model gradients shared, not individual records
- Differential privacy on gradient updates
- Enable multi-country comparative analysis respecting national data sovereignty

### Access Control and Authentication

**Role-Based Permissions**:
- Public access: Aggregated results and public datasets
- Researcher access: Enhanced microdata with usage agreements
- Restricted access: Sensitive administrative data linkages
- Administrative access: Full pipeline control

**API Key Management**:
- OAuth 2.0 authentication for programmatic access
- Rate limiting and quota enforcement
- Comprehensive audit trails
- Automatic key rotation and revocation

### Compliance Framework

**Regulatory Adherence**:
- GDPR compliance for international data (right to be forgotten, data minimization)
- HIPAA readiness for health-linked policy analysis
- FERPA compliance for education data linkages
- IRB protocols for research use

**Data Usage Agreements**:
- Clear terms of service for API and data access
- Citation requirements ensuring transparency
- Prohibited uses (re-identification attempts, discriminatory modeling)
- Regular audits of high-volume users

## Data Pipeline Architecture

### End-to-End Workflow

Our data pipeline follows a modular architecture enabling reproducible, version-controlled dataset construction:

**1. Data Acquisition**
```
IPUMS/Census → Raw CPS download
PSID → Panel data extraction  
IRS SOI → Calibration targets
```
- Automated monthly checks for new data releases
- SHA-256 checksums verify data integrity
- Metadata extraction (vintage, sample design, weights)

**2. Harmonization**
```
Raw survey data → Standardized variable names and codes
Multiple vintages → Consistent definitions across years
```
- Mapping files in version control document all transformations
- Unit tests validate consistency across survey years
- Documentation generated automatically from metadata

**3. Imputation (microimpute)**
```
Extended CPS ← CPS + ML imputation from SIPP/SCF/ACS
```
- Quantile regression forests via scikit-garden backend
- GPU acceleration for large-scale training (PyTorch)
- Cross-validation and hyperparameter tuning via Optuna
- Model artifact versioning (MLflow) for reproducibility

**4. Calibration (microcalibrate)**
```
Enhanced CPS ← Extended CPS + gradient descent reweighting
```
- PyTorch autodifferentiation for efficient optimization
- Distributed training across multiple GPUs
- Early stopping based on validation target RMSE
- Comprehensive diagnostics (weight distributions, target fit, outlier analysis)

**5. Validation**
```
Enhanced CPS → Automated validation suite
```
- Regression tests against previous versions
- Benchmark comparisons to external models (TPC, PWBM)
- Distributional diagnostics (percentiles, Gini, poverty rates)
- Geographic validation (state-level revenue matches)

**6. Publication**
```
Enhanced CPS → Cloud storage (S3/GCS) with versioned access
```
- Parquet format with columnar compression (10:1 ratio)
- Metadata in JSON-LD for discoverability
- DOI assignment for citation
- API endpoints for programmatic access

### Storage and Formats

**Columnar Storage (Parquet)**:
- 10-50× compression vs. CSV
- Efficient column selection (read only needed variables)
- Predicate pushdown (filter data at storage layer)
- Schema evolution (add columns without rewriting)

**Hierarchical Data Format (HDF5)**:
- Array-oriented storage for panel data
- Chunked I/O for out-of-core computation
- Compression and checksums built-in
- Parallel I/O via MPI

**Database Systems**:
- PostgreSQL for relational queries and aggregations
- SQLite for single-file distribution
- TimescaleDB for time-series policy parameters
- DuckDB for in-memory analytical queries

**Data Versioning**:
- DVC (Data Version Control) integrated with git
- Content-addressable storage (immutable datasets)
- Reproducible pipelines with directed acyclic graphs
- Provenance tracking from raw surveys to final microdata

### Quality Assurance

**Automated Testing**:
- Unit tests for every transformation function
- Integration tests for full pipeline
- Property-based testing (Hypothesis) for survey data invariants
- Continuous integration via GitHub Actions

**Statistical Validation**:
- Distribution tests (Kolmogorov-Smirnov, chi-square)
- Regression against benchmark models
- Outlier detection and investigation
- Cross-survey consistency checks

**Performance Monitoring**:
- Pipeline execution time tracking
- Memory profiling to identify bottlenecks
- Computational cost estimation for scaling
- Alert system for failures or degradation

## International Data Infrastructure

### Country Coverage

PolicyEngine operates microsimulation models for 8 countries, demonstrating methodology portability:

**Operational Models**:
- United States (CPS-based Enhanced microdata)
- United Kingdom (FRS + LCFS + WAS)
- Canada (SLID + SHS)
- Australia (HILDA)
- Ireland (SILC)
- New Zealand (HES)
- Nigeria (NLSS)
- Singapore (HES)

Each country implementation follows the same methodological framework: survey harmonization → ML imputation → calibration to administrative targets → validation.

### Cross-National Harmonization

**Luxembourg Income Study (LIS)**:
- Standardized variable definitions across 50+ countries
- Harmonized income concepts and equivalence scales
- Facilitates international comparative analysis
- PolicyEngine extends LIS with tax-benefit calculations

**OECD Database Integration**:
- Tax-benefit policy parameters for 38 OECD countries
- Institutional detail on benefit programs
- Expert validation of policy rules
- Enables counterfactual analysis ("What if US adopted Norwegian parental leave?")

**Methodological Consistency**:
- Same tools (microimpute, microcalibrate) across countries
- Shared codebase with country-specific modules
- Cross-validation using LIS-based poverty and inequality benchmarks
- Documentation standards ensure comparability

### International Collaboration

**Data Sharing Protocols**:
- Federated computation respecting national data sovereignty
- No individual-level data crosses borders
- Aggregate results and model specifications shared
- Enables multi-country studies without legal barriers

**Capacity Building**:
- Open-source tools reduce barrier to entry for new countries
- Documentation and training materials in multiple languages
- Partnership model with national statistics offices
- Academic collaborations for model development and validation

## Computation and Scalability

### Cloud-Native Architecture

**Auto-Scaling Infrastructure**:
- Kubernetes orchestration for containerized workloads
- Horizontal scaling based on API request volume
- Spot instance management for cost-effective batch processing
- Multi-region deployment for latency optimization

**Serverless Components**:
- AWS Lambda / Google Cloud Functions for event-driven tasks
- Automatic data pipeline triggers on new survey releases
- Pay-per-use model scales to zero during idle periods
- Managed services reduce operational overhead

### Distributed Computing

**Parallel Data Processing**:
- Apache Spark for large-scale survey harmonization
- Dask for distributed Python computation
- Ray for ML training on multi-node clusters
- MPI for HPC simulations requiring tight coupling

**GPU Acceleration**:
- PyTorch GPU backends for ML imputation
- CUDA kernels for microsimulation hot paths
- Multi-GPU training via Distributed Data Parallel
- Cost-benefit analysis guides GPU vs. CPU allocation

### Optimization Strategies

**I/O Optimization**:
- Lazy evaluation minimizes data loading
- Predicate pushdown filters data at storage layer
- Column pruning reads only needed variables
- Prefetching overlaps I/O with computation

**Memory Management**:
- Out-of-core algorithms for datasets exceeding RAM
- Chunked processing with configurable memory budgets
- Sparse matrix representations where applicable
- Garbage collection tuning for Python workloads

**Caching**:
- Redis for frequently accessed API results
- CDN distribution of static datasets
- Memoization of expensive policy calculations
- Invalidation strategies on data/policy updates

## Data Governance and Accessibility

### Open Data by Default

**Public Survey Sources**:
- All primary data from public surveys (CPS, ACS, PSID, SIPP)
- No paywalls or access restrictions
- Full download capability for researchers
- Annual updates synchronized with survey releases

**Open-Source Pipeline**:
- Complete source code on GitHub (MIT license)
- Reproducible builds via containerization (Docker)
- Continuous integration ensures reproducibility
- Community contributions via pull requests

**Documentation**:
- Comprehensive data dictionaries for all variables
- Transformation documentation with mathematical specifications
- Validation reports published with each dataset release
- Video tutorials and Jupyter notebook examples

### API Access

**RESTful Endpoints**:
- Household calculation API for individual policy impacts
- Population simulation API for aggregate distributional analysis
- Parameter API for policy rule queries
- Metadata API for dataset discovery

**Python SDK**:
- `policyengine` package installable via pip
- Pandas DataFrame integration
- Jupyter notebook support with rich visualizations
- Dask integration for distributed computation

**R Package**:
- Native R interface for econometric workflows
- tidyverse compatibility
- Integration with survey package for complex survey designs
- Parallel processing via future/furrr

### Researcher Support

**Jupyter Lab Integration**:
- Cloud-hosted notebooks for zero-install access
- Pre-configured environments with all dependencies
- Compute resources for large-scale analysis
- Collaboration features for team research

**Educational Resources**:
- Webinar series on methodology and usage
- Office hours for technical support
- Example analyses replicating published papers
- Dataset-specific user guides

**Citation and Impact Tracking**:
- DOIs for dataset versions ensuring citability
- Automatic tracking of academic publications using PolicyEngine
- Annual impact reports documenting research enabled
- User testimonials and case studies

## Future Extensions

### Administrative Data Linkages

**Secure Linkage Infrastructure**:
- Privacy-preserving record linkage protocols
- Trusted third-party linkage services
- Differential privacy on linked datasets
- Validation studies comparing linked vs. synthetic data

**Priority Linkages**:
- IRS tax return data for gold-standard validation
- SSA earnings histories for true longitudinal analysis
- State benefit program administrative records
- Education records for intergenerational mobility studies

### Real-Time Data Integration

**Streaming Infrastructure**:
- Apache Kafka for real-time data ingestion
- Continuous calibration as new data arrives
- Nowcasting policy impacts using up-to-date micro data
- Integration with live economic indicators

**Automated Policy Tracking**:
- Natural language processing to extract policy changes from legislation
- Automatic parameter updates in microsimulation models
- Alert system for researchers on relevant policy changes
- Historical database of all policy parameters and effective dates

### Machine Learning Enhancements

**Deep Learning Imputation**:
- Generative adversarial networks (GANs) for synthetic data
- Variational autoencoders (VAEs) for dimensionality reduction
- Transformer models for sequence prediction (earnings trajectories)
- Transfer learning across countries and time periods

**Causal Inference Integration**:
- Double machine learning for policy evaluation
- Synthetic control methods for geographic comparisons
- Heterogeneous treatment effect estimation
- Integration with EconML and DoWhy libraries

### International Expansion

**Expansion Targets**:
- Priority: India, Brazil, South Africa (large emerging economies)
- Europe: France, Germany, Spain (existing EUROMOD countries)
- Asia-Pacific: Japan, South Korea (high-income with data availability)
- Latin America: Mexico, Chile (regional leadership)

**Collaboration Model**:
- Partner with national statistics offices for data access
- Academic partnerships for policy expertise and validation
- Open-source contribution model for country-specific rules
- Capacity building and training programs

## Conclusion

PolicyEngine's data infrastructure represents a paradigm shift in policy microsimulation: from proprietary, restricted-access models to fully open, reproducible research infrastructure. Our Enhanced CPS proves that synthetic data can achieve gold-standard accuracy. Our tools (microimpute, microcalibrate) are production-tested and internationally deployed. Our dynamic microsimulation pipeline extends these capabilities to longitudinal analysis.

This NSF CSSI award will enable us to scale this infrastructure to serve diverse research communities, integrate advanced privacy-preserving technologies, expand international coverage, and continue pushing the frontier of open computational social science. The foundation is proven; this funding will amplify impact and ensure long-term sustainability.
