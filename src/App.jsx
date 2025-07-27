import { useState } from 'react'
import './App.css'
import avatarImg from './assets/image.jpg'

const pages = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
]

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  const [transitioning, setTransitioning] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const handleNav = (page) => {
    if (page === currentPage) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setTransitioning(false)
    }, 350)
  }

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img
          src={avatarImg}
          alt="Avatar"
          className="avatar"
        />
        <div>
          <h1>Gonzalo Romero Bernal</h1>
          <p className="subtitle">Estudiando Desarrollo de aplicaciones multiplataformas</p>
          <nav>
            {pages.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={currentPage === p.id ? 'active' : ''}
                onClick={e => {
                  e.preventDefault()
                  handleNav(p.id)
                }}
              >
                {p.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <div className={`page-transition${transitioning ? ' fade-out' : ' fade-in'}`}>
          {currentPage === 'about' && (
            <section className="about" id="about">
              <h2>Sobre mí</h2>
              <p>
                Soy un desarrollador apasionado por crear aplicaciones web modernas, funcionales y escalables.
                <span className={`about-more${showMore ? ' show' : ''}`}>
                  Tengo experiencia en React, JavaScript, TypeScript, CSS, y herramientas como Vite, Git y Figma. Me gusta aprender nuevas tecnologías y trabajar en equipo para lograr los mejores resultados.
                </span>
              </p>
              <button onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Ver menos' : 'Ver más'}
              </button>
              <section className="skills">
                <h2>Habilidades</h2>
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
          )}

          {currentPage === 'projects' && (
            <section className="projects" id="projects">
              <h2>Proyectos Destacados</h2>
              <ul>
                <li>
                  <strong>Codewise Reviewer</strong> – Aplicación de tareas con React y Hooks.{' '}
                  <a href="https://github.com/tuusuario/mi-app-react" target="_blank" rel="noopener noreferrer">Ver código</a>
                </li>
                {/* Agrega más proyectos aquí */}
              </ul>
            </section>
          )}

          {currentPage === 'contact' && (
            <section className="contact" id="contact">
              <h2>Contacto</h2>
              <p>
                <strong>Email:</strong> <a href="mailto:gonzalorbac@gmail.com">gonzalorbac@gmail.com</a>
              </p>
              <div className="social-links">
                <a href="https://github.com/gromber05" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer>
        <p className="copyright">© {new Date().getFullYear()} Gonzalo Romero Bernal</p>
      </footer>
    </div>
  )
}

export default App
