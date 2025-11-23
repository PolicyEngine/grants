# Technical Approach

PolicyEngine Cyberinfrastructure is built on three integrated open-source libraries that collectively solve the "end-to-end" problem of modern microsimulation: generating representative data (`microimpute`), aligning it with administrative truth (`microcalibrate`), and executing complex policy logic at scale (`policyengine-core`).

## 1. Synthetic Data Generation: `microimpute`

The foundational bottleneck in policy research is data access. Longitudinal panels (like PSID) are too small for distributional analysis, while large administrative files (IRS, SSA) are restricted. `microimpute` solves this by applying machine learning to fuse these datasets.

### Architecture
*   **Algorithm**: Quantile Regression Forests (QRF). Unlike standard regression which predicts a mean, QRF predicts the entire conditional distribution of a target variable (e.g., future earnings) given a set of covariates.
*   **Implementation**: Built on `scikit-learn` and optimized with `numba` for performance.
*   **Workflow**:
    1.  **Train**: Train QRF models on small, rich longitudinal datasets (e.g., PSID) to learn the *dynamics* of income mobility and demographic transitions.
    2.  **Impute**: Apply these models to large, representative cross-sectional files (e.g., CPS) to impute synthetic longitudinal histories for millions of individuals.
    3.  **Validate**: Automatically compare statistical properties of the synthetic panel (e.g., Gini coefficients of lifetime earnings) against withheld validation sets.

This approach allows us to distribute a "Synthetic Social Security Panel" that contains no PII but statistically replicates the properties of restricted administrative data.

## 2. Differentiable Calibration: `microcalibrate`

Synthetic data must be "calibrated" (reweighted) to match known aggregate totals (e.g., total Social Security outlays, population counts by age/race). Traditional "raking" methods fail with high-dimensional targets.

### Architecture
*   **Algorithm**: Gradient Descent optimization of survey weights. We define a loss function $L(w) = (Sigma) (Target_i - WeightedSum_i(w))^2 + (lambda) \cdot \text{Divergence}(w, w_{base})$, where we minimize the error in aggregate targets while keeping weights close to their base survey values.
*   **Differentiation**: We use **JAX** to automatically differentiate the loss function with respect to the weight vector $w$. This allows us to calibrate millions of weights against thousands of targets efficiently.
*   **Performance**: By leveraging GPU acceleration via JAX, `microcalibrate` can solve calibration problems in seconds that take hours with traditional iterative proportional fitting (IPF).

## 3. Vectorized Microsimulation: `policyengine-core`

The core simulation engine is designed to decouple *policy logic* (the rules) from *computational mechanics*.

### Architecture
*   **Vectorization**: All calculations are vectorized using NumPy. Instead of iterating over households (which is slow in Python), we operate on entire population arrays simultaneously.
    *   *Example*: `tax = income * rate` computes taxes for 100,000 households in a single CPU instruction cycle.
*   **Dependency Graph**: Policy parameters and variables are organized into a directed acyclic graph (DAG). The engine automatically determines the optimal compute order and caches intermediate results.
*   **Scalability**:
    *   **Single Node**: Can simulate the US tax-benefit system for the Current Population Survey (200k records) in <500ms.
    *   **Distributed**: For massive sensitivity analyses (e.g., 1M+ variations), we use **Ray** to distribute simulation tasks across a cluster of cloud instances.

## 4. Software Engineering & Quality Assurance

*   **Continuous Integration**: GitHub Actions pipeline runs 8,600+ unit tests on every commit.
*   **Continuous Delivery**: Packages are automatically published to PyPI (`pip install policyengine-us`).
*   **Documentation**: All parameters are documented with citations to the US Code (Title 26/42) or CFR, automatically linked in the API reference.
