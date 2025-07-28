import { useState } from 'react'
import './App.css'
import avatarImg from './assets/image.jpg'
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
					)}

					{currentPage === 'projects' && (
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
					)}

					{currentPage === 'contact' && (
						<FadeInSection>
							<section className="contact" id="contact">
								<h2>Contact</h2>
								<p>
									If you have any questions, want to collaborate, or just want to say hello, feel free to reach out using the form below. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. I will do my best to respond as soon as possible!
								</p>
								<form
									className="contact-form"
									onSubmit={e => {
										e.preventDefault()
										
									}}
								>
									<label>
										Name
										<input type="text" name="name" required autoComplete="off" />
									</label>
									<label>
										Email
										<input type="email" name="email" required autoComplete="off" />
									</label>
									<label>
										Message
										<textarea name="message" rows={4} required />
									</label>
									<button type="submit">Send Message</button>
								</form>
	
								<div className="contact-icons">
									<a
										href="https://github.com/gromber05"
										target="_blank"
										rel="noopener noreferrer"
										title="GitHub"
									>
										<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
									</a>
									<a
										href="https://linkedin.com/in/tuusuario"
										target="_blank"
										rel="noopener noreferrer"
										title="LinkedIn"
									>
										<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
									</a>
									<a 
										href="mailto:gonzalorbac@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
										title="Email" 
									>
										<img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Email" />
									</a>
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
