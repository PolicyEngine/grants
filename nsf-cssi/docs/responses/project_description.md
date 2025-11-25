# Project Description

## 1. Introduction and Motivation

### 1.1 The Need for Open Tax-Benefit Infrastructure

Tax and benefit policy affects every American household, yet the computational tools for analyzing these policies remain largely proprietary and inaccessible. When Congress debates major legislation—the American Rescue Plan's $1.9 trillion in transfers, the Inflation Reduction Act's tax credits, or proposed Social Security reforms—only a handful of institutions can independently verify distributional claims. The Tax Policy Center operates at $3.2 million annually; the Penn Wharton Budget Model at $1.8 million. State legislators making critical safety net decisions operate blind to interaction effects between programs.

Three models dominate academic tax policy research:

**TAXSIM** (NBER): Created by Daniel Feenberg, TAXSIM has served researchers for over 30 years, calculating federal and state income tax liabilities. However, TAXSIM is closed-source—researchers can use it but cannot examine or modify the underlying code. It covers only income taxes, excluding benefit programs that interact with the tax system.

**TRIM3** (Urban Institute): The Transfer Income Model covers taxes and transfers but requires institutional licensing agreements, restricting access to well-funded research centers.

**CBO/JCT Models**: Congressional scoring models are entirely internal, unavailable even to academic researchers.

This creates a fundamental reproducibility problem. When a researcher publishes findings based on TAXSIM, other researchers cannot verify the calculations or extend the analysis without access to the same black-box tool. When policy debates hinge on distributional estimates, the public cannot independently verify the claims.

### 1.2 PolicyEngine: Current State and Impact

PolicyEngine addresses this gap as the most comprehensive open-source tax-benefit microsimulation model for the United States. The platform encodes:

- **Federal income taxes**: All provisions of the Internal Revenue Code affecting individual filers
- **State income taxes**: Complete models for all 50 states plus DC
- **Payroll taxes**: Social Security, Medicare, and unemployment insurance
- **Benefit programs**: SNAP, Medicaid, TANF, SSI, WIC, housing assistance, CHIP, and others
- **Tax credits**: EITC, CTC, CDCTC, education credits, energy credits, and state equivalents

Every calculation traces to authoritative sources through 1,800+ structured citations to the U.S. Code, Code of Federal Regulations, and state statutes embedded directly in the codebase.

**Demonstrated Impact:**

*Government Adoption*: The Joint Economic Committee uses PolicyEngine for analyzing federal tax proposals. The UK Cabinet Office has integrated PolicyEngine UK so deeply that our CTO currently serves on secondment to HM Treasury. New York State Senator Andrew Gounardes publicly credited PolicyEngine for enabling his office to design child tax credit legislation independently.

*Research Use*: USC's Center for Economic and Social Research uses PolicyEngine for HHS-funded marginal tax rate research. We have conducted seminars at CBO, Congressional Research Service, and the Joint Economic Committee, with active curriculum discussions at Berkeley, Georgetown, Northwestern, and Harvard.

*Public Benefit*: Partner applications built on PolicyEngine's API reach over 100,000 individuals annually. MyFriendBen, backed by $2.4 million from the Gates Foundation, used PolicyEngine to identify $800 million in unclaimed benefits for 50,000 Colorado families.

*Technical Scale*: 146 GitHub repositories, 50,000+ commits, 9,034 encoded parameters and variables, 30+ unique contributors, 620+ forks across the ecosystem.

### 1.3 Architectural Limitations

Despite this impact, PolicyEngine's core engine—built on OpenFisca, an architecture designed in 2011—faces fundamental limitations that prevent critical research applications.

**Challenge 1: Scenario Branching**

Many tax provisions require calculating outcomes under multiple scenarios to determine the optimal treatment. Examples:

- *Credit vs. Deduction Elections*: Several states allow taxpayers to claim either a credit or deduction for certain expenses (e.g., college savings contributions). The optimal choice depends on the taxpayer's marginal rate and other circumstances. Proper modeling requires calculating tax liability under both scenarios.

- *Social Security Trust Fund Accounting*: Computing contributions to the Social Security and Medicare trust funds requires calculating taxes both with and without Social Security benefits included in income—the benefit amount affects taxation, which affects trust fund accounting.

- *Alternative Minimum Tax*: AMT requires computing regular tax and AMT liability in parallel, then taking the maximum.

- *Filing Status Optimization*: Married couples may benefit from filing jointly or separately depending on circumstances.

The current architecture cannot natively express these branching calculations. Workarounds require duplicating code paths, introducing maintenance burden and error risk.

**Challenge 2: One-Time Validation**

PolicyEngine currently validates against TAXSIM through periodic manual comparison. When discrepancies are found, they are investigated and resolved. However, this process is:

- *Reactive*: Issues are discovered after release, not before
- *Incomplete*: Validation covers a subset of scenarios, not comprehensive test suites
- *Unsustainable*: Manual effort doesn't scale with increasing model complexity

What's needed is continuous validation infrastructure that automatically compares every code change against external benchmarks, identifies regressions before release, and tracks accuracy metrics over time.

**Challenge 3: Performance at Scale**

PolicyEngine performs well for household-level calculations (sub-second response times) and moderate-scale microsimulation (100,000 households in minutes). However, population-scale analysis—simulating all 150+ million U.S. tax units—requires hours of computation. This limitation prevents:

- Real-time policy optimization exploring parameter spaces
- Monte Carlo uncertainty quantification over full populations
- Large-scale behavioral microsimulation with heterogeneous responses

---

## 2. Technical Approach

### 2.1 Core Engine Modernization: Native Branching

We will extend PolicyEngine Core to support native scenario branching through a new computational primitive: the **branch operator**.

**Design Concept:**

```python
# Current approach (workaround): duplicate variables
class tax_with_ss_benefits(Variable):
    def formula(person, period):
        # Calculate with SS benefits in income
        ...

class tax_without_ss_benefits(Variable):
    def formula(person, period):
        # Calculate without SS benefits
        ...

class trust_fund_contribution(Variable):
    def formula(person, period):
        # Manually combine results
        ...

# Proposed approach: native branching
class trust_fund_contribution(Variable):
    def formula(person, period):
        with branch("with_ss_benefits"):
            tax_with = calculate("income_tax")
        with branch("without_ss_benefits", ss_benefits=0):
            tax_without = calculate("income_tax")
        return tax_with - tax_without
```

**Implementation Strategy:**

1. *Computation Graph Extension*: Modify the underlying dependency graph to support branching nodes that fork computation, apply parameter modifications, and merge results.

2. *Memory Efficiency*: Implement copy-on-write semantics so branches share unchanged values, minimizing memory overhead for parallel scenario computation.

3. *Caching Strategy*: Extend memoization to cache branch-specific results, avoiding redundant computation when multiple variables require the same branch.

4. *API Design*: Create intuitive Python API that expresses branching declaratively, maintaining PolicyEngine's accessible interface for non-expert users.

**Validation**: We will validate the branching implementation against hand-calculated test cases for credit/deduction elections, AMT calculations, and Social Security trust fund accounting. We will also compare against TAXSIM for scenarios where branching affects outcomes.

### 2.2 Continuous Validation Infrastructure

We will build automated validation infrastructure that ensures ongoing accuracy against external benchmarks.

**TAXSIM Validation Pipeline:**

Building on our existing NBER relationship (formal MOU, with Dan Feenberg as technical advisor), we will create:

1. *Automated Test Generation*: Scripts that generate diverse tax scenarios covering edge cases, state variations, and temporal changes (multiple tax years).

2. *Continuous Integration*: Every pull request triggers validation runs comparing PolicyEngine against TAXSIM, with results posted automatically to the PR.

3. *Accuracy Dashboard*: Public dashboard showing current accuracy metrics by state, tax year, and scenario type. Historical tracking shows accuracy trends over time.

4. *Regression Detection*: Automated alerts when accuracy degrades, blocking releases that introduce significant discrepancies.

**Atlanta Fed Policy Rules Database Validation:**

Under our existing MOU with the Atlanta Fed, we will:

1. *Cross-Reference Policy Parameters*: Compare encoded policy parameters against the PRD's authoritative documentation.

2. *Benefit Program Validation*: Test benefit calculations (SNAP, TANF, Medicaid) against PRD specifications.

3. *Discrepancy Resolution*: Establish workflow for resolving discrepancies—either PolicyEngine corrections or PRD feedback.

**Validation Metrics:**

| Metric | Target |
|--------|--------|
| TAXSIM agreement (federal, within $100) | >98% of tax units |
| TAXSIM agreement (state, within $100) | >95% of tax units |
| Parameter coverage vs. PRD | >99% of documented parameters |
| Validation run frequency | Every pull request |
| Time to regression detection | <24 hours |

### 2.3 Performance Optimization

We will improve performance for population-scale microsimulation through three approaches:

**Vectorization Improvements:**

PolicyEngine already uses NumPy for vectorized computation, but opportunities remain:

1. *Branch Elimination*: Replace Python conditionals with vectorized operations where possible (e.g., `np.where` instead of `if/else`).

2. *Memory Layout*: Optimize data structures for cache efficiency when processing large arrays.

3. *Lazy Evaluation*: Defer computation of variables until needed, avoiding calculation of unused values.

**Parallelization:**

1. *Chunked Processing*: Divide population into chunks processed in parallel across CPU cores.

2. *Dask Integration*: Optional Dask backend for distributed computing across multiple machines.

3. *GPU Acceleration*: Experimental JAX backend for GPU-accelerated computation of simple operations.

**Performance Targets:**

| Scenario | Current | Target |
|----------|---------|--------|
| Single household calculation | 50ms | 20ms |
| 100K household microsimulation | 3 min | 1 min |
| Full population (150M units) | 8 hours | 2 hours |

---

## 3. Relationship to Existing NSF Investment

PolicyEngine is an active **NSF POSE Phase I awardee** (award running through July 2026). The POSE award focuses on *ecosystem development*: governance structures, contributor pathways, community building, and I-Corps customer discovery.

This CSSI Elements proposal is **complementary, not duplicative**:

| POSE Phase I | CSSI Elements |
|--------------|---------------|
| Community governance | Technical infrastructure |
| Contributor onboarding | Core engine modernization |
| I-Corps discovery | Validation pipelines |
| Documentation | Performance optimization |

POSE funds *how the community works together*; CSSI funds *the technical foundation they build on*.

The timing is synergistic: POSE Phase I completes July 2026; CSSI Elements would begin July 2026, allowing seamless transition from ecosystem building to infrastructure hardening.

---

## 4. Timeline and Milestones

### Year 1: Foundation

**Q1-Q2: Architecture Design**
- Design branch operator specification
- Prototype implementation in isolated branch
- Design validation pipeline architecture
- Establish baseline performance benchmarks

**Q3-Q4: Core Implementation**
- Implement branch operator in PolicyEngine Core
- Migrate key branching use cases (AMT, SS trust fund)
- Deploy TAXSIM validation CI pipeline
- Release PolicyEngine Core 2.0-alpha

**Year 1 Deliverables:**
- Branch operator specification and implementation
- TAXSIM CI validation (federal taxes)
- Performance baseline documentation
- Technical design documents

### Year 2: Validation and Hardening

**Q1-Q2: Validation Expansion**
- Extend TAXSIM validation to all 50 states
- Implement Atlanta Fed PRD validation pipeline
- Build public accuracy dashboard
- Regression detection and alerting

**Q3-Q4: Performance Optimization**
- Implement parallelization infrastructure
- Optimize memory usage for large populations
- Benchmark against performance targets
- Release PolicyEngine Core 2.0-beta

**Year 2 Deliverables:**
- Complete TAXSIM validation (50 states)
- Atlanta Fed PRD validation pipeline
- Public accuracy dashboard
- 2x performance improvement demonstrated

### Year 3: Production and Documentation

**Q1-Q2: Production Release**
- Stability testing and bug fixes
- Edge case handling
- API finalization
- Release PolicyEngine Core 2.0 stable

**Q3-Q4: Documentation and Adoption**
- Comprehensive technical documentation
- Researcher onboarding guides
- Tutorial notebooks and examples
- Workshop materials

**Year 3 Deliverables:**
- PolicyEngine Core 2.0 production release
- Complete documentation suite
- Published validation methodology paper
- Workshop curriculum

---

## 5. Broader Impacts

### 5.1 Democratizing Policy Analysis

The most significant broader impact is expanding who can conduct rigorous policy analysis:

**Graduate Students**: Dissertation research on tax policy currently requires institutional access to TAXSIM or TRIM3. PolicyEngine enables any student to conduct publication-quality analysis.

**State and Local Government**: State fiscal offices often rely on simplified spreadsheet models or expensive consultants. Open infrastructure enables independent, sophisticated analysis.

**International Researchers**: Scholars outside the US studying American tax policy face substantial barriers. Open-source tools with comprehensive documentation remove these obstacles.

**Teaching**: Economics and public policy programs can incorporate real policy analysis into curricula rather than simplified examples.

### 5.2 Reproducible Research

All PolicyEngine code is version-controlled with tagged releases. Research using PolicyEngine can specify exact version numbers, enabling perfect reproducibility. The validation infrastructure ensures accuracy claims are verifiable.

### 5.3 Benefit Access

PolicyEngine powers benefit navigation tools reaching over 100,000 individuals annually. Improved accuracy directly translates to better benefit identification for low-income families.

### 5.4 Commercial Applications

The open-source infrastructure enables commercial applications in tax preparation, financial planning, and policy consulting. These applications provide revenue streams for ongoing maintenance, ensuring long-term sustainability without perpetual grant dependence.

---

## 6. Team and Qualifications

**Max Ghenis, PI** (PolicyEngine CEO): Founded PolicyEngine, led POSE Phase I award, former Google data scientist. Expertise in microsimulation and policy analysis.

**Nikhil Woodruff, Co-PI** (PolicyEngine CTO): Lead architect of PolicyEngine Core, currently on secondment to UK Cabinet Office/HM Treasury. Expertise in simulation engine design.

**Dan Feenberg, Advisor** (NBER): Creator and maintainer of TAXSIM for 30+ years. Serving as I-Corps mentor for POSE Phase I. Unparalleled expertise in tax calculation validation.

**John Sabelhaus, Advisor** (Former Federal Reserve): Expert on Social Security modeling and longitudinal microsimulation. Author of foundational guidance on retirement system modeling.

---

## 7. Sustainability

PolicyEngine's sustainability model does not depend on perpetual grant funding:

**Open Source Foundation**: All code is MIT/AGPL licensed, ensuring permanent public access regardless of organizational changes.

**Commercial Applications**: Tax preparation software, financial planning tools, and policy consulting services built on PolicyEngine provide revenue streams. These applications benefit from infrastructure improvements funded by this grant.

**Government Contracts**: Custom implementations for government agencies (building on UK Cabinet Office success) provide project-based revenue.

**Community Maintenance**: With 30+ contributors and 620+ forks, the community can maintain and extend the codebase independently.

The CSSI investment creates durable infrastructure that sustains itself through commercial value creation while remaining freely available for research and public benefit.
