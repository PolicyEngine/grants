# 2.5 Explainability (100 words max)

PolicyEngine separates calculation from explanation for full transparency.

**Calculations:** The platform applies 9,000+ parameters sourced from legislation—income thresholds, benefit formulas, phase-out rates—validated against 8,000+ test cases. Every parameter traceable to official citations.

**AI Explanations:** Plain language showing how policies affect households:
- "SNAP benefit: $347/month (Max $680 minus 30% of net income)"
- "Qualifies because gross income < 130% FPL threshold"
- "Provincial benefit reduced by 50% of federal amount"

Government workers and citizens see which rules applied, how federal-provincial dependencies resolved, and links to source legislation.

(90 words)

---

# Technical Architecture

- **Open source**: 100% of code publicly available on GitHub (AGPL-3.0)
- **Python package**: `pip install policyengine-us` / `policyengine-uk`
- **REST API**: Enables integration with case management systems
- **Docker**: Self-hosting for air-gapped government environments
- **Multi-country**: US (50 states + federal), UK, Canada in development
