import React from 'react'

export const Home: React.FC = () => {
  return (
    <div className="content">
      <h1>NSF CSSI Elements — PolicyEngine Cyberinfrastructure</h1>
      
      <div className="overview">
        <h2>Project Overview</h2>
        <p>
          This site organizes PolicyEngine's NSF CSSI (Cyberinfrastructure for Sustained 
          Scientific Innovation) Elements proposal development. CSSI Elements supports 
          the development of robust, sustainable software infrastructure that enables 
          new scientific discoveries and serves diverse research communities.
        </p>
        
        <div className="key-stats">
          <div className="stat">
            <h3>$10M</h3>
            <p>Maximum funding (4 years)</p>
          </div>
          <div className="stat">
            <h3>Sept 15</h3>
            <p>Typical deadline</p>
          </div>
          <div className="stat">
            <h3>15 pages</h3>
            <p>Project description limit</p>
          </div>
        </div>
      </div>

      <div className="program-focus">
        <h2>CSSI Focus Areas</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <h3>High-Performance Computing</h3>
            <p>Scalable microsimulation across large populations and policy scenarios</p>
          </div>
          <div className="focus-item">
            <h3>Data Infrastructure</h3>
            <p>Advanced data processing pipelines and privacy-preserving computation</p>
          </div>
          <div className="focus-item">
            <h3>Integration Frameworks</h3>
            <p>APIs and tools enabling integration with existing research workflows</p>
          </div>
          <div className="focus-item">
            <h3>Collaborative Environments</h3>
            <p>Platforms supporting multi-institutional research collaboration</p>
          </div>
        </div>
      </div>

      <div className="research-impact">
        <h2>Research Enablement</h2>
        <p>
          PolicyEngine cyberinfrastructure will enable new research questions across 
          multiple domains including public economics, labor economics, health policy, 
          urban planning, climate policy, and computational social science.
        </p>
        
        <h3>Key Capabilities</h3>
        <ul>
          <li>Real-time policy optimization using machine learning</li>
          <li>Cross-national policy comparison with standardized metrics</li>
          <li>Behavioral microsimulation with agent-based modeling integration</li>
          <li>Dynamic policy impact assessment with temporal modeling</li>
          <li>Reproducible research workflows with containerized environments</li>
        </ul>
      </div>

      <div className="navigation-help">
        <h2>Site Navigation</h2>
        <ul>
          <li><strong>Application:</strong> Complete assembled proposal content</li>
          <li><strong>Checklist:</strong> Track completion status of all sections</li>
          <li><strong>Architecture:</strong> Technical system design and diagrams</li>
          <li><strong>Performance:</strong> Benchmarks and scalability analysis</li>
          <li><strong>Budget:</strong> Detailed budget breakdown and justification</li>
          <li><strong>Timeline:</strong> 4-year development timeline and milestones</li>
          <li><strong>Integration:</strong> API specifications and integration examples</li>
          <li><strong>Research:</strong> Research enablement and impact analysis</li>
          <li><strong>References:</strong> Complete bibliography and citations</li>
        </ul>
      </div>

      <div className="status-note">
        <h2>Development Status</h2>
        <p>
          <strong>This is an initial framework for discussion.</strong> Content sections 
          are marked "TO BE DEVELOPED" where appropriate. This repository provides the 
          structure and tools needed to develop a comprehensive CSSI Elements proposal 
          focused on cyberinfrastructure for policy research.
        </p>
      </div>
    </div>
  )
}