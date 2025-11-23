# Cyberinfrastructure Need

## The Crisis in Economic Policy Modeling

Economic policy research faces a critical cyberinfrastructure gap: the most impactful models for analyzing tax and benefit reforms are locked behind proprietary walls or restricted data access agreements. This "closed ecosystem" paradigm severely limits scientific reproducibility, restricts the diversity of the research community, and bottlenecks the speed of evidence-based policymaking.

### 1. The "Black Box" Problem
Major policy analyses--from Social Security solvency projections to Child Tax Credit impact assessments--are currently conducted using legacy, closed-source microsimulation models (e.g., the Urban Institute's **DynaSim**, the Congressional Budget Office's **CBOLT**, and the Social Security Administration's **MINT**). 
-   **Lack of Reproducibility**: Outside researchers cannot inspect the source code or replicate findings, violating the core tenet of scientific inquiry.
-   **Institutional Gatekeeping**: Access to these models is restricted to government agencies or well-funded think tanks, effectively excluding academic researchers, students, and smaller non-profits.
-   **Opaque Methodologies**: Critical assumptions about behavioral responses, macro-economic feedbacks, and demographic transitions are often hard-coded and undocumented, preventing sensitivity analysis.

### 2. The Data Access Bottleneck
High-quality microsimulation requires individual-level data on income, demographics, and program participation. However, the "gold standard" administrative data (IRS tax records, SSA earnings histories) is legally restricted.
-   **Public Data Limitations**: Publicly available datasets like the Current Population Survey (CPS) suffer from measurement error (e.g., underreporting of benefits) and lack longitudinal history (crucial for retirement modeling).
-   **Imputation Silos**: Individual research groups build ad-hoc, one-off imputation models to fix these data gaps, leading to duplicated effort and inconsistent baselines across the field.

### 3. Computational Antiquity
Many existing legacy models run on mainframe-era architectures (SAS, Fortran) that cannot scale to modern cloud environments.
-   **Slow Feedback Loops**: Simulating complex reforms can take hours or days, preventing real-time iteration and optimization.
-   **Inability to Scale**: These systems cannot leverage parallel processing to run the millions of sensitivity tests required for robust uncertainty quantification.

## The Solution: PolicyEngine Cyberinfrastructure

PolicyEngine proposes a paradigm shift: a **cloud-native, open-source cyberinfrastructure** that democratizes access to "gold standard" modeling capabilities.

### A. Democratizing Longitudinal Analysis (The Social Security Use Case)
We will build the **first open-source dynamic microsimulation model for Social Security**, replacing the need for proprietary tools like DynaSim. By integrating:
1.  **Synthetic Data Generation**: Using Quantile Regression Forests to impute realistic lifetime earnings trajectories onto public data.
2.  **Massive-Scale Calibration**: Using gradient descent to align synthetic populations with thousands of administrative targets.
3.  **Vectorized Simulation**: Executing lifetime benefit rules in sub-second timeframes.

This infrastructure will allow *any* researcher to reproduce official government scores, test alternative reform proposals, and publish fully reproducible findings.

### B. Infrastructure for the Broader Community
This project is not just about Social Security; it builds the **computational plumbing** for the next generation of economic research:
-   **`microimpute`**: A generalized framework for machine learning-based data imputation, usable for health, education, and climate research.
-   **`microcalibrate`**: A high-performance calibration engine that replaces manual "reweighting" with differentiable optimization.
-   **PolicyEngine Core**: A standardized, vectorized rules engine that decouples policy logic from simulation mechanics, allowing domain experts to contribute code without needing to be software engineers.

By transitioning the field from "artisanal," closed models to scalable, open cyberinfrastructure, PolicyEngine will unleash a wave of innovation in public policy research, enabling scientists to tackle complex, dynamic problems--from climate adaptation to intergenerational mobility--with tools that are transparent, reproducible, and free to use.
