import React from 'react'
import ReactMarkdown from 'react-markdown'

// This will be populated by the sync script
const applicationContent = `# NSF CSSI Elements Application

*This content will be populated when the sync script runs to pull together all sections.*

## Project Summary

TO BE DEVELOPED - Project summary with keywords and overview.

## Cyberinfrastructure Need and Vision

TO BE DEVELOPED - Analysis of infrastructure gaps and vision for PolicyEngine cyberinfrastructure.

## Technical Approach and Architecture

TO BE DEVELOPED - Detailed system architecture, scalability design, and technical approach.

## Research Enablement and Scientific Impact

TO BE DEVELOPED - How the infrastructure enables new research questions and methodologies.

## Software Engineering and Sustainability

TO BE DEVELOPED - Development practices, testing, documentation, and maintenance plans.

## Data Infrastructure and Management

TO BE DEVELOPED - Data pipelines, privacy, security, and access patterns.

## Community Adoption and User Experience

TO BE DEVELOPED - User interfaces, APIs, documentation, and adoption strategies.

## Evaluation and Success Metrics

TO BE DEVELOPED - Technical and research impact measurement strategies.

## Broader Impacts

TO BE DEVELOPED - Societal benefits, educational impact, and diversity considerations.

## Timeline and Milestones

TO BE DEVELOPED - 4-year development timeline with specific deliverables.

---

*Use the navigation links above to access individual sections and supporting materials.*`

export const Application: React.FC = () => {
  return (
    <div className="content">
      <div className="application-content">
        <ReactMarkdown>{applicationContent}</ReactMarkdown>
      </div>
    </div>
  )
}