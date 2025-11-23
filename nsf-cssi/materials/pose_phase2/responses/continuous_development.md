## Continuous Development and Training Infrastructure

### Curriculum Development Program

PolicyEngine will transform how tax-benefit policy is taught by providing the first production-grade microsimulation platform accessible to students. Current courses rely on simplified models or proprietary software students cannot access after graduation. We will develop comprehensive educational materials that prepare the next generation of policy analysts with real-world tools.

**Core curriculum modules**:
- **Introduction to Tax-Benefit Microsimulation** (undergraduate): Interactive notebooks teaching policy parameters, behavioral responses, and distributional analysis using actual legislation, with integrated AI coding assistants to help students debug and extend analyses
- **Advanced Policy Modeling** (graduate): Calibration techniques, validation methods, and uncertainty quantification using PolicyEngine's research APIs, including how to use AI tools like Claude and GitHub Copilot to rapidly prototype policy reforms
- **AI-Augmented Policy Analysis** (interdisciplinary): Training students to effectively prompt AI systems for policy research, validate AI-generated analyses, and combine PolicyEngine with AI tools for accelerated policy development

**Delivery mechanisms**:
- Jupyter notebooks with pre-configured environments (zero setup required)
- Video tutorials by government economists explaining real policy analyses
- Guest lecture program connecting students with PolicyEngine users in government
- Summer internship pipeline focused on using (not developing) the platform for policy research

**Target institutions**: We will pursue integration with economics and public policy programs through existing relationships at USC, Georgetown, and through the NBER network. Summer 2026 launch timing allows preparation for fall semester deployment.

### State and Local Government Training

State and local governments represent the highest-impact, most underserved market for microsimulation training. Our NCSL engagement revealed that most states analyze billion-dollar programs using Excel spreadsheets, lacking tools to understand policy interactions or distributional effects.

**Training program structure**:
- **Legislator briefings** (2-hour): High-level overview for policymakers on microsimulation capabilities and interpretation
- **Staff bootcamps** (2-day): Hands-on training for legislative analysts covering tax modeling, benefit interactions, and revenue estimation  
- **Agency workshops** (1-week): Deep training for revenue departments and social service agencies on maintaining state-specific parameters

**Deployment strategy**:
- Partner with NCSL for nationwide rollout, leveraging their convening power and credibility
- Create state-specific examples using actual proposed legislation from each state
- Provide ongoing office hours and peer learning networks organized by region
- Document success stories (like NY Senator Gounardes) to drive adoption

### Technical Skills Development and Contributor Onboarding

PolicyEngine's contributor onboarding addresses the unique challenge of bridging policy expertise and software engineering. Economists understand tax rules but may lack coding experience; developers know software but need policy context. Our graduated pathway enables meaningful contributions regardless of technical background.

**Differentiated Onboarding by Persona**:

*For Economists/Policy Analysts*:
- Start with parameter updates using our web-based editor—no Git required
- Progress to YAML parameter files with guided templates and validation
- Advance to Python formulas with extensive examples from existing rules
- Pair programming sessions with engineers for complex implementations

*For Software Engineers*:
- Policy bootcamp videos explaining tax-benefit fundamentals
- Shadowing sessions with policy experts during implementation
- Test-driven development using real household scenarios
- Mentorship on translating legislative text to code

*For Government Staff*:
- Focus on validation and testing rather than implementation
- Contribute state-specific test cases from actual casework
- Review parameter accuracy without touching code
- Provide requirements and acceptance criteria for features

**Structured Contributor Pathways**:
- **Good first issues**: Tagged issues with difficulty levels (beginner/intermediate/advanced), required skills clearly marked, estimated time commitment, and assigned mentors for each issue
- **Documentation contributions**: Non-code contributions through user guides, API examples, video tutorials, translations (Spanish high priority), and glossaries bridging policy/technical terminology
- **Parameter maintenance**: Web interface for updating rates and thresholds, automated validation against official sources, peer review by policy experts, and no coding required for 80% of updates
- **Validation testing**: Researchers contribute test cases from publications, government staff provide edge cases from operations, and community members submit household scenarios

**Skills progression with concrete milestones**:
1. **User** (Day 1) → Run first analysis, report first issue
2. **Contributor** (Week 2) → Submit first parameter update or documentation fix  
3. **Validator** (Month 1) → Add 10 test cases, verify state calculations
4. **Maintainer** (Month 3) → Manage parameter updates for assigned state/program
5. **Developer** (Month 6) → Implement first policy rule, optimize query performance
6. **Lead** (Year 1) → Own component area, mentor new contributors

### Innovation Through Openness and AI Integration

Open development accelerates innovation by enabling both human and AI contributors to solve specialized problems. The Yale Budget Lab adopted our imputation methods after NTA conference presentation, while USC researchers extended benefit cliff analysis using PolicyEngine's modularity in ways impossible with closed systems. UK developers contributed local authority modeling that US states can adapt for county-level analysis. Increasingly, contributors use AI coding assistants to accelerate development—our Phase I experience showed that Claude Code and GitHub Copilot reduced implementation time for new state tax systems by 60%.

**Phase II innovation priorities**:
- Real-time parameter updates as legislation passes, with AI agents monitoring legislative text and suggesting parameter changes
- AI-friendly API design enabling coding assistants to generate PolicyEngine integrations automatically
- Structured documentation and type hints optimized for AI code generation and validation
- Prompt engineering libraries helping users leverage AI for complex policy analysis tasks

### Measuring Development Success

- **Release velocity**: Monthly feature releases, daily parameter updates
- **Contributor diversity**: 50+ contributors across 10+ institutions
- **Training impact**: 1,000+ government staff trained, 5,000+ students educated
- **Innovation metrics**: 20+ research papers using PolicyEngine, 10+ methodological improvements contributed back
- **Quality indicators**: 48-hour median issue resolution, 99% API uptime, comprehensive test coverage