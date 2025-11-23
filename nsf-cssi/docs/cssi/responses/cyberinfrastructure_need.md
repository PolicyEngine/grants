# Cyberinfrastructure Need

## The Crisis in Economic Policy Modeling

Economic policy research faces a critical cyberinfrastructure gap: the most impactful models for analyzing tax and benefit reforms are locked behind proprietary walls or restricted data access agreements. This "closed ecosystem" paradigm severely limits scientific reproducibility, restricts the diversity of the research community, and bottlenecks the speed of evidence-based policymaking.

### 1. The "Black Box" Problem
Major policy analyses--from Social Security solvency projections to Child Tax Credit impact assessments--are currently conducted using legacy, closed-source microsimulation models (e.g., the Urban Institute's **DynaSim**, the Congressional Budget Office's **CBOLT**, and the Social Security Administration's **MINT**). This centralization creates a fundamental barrier to scientific progress.

First, the **lack of reproducibility** inherent in closed-source tools violates the core tenet of scientific inquiry; outside researchers cannot inspect source code or replicate findings. Second, **institutional gatekeeping** restricts access to these models to government agencies or well-funded think tanks, effectively excluding academic researchers, students, and smaller non-profits. Finally, **opaque methodologies** mean that critical assumptions about behavioral responses, macro-economic feedbacks, and demographic transitions are often hard-coded and undocumented, preventing the sensitivity analysis required for robust scholarship.

### 2. From Data to Decisions: A Proven Foundation
PolicyEngine is not starting from scratch. We have already built the "execution layer" of this cyberinfrastructure: a rigorous, open-source microsimulation engine that models the US tax and benefit system with unprecedented detail. Our engine currently captures federal and state income tax rules (validated against NBER's **TAXSIM** via a formal MOU), as well as major benefit programs including SNAP, SSI, Medicaid, CHIP, ACA subsidies, and WIC.

With funding from the Pritzker Children's Initiative and others, we are expanding detailed modeling of TANF and childcare subsidies (CCDF) to all 50 states. We also model local programs like LIHEAP and county-level benefits in select geographies. This engine already powers a live ecosystem of API customers--including **MyFriendBen**, **Amplifi**, **Mirza**, **Student Basic Needs Coalition**, and **Starlight**--who use our infrastructure to help households access benefits. We also have an MOU with the **Atlanta Fed** to validate our results against their Policy Rules Database.

The missing piece is the *longitudinal data infrastructure* to feed this engine for lifetime analysis. Currently, we can tell you what a family qualifies for *today*, but not how a policy change affects their *lifetime* solvency. That is the gap this proposal fills.

### 3. Computational Antiquity
Many existing legacy models run on mainframe-era architectures (SAS, Fortran) that cannot scale to modern cloud environments. This technological debt creates **slow feedback loops**, where simulating complex reforms can take hours or days, preventing real-time iteration and optimization. Furthermore, these systems generally lack the **ability to scale** via parallel processing, making it computationally prohibitive to run the millions of sensitivity tests required for robust uncertainty quantification in a reasonable timeframe.

## The Solution: PolicyEngine Cyberinfrastructure

PolicyEngine proposes a paradigm shift: a **cloud-native, open-source cyberinfrastructure** that democratizes access to "gold standard" modeling capabilities.

### A. Democratizing Longitudinal Analysis (The Social Security Use Case)
We will build the **first open-source dynamic microsimulation model for Social Security**, replacing the need for proprietary tools like DynaSim. Our approach integrates **synthetic data generation** using Quantile Regression Forests to impute realistic lifetime earnings trajectories onto public data; **massive-scale calibration** using gradient descent to align synthetic populations with thousands of administrative targets; and **vectorized simulation** to execute lifetime benefit rules in sub-second timeframes.

This infrastructure will allow *any* researcher to reproduce official government scores, test alternative reform proposals, and publish fully reproducible findings.

### B. Infrastructure for the Broader Community
This project is not just about Social Security; it builds the **computational plumbing** for the next generation of economic research. We are developing **`microimpute`**, a generalized framework for machine learning-based data imputation usable for health, education, and climate research; and **`microcalibrate`**, a high-performance calibration engine that replaces manual "reweighting" with differentiable optimization.

These tools rely on **PolicyEngine Core**, a standardized, vectorized rules engine that decouples policy logic from simulation mechanics, allowing domain experts to contribute code without needing to be software engineers. By transitioning the field from "artisanal," closed models to scalable, open cyberinfrastructure, PolicyEngine will unleash a wave of innovation in public policy research, enabling scientists to tackle complex, dynamic problems--from climate adaptation to intergenerational mobility--with tools that are transparent, reproducible, and free to use.