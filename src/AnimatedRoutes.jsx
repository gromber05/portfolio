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
      className={`route-anim-container ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'route-fade-exit') {
          setTransitionStage('route-fade')
          setDisplayLocation(location)
        }
      }}
    >
      <style>
        {`
          .route-anim-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .route-fade {
            animation: fadeInScale 500ms cubic-bezier(.4,0,.2,1);
          }
          .route-fade-exit {
            animation: fadeOutScale 400ms cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.97) translateY(20px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0);
            }
          }
          @keyframes fadeOutScale {
            from {
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0);
            }
            to {
              opacity: 0;
              transform: scale(1.03) translateY(-20px);
              filter: blur(8px);
            }
          }
        `}
      </style>
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "2em", textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "4em",
                  marginBottom: "0.2em",
                  animation: "float 2s ease-in-out infinite"
                }}
              >
                404 😪
              </h1>
              <style>
                {`
                  @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                  }
                  a.return-link {
                    color: #7a7aff;
                    font-weight: bold;
                    transition: 
                      color 0.2s,
                      text-shadow 0.3s cubic-bezier(.4,0,.2,1),
                      transform 0.3s cubic-bezier(.4,0,.2,1);
                    text-decoration: none;
                    display: inline-block;
                    position: relative;
                  }
                  a.return-link:hover {
                    color: #4444aa;
                    text-shadow: 0 2px 8px #23234677, 0 0px 2px #222;
                    transform: scale(1.04) translateY(-2px) rotate(-1deg);
                    text-decoration: underline wavy #4444aa;
                  }
                `}
              </style>
              <p>
                ¡Oops! Has llegado a una dimensión desconocida.<br />
                Aquí no hay nada... salvo este mensaje y tu curiosidad.
              </p>
              <img
                src="https://media.tenor.com/U5QXJDAXq_AAAAAi/erro.gif"
                alt="Confused Travolta"
                style={{ width: "200px", margin: "1em auto", display: "block" }}
              />
              <a
                href="/about"
                className="return-link"
              >
                🚀 Volver al inicio y seguir explorando
              </a>
            </div>
          }
        />
      </Routes>
    </div>
  )
}