# Project Description

## 1. The Case for Next-Generation Tax-Benefit Infrastructure

### 1.1 TAXSIM: A Model for Successful Cyberinfrastructure

NBER's TAXSIM, created and maintained by Daniel Feenberg since 1993, represents one of the most successful examples of research cyberinfrastructure in economics. With over 1,000 academic citations, TAXSIM has enabled three decades of tax policy research—from foundational studies of tax incidence to cutting-edge work on behavioral responses. When researchers need to calculate federal or state income tax liabilities for a sample of households, TAXSIM is the standard tool.

TAXSIM's success offers a template for what research infrastructure can achieve: a reliable, well-documented tool that researchers trust and cite, enabling studies that would otherwise require each team to independently implement complex tax rules.

### 1.2 The Limitations Constraining Next-Generation Research

Despite TAXSIM's success, it has limitations that constrain the next generation of public economics research:

**Taxes Only, No Benefits**: TAXSIM calculates income tax liabilities but excludes benefit programs—SNAP, Medicaid, TANF, SSI, housing assistance. Yet modern policy questions require understanding the joint tax-benefit system. How does a CTC expansion interact with SNAP phase-outs? What is the effective marginal tax rate for a family receiving EITC and Medicaid? These questions require modeling taxes and benefits together.

**Closed Source**: TAXSIM is proprietary. Researchers can submit inputs and receive outputs but cannot inspect the underlying code. When results seem unexpected, there is no way to trace calculations. When edge cases arise, researchers cannot verify handling. This creates reproducibility challenges: studies cite TAXSIM, but the specific calculations cannot be independently verified.

**Current Law Only**: TAXSIM implements actual tax law for historical years. Researchers cannot model hypothetical reforms—a proposed CTC expansion, a flat tax, or state-level policy experiments. This limits TAXSIM's utility for prospective policy analysis.

**No Integrated Microsimulation**: TAXSIM calculates tax liability for individual records. Running it on large microdata samples requires researchers to build their own infrastructure for data preparation, sample weights, and aggregation. There is no integrated path from raw survey data to distributional results.

**Legacy Technology**: Written in Fortran, TAXSIM lacks modern APIs for programmatic access. The interface is a simple web form or batch file submission. Integration with modern data science workflows (Python, R, cloud computing) requires substantial custom code.

### 1.3 The Research Opportunity

Consider what becomes possible with infrastructure that addresses these limitations:

**Tax-Benefit Interaction Studies**: Decades of research has examined tax policy in isolation—labor supply responses to income taxes, distributional effects of tax reforms. But households face a joint tax-benefit schedule. A single mother considering additional work faces EITC phase-in, SNAP benefit reduction, potential Medicaid loss, and income tax liability simultaneously. Studying these interactions at scale requires modeling both systems.

**Policy Reform Analysis**: Researchers and policymakers want to understand how proposed reforms would affect households. What if the CTC were fully refundable? What if SNAP benefits indexed to local food costs? What if states expanded earned income credits? Open infrastructure enables this analysis without proprietary tools.

**Reproducible Public Economics**: If the code implementing tax and benefit rules is open source, versioned, and documented, research becomes reproducible. Other researchers can verify calculations, extend analyses, and build on prior work.

**Population-Scale Distributional Research**: Modern datasets (enhanced CPS, synthetic tax files) contain millions of records. Policy questions often require population-scale analysis—not just average effects, but distributional impacts across geography, demographics, and income. This requires infrastructure that scales.

### 1.4 PolicyEngine: Building the Next-Generation Infrastructure

PolicyEngine is open-source infrastructure designed to serve as the successor to TAXSIM for modern public economics research. The platform currently encodes:

- **Federal income taxes**: All provisions of the Internal Revenue Code affecting individual filers
- **State income taxes**: Complete models for all 50 states plus DC
- **Payroll taxes**: Social Security, Medicare, and unemployment insurance
- **Benefit programs**: SNAP, Medicaid, TANF, SSI, WIC, housing assistance, CHIP, and others
- **Tax credits**: EITC, CTC, CDCTC, education credits, energy credits, and state equivalents

Every calculation traces to authoritative sources through 1,800+ structured citations to the U.S. Code, Code of Federal Regulations, and state statutes embedded directly in the codebase.

**Demonstrated Adoption:**

*Government Users*: The Joint Economic Committee uses PolicyEngine for analyzing federal tax proposals. The UK Cabinet Office has integrated PolicyEngine UK so deeply that our CTO serves on secondment to HM Treasury. New York State Senator Andrew Gounardes publicly credited PolicyEngine for enabling his office to design child tax credit legislation independently.

*Research Users*: USC's Center for Economic and Social Research uses PolicyEngine for HHS-funded marginal tax rate research. We have conducted seminars at CBO, Congressional Research Service, and the Joint Economic Committee, with curriculum discussions underway at Berkeley, Georgetown, Northwestern, and Harvard.

*Public Benefit*: Partner applications built on PolicyEngine's API reach over 100,000 individuals annually. MyFriendBen, backed by $2.4 million from the Gates Foundation, used PolicyEngine to identify $800 million in unclaimed benefits for 50,000 Colorado families.

*Technical Scale*: 146 GitHub repositories, 50,000+ commits, 9,034 encoded parameters and variables, 30+ unique contributors, 620+ forks across the ecosystem.

**Validation Against TAXSIM**: We have a formal MOU with NBER, and Dan Feenberg—TAXSIM's creator—serves as a technical advisor. This relationship enables direct comparison and ensures PolicyEngine's tax calculations match the established benchmark.

---

## 2. Infrastructure Gaps Requiring NSF Investment

Despite demonstrated adoption, PolicyEngine's infrastructure requires modernization to fulfill its potential as foundational research cyberinfrastructure.

### 2.1 Continuous Validation Infrastructure

PolicyEngine currently validates against TAXSIM through periodic manual comparison. When discrepancies are found, they are investigated and resolved. But this process is reactive (issues discovered after release), incomplete (validation covers a subset of scenarios), and unsustainable (manual effort doesn't scale with model complexity).

**What's Needed**: Automated validation infrastructure that compares every code change against TAXSIM and Atlanta Fed Policy Rules Database, identifies regressions before release, tracks accuracy metrics over time, and provides public dashboards showing validation status.

**Why NSF**: Building validation infrastructure is classic cyberinfrastructure work—essential for research quality but not fundable through application-specific grants. It's infrastructure that enables all subsequent research.

### 2.2 Performance for Population-Scale Research

PolicyEngine performs well for household-level calculations (sub-second responses) and moderate-scale microsimulation (100,000 households in minutes). But population-scale analysis—simulating all 150+ million U.S. tax units for distributional research—requires hours of computation.

**What's Needed**: Performance improvements enabling population-scale analysis in reasonable timeframes. This includes vectorization improvements, parallelization infrastructure, and memory optimization.

**Research Enabled**: Real-time policy optimization exploring parameter spaces. Monte Carlo uncertainty quantification over full populations. Large-scale behavioral microsimulation with heterogeneous responses.

### 2.3 R and Stata Interfaces

Economists predominantly work in R and Stata. PolicyEngine's Python-native interface creates adoption friction for researchers unfamiliar with Python.

**What's Needed**: Native R and Stata packages that wrap PolicyEngine's functionality, enabling seamless use in economists' existing workflows.

**Why This Matters**: Infrastructure succeeds through adoption. TAXSIM's simple interface lowered barriers. PolicyEngine needs equivalent accessibility for economists who don't use Python.

### 2.4 Complex Tax Provision Support

Many tax provisions require calculating outcomes under multiple scenarios: credit vs. deduction elections, Alternative Minimum Tax, filing status optimization. PolicyEngine's current architecture handles these through workarounds that increase complexity and maintenance burden.

**What's Needed**: Native support for scenario branching that simplifies implementation and ensures correctness for complex tax rules.

---

## 3. Technical Approach

### 3.1 Continuous Validation Infrastructure

**TAXSIM Validation Pipeline:**

Building on our existing NBER relationship, we will create:

1. *Automated Test Generation*: Scripts generating diverse tax scenarios covering edge cases, state variations, and multiple tax years.

2. *CI Integration*: Every pull request triggers validation runs comparing PolicyEngine against TAXSIM, with results posted automatically.

3. *Accuracy Dashboard*: Public dashboard showing accuracy metrics by state, tax year, and scenario type, with historical trends.

4. *Regression Detection*: Automated alerts when accuracy degrades, blocking releases that introduce significant discrepancies.

**Atlanta Fed PRD Validation:**

Under our existing MOU with the Atlanta Fed, we will:

1. *Parameter Cross-Reference*: Compare encoded parameters against PRD's authoritative documentation.
2. *Benefit Program Validation*: Test SNAP, TANF, Medicaid calculations against PRD specifications.
3. *Discrepancy Resolution*: Workflow for resolving discrepancies through PolicyEngine corrections or PRD feedback.

**Validation Targets:**

| Metric | Target |
|--------|--------|
| TAXSIM agreement (federal, within $100) | >98% of tax units |
| TAXSIM agreement (state, within $100) | >95% of tax units |
| Parameter coverage vs. PRD | >99% of documented parameters |
| Validation run frequency | Every pull request |

### 3.2 Performance Optimization

**Vectorization Improvements:**
- Replace Python conditionals with vectorized operations
- Optimize data structures for cache efficiency
- Implement lazy evaluation for unused variables

**Parallelization:**
- Chunked processing across CPU cores
- Optional Dask backend for distributed computing
- Experimental GPU acceleration for suitable operations

**Performance Targets:**

| Scenario | Current | Target |
|----------|---------|--------|
| Single household | 50ms | 20ms |
| 100K households | 3 min | 1 min |
| Full population (150M units) | 8 hours | 2 hours |

### 3.3 R and Stata Interfaces

We will create native packages:

**R Package (policyengine)**:
- CRAN-installable package
- Familiar tidyverse-compatible interface
- Vignettes demonstrating research workflows

**Stata Package (policyengine)**:
- SSC-installable ado files
- Native Stata syntax
- Integration with common survey commands

---

## 4. Relationship to Existing NSF Investment

PolicyEngine is an active **NSF POSE Phase I awardee** (Award #2229069, through July 2026). The POSE award focuses on *ecosystem development*: governance structures, contributor pathways, community building, and customer discovery.

This CSSI Elements proposal is **complementary**:

| POSE Phase I | CSSI Elements |
|--------------|---------------|
| Community governance | Validation infrastructure |
| Contributor onboarding | Performance at scale |
| I-Corps discovery | R/Stata interfaces |
| Documentation | Complex provision support |

POSE funds *how the community works together*; CSSI funds *the technical foundation they build on*.

---

## 5. Timeline and Milestones

### Year 1: Validation Foundation

**Q1-Q2**: Design validation pipeline architecture; establish baseline accuracy metrics; begin R package development

**Q3-Q4**: Deploy TAXSIM validation CI pipeline; release R package alpha; begin Stata package development

**Deliverables**: TAXSIM CI validation (federal); R package alpha; baseline accuracy dashboard

### Year 2: Scale and Accessibility

**Q1-Q2**: Extend TAXSIM validation to 50 states; implement Atlanta Fed PRD validation; release R package on CRAN

**Q3-Q4**: Performance optimization; release Stata package; deploy public accuracy dashboard

**Deliverables**: Full 50-state validation; R and Stata packages released; 2x performance improvement

### Year 3: Production and Documentation

**Q1-Q2**: Production stability; edge case handling; API finalization

**Q3-Q4**: Documentation; tutorial notebooks; workshop materials; methodology paper

**Deliverables**: Production release; documentation suite; published validation methodology

---

## 6. Broader Impacts

### 6.1 Democratizing Policy Analysis

The most significant broader impact is expanding who can conduct rigorous policy analysis:

**Graduate Students**: Dissertation research on tax-benefit policy currently requires institutional access to TAXSIM or TRIM3. PolicyEngine enables any student to conduct publication-quality analysis.

**State and Local Government**: State fiscal offices often rely on simplified models or expensive consultants. Open infrastructure enables independent, sophisticated analysis.

**International Researchers**: Scholars outside the US face barriers studying American policy. Open-source tools with documentation remove these obstacles.

### 6.2 Reproducible Research

All PolicyEngine code is version-controlled with tagged releases. Research can specify exact versions, enabling perfect reproducibility. Validation infrastructure ensures accuracy claims are verifiable.

### 6.3 Benefit Access

PolicyEngine powers benefit navigation tools reaching 100,000+ individuals annually. Improved accuracy directly translates to better benefit identification for low-income families.

---

## 7. Team and Qualifications

**Max Ghenis, PI** (PolicyEngine CEO): Founded PolicyEngine, led POSE Phase I award, former Google data scientist.

**Nikhil Woodruff, Co-PI** (PolicyEngine CTO): Lead architect of PolicyEngine Core, currently on secondment to UK Cabinet Office/HM Treasury.

**Dan Feenberg, Advisor** (NBER): Creator of TAXSIM. Serving as I-Corps mentor for POSE Phase I.

**John Sabelhaus, Advisor** (Former Federal Reserve): Expert on Social Security modeling and longitudinal microsimulation.

---

## 8. Sustainability

PolicyEngine's sustainability does not depend on perpetual grant funding:

**Commercial Applications**: Tax preparation software, financial planning tools, and policy consulting provide revenue streams.

**Government Contracts**: Custom implementations for government agencies provide project-based revenue.

**Community Maintenance**: With 30+ contributors and 620+ forks, the community can maintain and extend the codebase.

The goal is for PolicyEngine to become as foundational for the next generation of public economics research as TAXSIM has been for the last—and to sustain itself through the value it creates.
