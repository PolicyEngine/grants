# 2. Technical Approach

## 2.1 Architecture Overview

MicroImpute will provide a unified interface across multiple imputation backends, allowing researchers to select methods appropriate for their data characteristics and research requirements. The architecture comprises four layers:

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

## 2.2 Current Foundation: Quantile Random Forests

MicroImpute currently implements Quantile Random Forests (QRF) for imputation. QRF trains an ensemble of decision trees where each leaf stores the empirical distribution of training observations rather than a single prediction. For imputation:

1. Train QRF on source survey (e.g., SCF) predicting target variables from shared covariates
2. For each record in target survey (e.g., CPS), traverse trained trees to identify leaf nodes
3. Aggregate observations across leaves to form conditional distribution
4. Sample from conditional distribution, preserving uncertainty

**Strengths**: Non-parametric, handles non-linear relationships, provides full conditional distributions, computationally efficient.

**Limitations for multi-variable imputation**: Sequential processing—when imputing multiple variables, each is imputed independently. If we impute `total_assets` then `retirement_assets`, the model cannot enforce that `retirement_assets ≤ total_assets`. Records may be internally inconsistent.

## 2.3 Proposed Methods: Generative Multi-Variable Imputation

### 2.3.1 Conditional Tabular GAN (CTGAN)

CTGAN (Xu et al., NeurIPS 2019) addresses fundamental challenges of applying GANs to tabular data:

**Mode-Specific Normalization**: Continuous variables in survey data often have complex, multimodal distributions (e.g., bimodal income with peaks at part-time and full-time wages). CTGAN fits a variational Gaussian mixture model to each continuous column, then normalizes values within each mode. This prevents mode collapse where GANs generate only common values.

**Conditional Generator**: To handle imbalanced categorical variables (e.g., rare asset types), CTGAN conditions the generator on specific category values during training, ensuring the model learns to generate examples across all categories.

**Architecture for Imputation**: We adapt CTGAN for imputation rather than full synthesis:
- **Training**: Learn joint distribution of (observed variables, imputation targets) from source survey
- **Generation**: Condition on observed variables from target survey, generate only imputation targets
- **Output**: Imputed variables are jointly sampled, maintaining internal consistency

### 2.3.2 Tabular Variational Autoencoder (TVAE)

TVAE uses the variational autoencoder framework adapted for mixed-type tabular data:

**Encoder**: Maps input records to latent space distribution parameters (mean, variance)
**Latent Space**: Low-dimensional representation capturing record structure
**Decoder**: Reconstructs records from latent samples, with separate output heads for continuous (Gaussian) and categorical (softmax) variables

**Advantages over CTGAN**: More stable training (no adversarial dynamics), often better performance on benchmark datasets, natural uncertainty quantification through latent space sampling.

**Imputation Approach**:
1. Train TVAE on complete records from source survey
2. For target survey records, encode observed variables to latent distribution
3. Sample from latent space conditioned on observations
4. Decode to generate imputed variables

### 2.3.3 CTAB-GAN+

CTAB-GAN+ (Zhao et al., 2023) extends CTGAN with:

**Gaussian Mixture + Student's T**: Better modeling of long-tailed distributions common in wealth data
**Auxiliary Classifier**: Improves categorical variable quality
**Information Loss Penalty**: Preserves variable relationships during generation

Particularly valuable for SCF imputation where wealth distributions have extreme right tails.

### 2.3.4 Diffusion Models (TabDDPM)

Diffusion models, state-of-the-art for image generation, have recently been adapted for tabular data:

**Forward Process**: Gradually add noise to data over many steps
**Reverse Process**: Learn to denoise, generating samples through iterative refinement
**Multinomial Diffusion**: Handle categorical variables through discrete diffusion

Emerging benchmarks suggest diffusion models may outperform GANs on tabular data quality metrics. We will evaluate TabDDPM and related approaches as they mature.

## 2.4 Multi-Variable Block Imputation

The key innovation is imputing **variable blocks** rather than individual variables. For SCF-to-CPS imputation, we define blocks:

**Wealth Block**: `net_worth`, `total_assets`, `total_debt`, `checking_savings`, `retirement_accounts`, `home_equity`, `vehicle_value`, `other_assets`

**Debt Block**: `mortgage_debt`, `student_loans`, `credit_card_debt`, `auto_loans`, `other_debt`

**Income-from-Assets Block**: `interest_income`, `dividend_income`, `rental_income`, `capital_gains`

Within each block, generative models learn joint distributions ensuring internal consistency. A record cannot have `retirement_accounts > total_assets` or `interest_income` without `checking_savings`. Cross-block consistency is maintained by conditioning later blocks on earlier imputations.

## 2.5 Data Processing Pipeline

### 2.5.1 Preprocessing

**Survey Harmonization**: Standardize variable definitions across surveys. CPS and SCF use different income concepts—we map to consistent definitions, documenting transformations.

**Mixed-Type Encoding**:
- Continuous: Mode-specific normalization (CTGAN approach) or quantile transformation
- Categorical: One-hot encoding with handling for rare categories
- Semi-continuous: Variables with point masses (e.g., zero wealth) encoded as categorical indicator + continuous amount

**Missing Value Handling**: Source surveys contain missing data. We implement:
- Multiple imputation within source before training
- Missing-indicator approach where missingness is informative
- Sensitivity analysis comparing approaches

### 2.5.2 Postprocessing

**Constraint Enforcement**: Ensure imputed values satisfy logical constraints:
- Non-negativity for assets, spending
- Hierarchical consistency (retirement_assets ≤ total_assets)
- Sum constraints (component assets sum to total)

**Distribution Calibration**: Optional reweighting to match known population totals (integration with MicroCalibrate)

**Uncertainty Propagation**: Generate multiple imputations for variance estimation following Rubin's rules

## 2.6 Computational Considerations

**Training**: CTGAN/TVAE training on ~30,000 SCF records requires 2-4 hours on GPU (NVIDIA V100). We will benchmark on cloud infrastructure and provide pre-trained models for common survey combinations.

**Inference**: Generating imputations for 100,000 CPS records requires ~10 minutes per imputation set. Users can generate multiple imputations in parallel.

**Scalability**: Architecture supports distributed training for larger surveys. JAX backend enables TPU utilization for institutions with access.

## 2.7 Software Engineering Approach

**Language**: Python 3.10+, leveraging PyTorch for deep learning components

**Dependencies**: Built on established libraries:
- `sdv` (MIT LIDS): CTGAN/TVAE implementations
- `scikit-learn`: QRF and preprocessing
- `pandas`/`polars`: Data manipulation
- `pyarrow`: Efficient data storage

**API Design**: Consistent interface across methods:
```python
from microimpute import Imputer

imputer = Imputer(method="ctgan")
imputer.fit(source_data, target_vars=["net_worth", "total_assets"])
imputed = imputer.transform(target_data, n_imputations=5)
```

**Testing**: Comprehensive test suite with:
- Unit tests for data processing
- Integration tests for full pipelines
- Statistical tests verifying distributional properties
- Regression tests preventing quality degradation

**Documentation**: Sphinx-generated docs with:
- API reference
- Method comparison guides
- Tutorial notebooks for common use cases
- Contribution guidelines
