import { useState } from 'react'
import './App.css'
import avatarImg from './assets/logo2.png'
import FadeInSection from './FadeInSection'

const pages = [
	{ id: 'about', label: 'About Me' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' }
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
					<p className="subtitle">Studying Multiplatform Application Development</p>
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
						<FadeInSection>
							<section className="about" id="about">
								<h2>About Me</h2>
								<div className="aboutme-section">
									<div className="aboutme-photo">
										<img
											src={avatarImg}
											alt="About Me"
											className="aboutme-img"
										/>
									</div>
									<div className="aboutme-text">
										<p>
											Hi! I'm Gonzalo Romero Bernal, a passionate developer focused on creating modern, functional, and scalable web applications. I enjoy learning new technologies and working in teams to achieve the best results.
										</p>
									</div>
								</div>
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
					)}

					{currentPage === 'projects' && (
						<FadeInSection>
							<section className="projects" id="projects">
								<h2>Featured Projects</h2>
								<ul>
									<li>
										<strong>Codewise Reviewer</strong> – AI-powered code review application.{' '}
										<a href="https://github.com/gromber05/codewise-reviewer" target="_blank" rel="noopener noreferrer">View code</a>
									</li>
									{/* Add more projects here */}
								</ul>
							</section>
						</FadeInSection>
					)}

					{currentPage === 'contact' && (
						<FadeInSection>
							<section className="contact" id="contact">
								<h2>Contact</h2>
								<p>
									<strong>Email:</strong> <a href="mailto:gonzalorbac@gmail.com">gonzalorbac@gmail.com</a>
								</p>
								<div className="social-links">
									<a href="https://github.com/gromber05" target="_blank" rel="noopener noreferrer">GitHub</a>
									<a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
								</div>
							</section>
						</FadeInSection>
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
