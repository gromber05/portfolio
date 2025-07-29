import FadeInSection from './FadeInSection'
import './App.css'
import { useState } from 'react'

export default function Contact() {
	return (
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
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="GitHub"
						/>
					</a>
					<a
						href="https://linkedin.com/in/tuusuario"
						target="_blank"
						rel="noopener noreferrer"
						title="LinkedIn"
					>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="mailto:gonzalorbac@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Email"
					>
						<img
							src="https://img.icons8.com/color/48/000000/gmail-new.png"
							alt="Email"
						/>
					</a>
				</div>
			</section>
		</FadeInSection>
	)
}