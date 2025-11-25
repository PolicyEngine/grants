# Data Management Plan

## 1. Types of Data

This project will produce and use the following data types:

### 1.1 Input Data (Existing Public Surveys)
- **Current Population Survey (CPS-ASEC)**: Public-use microdata from Census Bureau
- **Survey of Consumer Finances (SCF)**: Public-use data from Federal Reserve
- **Consumer Expenditure Survey (CEX)**: Public-use data from Bureau of Labor Statistics

All input data are publicly available from federal statistical agencies at no cost.

### 1.2 Derived Data Products
- **Enhanced Microdata**: CPS records with imputed wealth and consumption variables
- **Trained Models**: Serialized CTGAN/TVAE model weights
- **Benchmark Datasets**: Preprocessed survey extracts for method comparison

### 1.3 Software and Code
- **MicroImpute Library**: Python package for survey imputation
- **Benchmark Scripts**: Reproducible evaluation pipelines
- **Documentation**: Tutorials, API references, method guides

### 1.4 Validation Results
- **Aggregate Metrics**: Summary statistics from restricted-data validation (no individual records)
- **Method Comparisons**: Tables and figures comparing imputation approaches

## 2. Data Standards and Formats

### 2.1 Data Formats
- **Microdata**: Parquet format (efficient, typed, widely supported) with CSV alternatives
- **Models**: PyTorch checkpoint format (.pt) with ONNX exports for interoperability
- **Documentation**: Markdown source, rendered HTML/PDF

### 2.2 Metadata Standards
- **Variable Descriptions**: Data dictionaries following DDI (Data Documentation Initiative) standards
- **Provenance**: JSON metadata documenting source surveys, imputation parameters, software versions
- **Reproducibility**: Containerized environments (Docker) ensuring exact replication

### 2.3 Quality Assurance
- Automated validation checks on all released data
- Version control with semantic versioning
- Checksums for data integrity verification

## 3. Data Access and Sharing

### 3.1 Open Access Policy
All project outputs will be freely available:

| Output | Repository | License | Access |
|--------|------------|---------|--------|
| MicroImpute code | GitHub | MIT | Public |
| Enhanced microdata | Zenodo/Harvard Dataverse | CC-BY | Public |
| Trained models | Hugging Face Hub | MIT | Public |
| Documentation | GitHub Pages | CC-BY | Public |
| Publications | arXiv preprints | Open Access | Public |

### 3.2 Timing of Release
- **Code**: Continuous release via GitHub (public repository from project start)
- **Data**: Major releases at project milestones (Months 12, 24, 36)
- **Models**: Released with each MicroImpute version
- **Papers**: Preprints upon submission, final versions upon acceptance

### 3.3 Restrictions
- **Restricted-data validation**: Only aggregate metrics released; no individual records from RDC analysis
- **No PII**: All released data are de-identified public-use records; imputation does not introduce identification risk beyond source surveys

## 4. Data Preservation and Long-Term Access

### 4.1 Repositories
- **Code**: GitHub (primary), Software Heritage (archival)
- **Data**: Zenodo (DOI assignment, long-term preservation) and Harvard Dataverse
- **Models**: Hugging Face Hub with Zenodo backups

### 4.2 Preservation Period
- Data and code preserved for minimum 10 years post-project
- Zenodo provides indefinite preservation with institutional backing (CERN)

### 4.3 Sustainability
- MIT license enables community maintenance
- Documentation supports independent operation
- No ongoing infrastructure required for basic functionality

## 5. Roles and Responsibilities

| Role | Responsibility |
|------|----------------|
| PI (Ghenis) | Overall data management oversight, release decisions |
| Co-PI (Ogorek) | Data quality assurance, validation protocols |
| Research Engineer | Repository maintenance, automated testing |
| Advisory (Sabelhaus) | Guidance on statistical disclosure practices |

## 6. Privacy and Confidentiality

### 6.1 Source Data
All source data are public-use files released by federal agencies after disclosure review. No restricted data are incorporated into released products.

### 6.2 Imputed Data
Imputation adds synthetic values to real records. Following Census Bureau guidance on synthetic data:
- Imputed values are model outputs, not actual observations
- Release only aggregate statistics from restricted-data validation
- Document limitations clearly in all data releases

### 6.3 Restricted Data Access
RDC validation requires separate IRB and Census approval. Only aggregate validation metrics (e.g., mean quantile loss) will be exported; no individual-level comparisons leave the secure environment.

## 7. Budget for Data Management

Data management activities are integrated into project budget:
- Repository hosting: GitHub (free for open source)
- Long-term preservation: Zenodo (free, CERN-supported)
- Cloud storage for large datasets: $2,000/year (included in computing budget)
- Personnel time for documentation and releases: Included in PI/engineer effort
