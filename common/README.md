# Common Resources

Shared organizational documents used across multiple grant applications.

## Organization Contact Information

### **`organization_details.yaml`** - Contact information for PSL Foundation and PolicyEngine
- PSL Foundation: address, phone, website, EIN
- Jason DeBacker: President, authorized signatory
- PolicyEngine: address, phone, website
- Max Ghenis: Executive Director, primary contact
- Structured YAML format for easy reference in applications

## PSL Foundation (Fiscal Sponsor)

### Financial Documents
- **PSL Foundation Audited Financial Statements (FY2023)** - Complete audit as of June 30, 2023
- **Statement of Activity FY2024** - Income and expenses for July 2023 - June 2024
- **Statement of Activity FY2025** - Income and expenses for July 2024 - June 2025
- **PSL-F Operational Budget** - FY2024 and FY2025 budget comparison

### Legal Documents
- **PSL_Foundation_IRS_Determination_Letter.pdf** - 501(c)(3) tax-exempt status (EIN: 86-3092437)
  - Downloaded from https://psl-foundation.org/legal/
  - Use for all grant applications requiring IRS determination letter
- **PSL_Foundation_Fiscal_Sponsorship_Agreement.pdf** - Fiscal sponsorship agreement
  - Downloaded from https://psl-foundation.org/legal/
  - Use for all grant applications requiring fiscal sponsorship documentation
- **W-9 Form** - Tax information for grant payments (to be added)

## PolicyEngine

### Financial Documents
- **PolicyEngine_Current_Year_Budget_2025.xlsx** - PolicyEngine project budget (current fiscal year)
  - Use for grants requesting "fiscally sponsored project budget"
  - Shows PolicyEngine's operating budget, not PSL Foundation's overall budget
- **Statement of Financial Position** - Balance sheet as of October 2025

### Organizational Documents
- **Logo** - High-resolution PNG/JPG files
- **Team Bios** - Key personnel backgrounds
- **Mission Statement** - Organization overview

## Usage

These documents can be referenced by any grant application in this repository. Instead of duplicating files, grant-specific directories can link to or reference these common resources.

### Example Reference:
```yaml
# In a grant.yaml file
supporting_documents:
  - name: "PSL Foundation Audit FY2023"
    file: "../../common/financials/PSL Foundation - 6.30.23 Issued Audited Financial Statements (3)_compressed.pdf"
```

### Using Organization Details:
```yaml
# Reference organization contact info
grantee_organization:
  name: !ref common/organization_details.yaml#/psl_foundation/name
  ein: !ref common/organization_details.yaml#/psl_foundation/ein
```

Or simply copy the information from `organization_details.yaml` into your application files.

## Adding New Common Resources

When a document is needed by multiple grants:
1. Add to appropriate `common/` subdirectory
2. Update this README
3. Reference from individual grant directories as needed
4. Avoid duplication across grant folders

## Document Versioning

For grants that need to reference specific versions of common documents:

**Option 1: Git Commit Reference**
```yaml
# In grant.yaml
supporting_documents:
  - name: "PSL Foundation Audit FY2023"
    file: "../../common/financials/PSL Foundation - 6.30.23 Issued Audited Financial Statements (3)_compressed.pdf"
    git_commit: "abc123def"  # Commit hash when document was submitted
```

**Option 2: Copy to Grant Directory**
For critical applications, copy the exact version used:
```bash
cp common/financials/file.pdf pritzker/financials/file_submitted_2025-10-28.pdf
```

**Recommendation**: Use common/ for current documents, copy to grant-specific directory when submitting to preserve exact versions used in application.
