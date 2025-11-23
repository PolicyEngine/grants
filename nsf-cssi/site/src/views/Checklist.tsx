import React from 'react'

export const Checklist: React.FC = () => {
  const sections = [
    { id: 'project_summary', title: 'Project Summary', status: 'draft' },
    { id: 'cyberinfrastructure_need', title: 'Cyberinfrastructure Need and Vision', status: 'outline' },
    { id: 'technical_approach', title: 'Technical Approach and Architecture', status: 'outline' },
    { id: 'research_enablement', title: 'Research Enablement and Scientific Impact', status: 'pending' },
    { id: 'software_engineering', title: 'Software Engineering and Sustainability', status: 'pending' },
    { id: 'data_management', title: 'Data Infrastructure and Management', status: 'pending' },
    { id: 'community_adoption', title: 'Community Adoption and User Experience', status: 'pending' },
    { id: 'evaluation_metrics', title: 'Evaluation and Success Metrics', status: 'pending' },
    { id: 'broader_impacts', title: 'Broader Impacts', status: 'pending' },
    { id: 'timeline_milestones', title: 'Timeline and Milestones', status: 'pending' }
  ]

  const attachments = [
    { title: 'References Cited', status: 'pending' },
    { title: 'Biographical Sketches', status: 'pending' },
    { title: 'Budget and Budget Justification', status: 'pending' },
    { title: 'Current and Pending Support', status: 'pending' },
    { title: 'Facilities, Equipment, and Other Resources', status: 'pending' },
    { title: 'Data Management and Sharing Plan', status: 'pending' },
    { title: 'Software Management Plan', status: 'pending' },
    { title: 'Letters of Collaboration', status: 'pending' },
    { title: 'Computational Resource Requirements', status: 'pending' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#28a745'
      case 'draft': return '#ffc107'
      case 'outline': return '#17a2b8'
      case 'pending': return '#6c757d'
      default: return '#6c757d'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'draft': return 'Draft'
      case 'outline': return 'Outline'
      case 'pending': return 'To Do'
      default: return 'Unknown'
    }
  }

  return (
    <div className="content">
      <h1>CSSI Elements Proposal Checklist</h1>
      
      <div className="checklist-summary">
        <div className="progress-stats">
          <div className="stat">
            <h3>10</h3>
            <p>Total Sections</p>
          </div>
          <div className="stat">
            <h3>3</h3>
            <p>In Progress</p>
          </div>
          <div className="stat">
            <h3>7</h3>
            <p>To Do</p>
          </div>
        </div>
      </div>

      <div className="checklist-sections">
        <h2>Project Description Sections</h2>
        <div className="checklist-grid">
          {sections.map(section => (
            <div key={section.id} className="checklist-item">
              <div className="status-indicator" style={{backgroundColor: getStatusColor(section.status)}}>
                {getStatusText(section.status)}
              </div>
              <h3>{section.title}</h3>
              <p>Status: {getStatusText(section.status)}</p>
            </div>
          ))}
        </div>

        <h2>Required Attachments</h2>
        <div className="checklist-grid">
          {attachments.map((attachment, index) => (
            <div key={index} className="checklist-item">
              <div className="status-indicator" style={{backgroundColor: getStatusColor(attachment.status)}}>
                {getStatusText(attachment.status)}
              </div>
              <h3>{attachment.title}</h3>
              <p>Status: {getStatusText(attachment.status)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="deadline-info">
        <h2>Key Dates</h2>
        <ul>
          <li><strong>Typical CSSI Deadline:</strong> September 15, 2025</li>
          <li><strong>Project Duration:</strong> 4 years</li>
          <li><strong>Funding Cap:</strong> $10,000,000</li>
          <li><strong>Page Limit:</strong> 15 pages (Project Description)</li>
        </ul>
      </div>
    </div>
  )
}