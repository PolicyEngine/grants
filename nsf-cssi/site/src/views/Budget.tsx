import React from 'react'

export const Budget: React.FC = () => {
  return (
    <div className="content">
      <h1>CSSI Elements Budget</h1>
      
      <div className="budget-summary">
        <h2>Budget Overview</h2>
        <div className="budget-stats">
          <div className="stat">
            <h3>$10M</h3>
            <p>Maximum CSSI Elements Funding</p>
          </div>
          <div className="stat">
            <h3>4 years</h3>
            <p>Project Duration</p>
          </div>
          <div className="stat">
            <h3>TBD</h3>
            <p>Requested Amount</p>
          </div>
        </div>
      </div>

      <div className="budget-categories">
        <h2>Budget Categories (TO BE DEVELOPED)</h2>
        <p>Detailed budget breakdown will be developed based on:</p>
        
        <div className="category-list">
          <div className="category-item">
            <h3>Personnel (Category A & B)</h3>
            <ul>
              <li>Principal Investigator</li>
              <li>Co-Principal Investigators</li>
              <li>Software Engineers</li>
              <li>Research Scientists</li>
              <li>Graduate Students</li>
              <li>Postdoctoral Researchers</li>
            </ul>
          </div>
          
          <div className="category-item">
            <h3>Equipment (Category D)</h3>
            <ul>
              <li>High-performance computing hardware</li>
              <li>Development workstations</li>
              <li>Network infrastructure</li>
            </ul>
          </div>
          
          <div className="category-item">
            <h3>Other Direct Costs (Category G)</h3>
            <ul>
              <li>Cloud computing services (AWS/GCP/Azure)</li>
              <li>Software licenses and tools</li>
              <li>Data acquisition and processing</li>
              <li>Conference travel and dissemination</li>
              <li>External collaborations</li>
            </ul>
          </div>
          
          <div className="category-item">
            <h3>Indirect Costs (Category I)</h3>
            <ul>
              <li>Institutional overhead</li>
              <li>Facilities and administrative costs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cost-sharing">
        <h2>Cost Sharing</h2>
        <p>TO BE DEVELOPED - Analysis of institutional contributions and matching funds</p>
      </div>

      <div className="budget-justification">
        <h2>Budget Justification</h2>
        <p>TO BE DEVELOPED - Detailed justification for each budget category linking to project objectives and deliverables</p>
      </div>
    </div>
  )
}