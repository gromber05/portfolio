import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('route-fade')

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('route-fade-exit')
  }, [location, displayLocation])

  return (
    <div
      className={transitionStage}
      onTransitionEnd={() => {
        if (transitionStage === 'route-fade-exit') {
          setTransitionStage('route-fade')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <div style={{ padding: "2em", textAlign: "center" }}>
            <h1>404</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/about" style={{ color: "#646cff" }}>Go to Home</a>
          </div>
        } />
      </Routes>
    </div>
  )
}