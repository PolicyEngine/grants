# Broader Impacts

PolicyEngine Cyberinfrastructure is poised to transform how society understands, debates, and designs economic policy. By democratizing access to sophisticated modeling tools, we empower a diverse range of stakeholders--from students to state legislators--to participate in evidence-based decision-making.

## 1. Democratizing Policy Analysis
Currently, the ability to "score" legislation (estimate its cost and impact) is concentrated in a few elite institutions like the CBO, JCT, and major think tanks. This centralization creates an information asymmetry where community organizations, journalists, and smaller academic departments cannot independently verify claims. PolicyEngine breaks this monopoly.
*   **Impact**: We enable *any* user to run the same quality of analysis as the Congressional Budget Office.
*   **Mechanism**: Our free, web-based interface and open-source Python packages lower the barrier to entry from "access to a mainframe and restricted data" to "an internet connection."

## 2. Enhancing STEM Education in Economics
Economic curriculum often relies on stylized, static models because real-world microsimulation is too complex to teach. We provide a "laboratory" for economics students to experiment with tax and benefit rules, visualizing the immediate distributional consequences of policy changes.
*   **Mechanism**: We are developing curriculum modules with partner universities (e.g., UC Berkeley, Georgetown) that integrate PolicyEngine into public finance and econometrics courses, training the next generation of data-literate policy analysts using the same tools that analyze real legislation.

## 3. Advancing Open Science
The "replication crisis" in social sciences is exacerbated by closed-source models where methodologies are hidden. PolicyEngine establishes a new standard for transparency by making the entire modeling pipeline--from data imputation to rule calculation--open source.
*   **Mechanism**: Every simulation result is linked to a specific Git commit hash, ensuring perfect reproducibility. We publish our validation reports automatically, allowing the community to audit our accuracy against official benchmarks like TAXSIM.

## 4. Supporting Underrepresented Communities
Policies often have complex, heterogeneous impacts on different demographic groups that aggregate statistics miss. Our focus on *distributional* analysis (not just aggregate costs) highlights impacts on marginalized communities, racial minorities, and low-income households.
*   **Mechanism**: Our synthetic data generation (`microimpute`) explicitly models under-represented populations, ensuring they are statistically visible in policy simulations where they might otherwise be smoothed over by small sample sizes in public data.