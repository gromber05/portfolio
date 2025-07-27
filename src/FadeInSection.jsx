import { useRef, useEffect, useState } from 'react'

export default function FadeInSection({ children }) {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-in-section${isVisible ? ' visible' : ''}`}
    >
      {children}
    </div>
  )
}