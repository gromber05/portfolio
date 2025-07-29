import avatarImg from './assets/image.jpg'
import FadeInSection from './FadeInSection'
import { useState } from 'react'
import './App.css'

export default function About() {
  const [showMore, setShowMore] = useState(false)
  return (
    <FadeInSection>
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer focused on creating modern, functional, and scalable web applications.
          <span className={`about-more${showMore ? ' show' : ''}`}>
            I have experience with Kotlin, Python, JavaScript, CSS, and tools like Git. I enjoy learning new technologies and working in teams to achieve the best results.
          </span>
        </p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-logos">
            <div className="skill-logo" title="Python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>
            <div className="skill-logo" title="Kotlin">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
            </div>
            <div className="skill-logo" title="JavaScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <div className="skill-logo" title="HTML5">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            </div>
            <div className="skill-logo" title="CSS3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            </div>
            <div className="skill-logo" title="Git">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </div>
            <div className="skill-logo" title="Java">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>
          </div>
        </section>
      </section>
    </FadeInSection>
  )
}