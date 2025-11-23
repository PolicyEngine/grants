Validation Scenarios — Initial Packs

We will maintain versioned scenario packs used by the validation harness. Each pack includes machine‑readable inputs (JSON/YAML), expected outputs from peer models or published sources, and notes on assumptions/definitions.

Core U.S. federal pack
- Filing statuses: single, married filing jointly, head of household, married filing separately.
- Income ranges: low (EITC‑eligible), median, 90th percentile, top 1%.
- Family structures: 0–3 dependents; child ages at key EITC/CTC thresholds.
- Itemization: standard vs itemized with mortgage interest, SALT caps, charitable contributions.
- Credits: EITC, CTC/ACTC, CDCTC, AOTC, Saver’s credit; phase‑in/out edges.
- Miscellaneous: UI benefits, capital gains (short/long), self‑employment, Social Security benefits.

State overlays
- Representative states (e.g., CA, NY, TX, FL, PA) with state credits/deductions; edges where coordination with federal matters.

Published score pack
- Scenarios mirroring ITEP, CBO, JCT, and Tax Foundation tables for selected reforms; include references and table IDs.

International packs
- UK: reforms reflected in IPPR/HMT/OBR publications; link to definitions/assumptions.
- Canada: SPSDM‑aligned scenarios; definitions for tax/benefit variables.

Format example (single filer, federal):
```json
{
  "metadata": {"id": "us_single_eitc_2kids_2025", "source": "validation-pack-2025.1"},
  "households": {"your household": {"members": ["you", "kid1", "kid2"], "state_name": {"2025": "CA"}}},
  "people": {
    "you": {"age": {"2025": 28}},
    "kid1": {"age": {"2025": 4}},
    "kid2": {"age": {"2025": 2}}
  },
  "tax_units": {"your tax unit": {"members": ["you", "kid1", "kid2"], "filing_status": {"2025": "SINGLE"}}},
  "incomes": {"your tax unit": {"employment_income": {"2025": 18000}}},
  "expected": {"taxsim": {"eitc":  X, "c00100": Y}, "taxcalc": {"eitc": X2}}
}
```

Notes
- Expected values are recorded when available; otherwise, the harness stores peer outputs for comparison and trending.
- Mappers convert between model schemas (e.g., PolicyEngine ↔︎ TAXSIM / Tax‑Calculator); each mapper is documented with caveats.

