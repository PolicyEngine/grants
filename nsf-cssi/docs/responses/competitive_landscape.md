# Competitive Landscape and Differentiation

## Existing Tools

### MICE (Multiple Imputation by Chained Equations)

The most widely used imputation approach, available in:
- **R**: [`mice` package](https://github.com/amices/mice) (van Buuren, definitive implementation)
- **Python**: [`miceforest`](https://github.com/AnotherSamWilson/miceforest) (LightGBM backend), `statsmodels.MICE`, `sklearn.IterativeImputer`

**How it works**: Imputes each variable sequentially using regression on other variables, cycling until convergence. Typically 5-10 iterations.

**Limitations for our use case**:
- Sequential imputation—same fundamental limitation as QRF
- Cannot enforce joint constraints across variables
- No built-in handling of survey weights
- Designed for missing data imputation, not cross-survey fusion
- No integration with calibration/reweighting

### Amelia II

R package using bootstrap-based EMB (Expectation-Maximization with Bootstrapping).

**Limitations**: Assumes multivariate normal distribution—problematic for wealth data with long tails and point masses at zero.

### MissForest

Random forest imputation (single imputation, not multiple).

**Limitations**: No uncertainty quantification, sequential variable processing.

### SDV (Synthetic Data Vault)

MIT project providing CTGAN, TVAE, and related methods. **We build on this**.

**Limitations**: Designed for full synthesis (generating fake records), not conditional imputation. Requires adaptation for our use case.

### StatMatch (R)

Statistical matching / hot-deck imputation.

**Limitations**: Only preserves relationships with matching variables; cannot generate values outside donor pool.

---

## MicroImpute Differentiation

| Feature | MICE | Amelia | MissForest | SDV | **MicroImpute** |
|---------|------|--------|------------|-----|-----------------|
| Multi-variable blocks | No | Yes* | No | Yes | **Yes** |
| Handles long tails | Yes | No | Yes | Partial | **Yes (CTAB-GAN+)** |
| Survey weights | No | No | No | No | **Yes** |
| Cross-survey fusion | No | No | No | No | **Yes** |
| Calibration integration | No | No | No | No | **Yes** |
| Restricted data validation | No | No | No | No | **Yes** |
| Simple economist API | Partial | Yes | No | No | **Yes** |

*Amelia imputes jointly but assumes normality

### Key Differentiators

**1. Multi-Variable Block Imputation**

Unlike MICE's variable-by-variable approach, MicroImpute generates coherent variable bundles. When imputing SCF wealth onto CPS:
- MICE: Impute net_worth, then total_assets, then retirement_accounts... no guarantee of consistency
- MicroImpute: Generate all wealth variables jointly with internal consistency enforced

**2. MicroCalibrate Integration**

After imputation, survey weights may no longer calibrate to known population totals. Example:
- Original CPS weights sum to correct total population
- After imputing SCF wealth, weighted total wealth may not match Federal Reserve Financial Accounts

MicroImpute + MicroCalibrate workflow:
1. **Impute** SCF variables onto CPS records
2. **Calibrate** weights to match Fed aggregate wealth totals
3. **Result**: Enhanced dataset with consistent margins

No competing tool offers this integration. We use gradient descent optimization in MicroCalibrate to find weights minimizing distance from original weights while hitting calibration targets.

**3. Survey-Specific Design**

- Proper handling of survey weights throughout imputation
- Complex survey variance estimation
- Designed for federal survey data structures (CPS, SCF, CEX, SIPP)

**4. Validated Against Ground Truth**

Via Census RDC, we benchmark against actual linked data—validation no other tool provides. Published benchmarks become community resource.

---

## Why Not Just Use MICE?

Researchers could implement cross-survey imputation with existing MICE tools, but:

1. **No guidance on variable ordering**—different orderings yield different results
2. **No constraint enforcement**—imputed assets may exceed imputed net worth
3. **No weight handling**—complex survey designs ignored
4. **No calibration**—imputed aggregates may be implausible
5. **No validation**—no benchmarks against restricted data

MicroImpute provides the **complete workflow** from raw surveys to validated, calibrated enhanced microdata.

---

## Integration Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     MicroImpute                              │
│  CTGAN │ TVAE │ QRF │ MICE-style │ Statistical Matching     │
└───────────────────────┬─────────────────────────────────────┘
                        │ Imputed variables
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    MicroCalibrate                            │
│  Gradient descent reweighting to population totals          │
│  - Census population counts                                  │
│  - IRS income aggregates                                     │
│  - Fed wealth totals                                         │
└───────────────────────┬─────────────────────────────────────┘
                        │ Calibrated weights
                        ▼
┌─────────────────────────────────────────────────────────────┐
│              Enhanced, Calibrated Microdata                  │
│  Ready for policy microsimulation (PolicyEngine)            │
└─────────────────────────────────────────────────────────────┘
```

This integrated pipeline is unique to PolicyEngine's ecosystem and a key broader impact—we're not just improving imputation, we're building research infrastructure.
