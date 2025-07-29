import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import avatarImg from './assets/image.jpg'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import AnimatedRoutes from './AnimatedRoutes'

const pages = [
	{ id: 'about', label: 'About Me', path: '/about' },
	{ id: 'projects', label: 'Projects', path: '/projects' },
	{ id: 'contact', label: 'Contact', path: '/contact' }
]

function App() {
	const location = useLocation()
	const [showMore, setShowMore] = useState(false)

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
							<Link
								key={p.id}
								to={p.path}
								className={location.pathname === p.path ? 'active' : ''}
							>
								{p.label}
							</Link>
						))}
					</nav>
				</div>
			</header>
			<main>
				<AnimatedRoutes />
			</main>
			<footer>
				<p className="copyright">© {new Date().getFullYear()} Gonzalo Romero Bernal</p>
			</footer>
		</div>
	)
}

export default App
