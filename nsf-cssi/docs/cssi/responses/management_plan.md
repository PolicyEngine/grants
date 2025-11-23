# Management Plan

## Management Structure

The PolicyEngine Cyberinfrastructure project requires a robust management structure to coordinate interdisciplinary contributions across software engineering, statistics, and economics. We adopt a **Product-Matrix** management structure, ensuring that technical development (the "Framework") aligns tightly with scientific requirements (the "Use Cases").

### Leadership Team (Key Personnel)

*   **Max Ghenis (PI) - Project Director**: 
    *   *Role*: Overall strategic direction, architectural oversight, and stakeholder engagement.
    *   *Expertise*: Founder of PolicyEngine, former Google Data Scientist, expert in microsimulation architecture.
    *   *Responsibility*: Ensures the cyberinfrastructure meets the scalability and reproducibility goals. Manages the Open Source governance board.

*   **Ben Ogorek (Co-PI) - Lead Statistician**:
    *   *Role*: Lead for the `microimpute` and `microcalibrate` statistical packages.
    *   *Expertise*: PhD in Statistics, expert in machine learning and predictive modeling.
    *   *Responsibility*: rigorous validation of synthetic data generation; developing the Quantile Regression Forest methodologies for longitudinal imputation.

*   **John Sabelhaus (Senior Advisor) - Scientific Lead (Social Security)**:
    *   *Role*: Domain expert for the Social Security Dynamic Microsimulation Model.
    *   *Expertise*: Former economist at the Federal Reserve Board, extensive experience with SSA data and lifecycle modeling.
    *   *Responsibility*: Defining the scientific requirements for the Social Security use case; validating model outputs against administrative benchmarks; liaison to the academic economics community.

## Project Coordination

### 1. Development Methodology
We utilize an **Agile/Scrum** methodology adapted for scientific software:
*   **Two-Week Sprints**: Focused on delivering shippable code increments (e.g., "Implement survivor benefit logic", "Optimize calibration gradient descent").
*   **Public Roadmaps**: All development is tracked on public GitHub Project boards, allowing community visibility and input.
*   **Continuous Integration (CI)**: Every commit triggers our automated testing suite (8,600+ tests currently), ensuring no regression in model accuracy.

### 2. Governance and Sustainability (Leveraging POSE)
This project synergizes with our **NSF POSE Phase I** award, which is establishing the community governance layer.
*   **Technical Steering Committee (TSC)**: Composed of the PI, Co-PIs, and key open-source contributors. Makes decisions on architecture and API standards.
*   **Scientific Advisory Board**: External experts (including John Sabelhaus) who review the *validity* of the scientific outputs, ensuring the software produces economically sound results.

### 3. Timeline and Milestones

| Year | Focus | Key Milestones |
| :--- | :--- | :--- |
| **Year 1** | **Core Infrastructure** | - Release `microimpute` v1.0 (cross-sectional)<br>- Release `microcalibrate` v1.0 (differentiable weighting)<br>- Initial Social Security rules vectorization |
| **Year 2** | **Longitudinal Framework** | - Implement longitudinal synthetic panel generation (QRF)<br>- Calibrate synthetic panel to SSA targets<br>- Beta release of Social Security Model |
| **Year 3** | **Community & Scale** | - Integrate federated data access for private datasets<br>- Onboard 5+ external academic labs to the platform<br>- Release "PolicyEngine-Climate" prototype |
| **Year 4** | **Production & Sustainability** | - Full production release of Social Security Model<br>- Transition to community-led maintenance<br>- Finalize long-term funding model (consortium/grants) |

## 4. Budget & Partner Strategy (Core Team Model)

To ensure the scalability and adoption of this cyberinfrastructure, we employ a **Core Team** model. The budget of **$2.5M** is focused on building the critical mass of engineering talent required to solve the "hard problem" of Social Security modeling.

*   **Core Team (90%)**: Funds the "4 experts for 2 years" resource model identified by our scientific advisors as the minimum viable investment for a production-grade dynamic microsimulation engine.
*   **Consulting & Collaboration (10%)**: Funds scientific advisors (e.g., John Sabelhaus) and student fellowships to:
    *   **Validate** the models against administrative benchmarks.
    *   **Integrate** the tools into graduate curriculum.

This strategy prioritizes the high-velocity engineering required to build the infrastructure ("The Surge") while maintaining deep connectivity with the academic community through advisory roles rather than administrative-heavy sub-awards.

## Risk Management

| Risk | Likelihood | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Data Access Restrictions** | Medium | High | Our "Synthetic Panel" approach is designed specifically to bypass this. We train on small public panels (PSID) and impute to large cross-sections (CPS), avoiding reliance on restricted admin data. |
| **Computational Bottlenecks** | High | Medium | We rely on vectorized operations (NumPy/JAX) and cloud scaling. If single-node performance hits limits, we have architected for distributed dask-based execution. |
| **Adoption Inertia** | Medium | High | We are partnering with "influencer" scientists (like John Sabelhaus) to publish high-impact papers using the tool, proving its value to the skeptical academic community. |
