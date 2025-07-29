import FadeInSection from './FadeInSection'

export default function Projects() {
  return (
    <FadeInSection>
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <ul>
          <li>
            <strong>Codewise Reviewer</strong> – AI-powered code review application.{' '}
            <a href="https://github.com/gromber05/codewise-reviewer" target="_blank" rel="noopener noreferrer">View code</a>
            <div className="project-langs">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="project-lang-icon" />
            </div>
          </li>
          <li>
            <strong>Discord bots</strong> – I have developed and maintained several Discord bots using Python, automating server management, moderation, and entertainment features for different communities. These bots integrate APIs, custom commands, and event-driven logic, demonstrating my skills in Python, asynchronous programming, and deploying scalable solutions.{' '}
            <a href="https://github.com/gromber05/codewise-reviewer" target="_blank" rel="noopener noreferrer">View code</a>
            <div className="project-langs">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="project-lang-icon" />
            </div>
          </li>
          <li>
            <strong>Password unit</strong> .{' '}
            <a href="https://github.com/gromber05/codewise-reviewer" target="_blank" rel="noopener noreferrer">View code</a>
            <div className="project-langs">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="project-lang-icon" />
            </div>
          </li>
        </ul>
      </section>
    </FadeInSection>
  )
}