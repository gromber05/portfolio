// AdminPanel.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminPanel() {
  const [inputToken, setInputToken] = useState("")
  const [tokenOk, setTokenOk] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    // Intenta hacer una petición protegida con el token
    const res = await fetch("http://localhost:8000/api/posts", {
      headers: { "Authorization": `Bearer ${inputToken}` }
    })
    if (res.status === 401) {
      setMsg("Invalid token")
      return
    }
    setTokenOk(true)
    setMsg("")
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${inputToken}`
      },
      body: JSON.stringify({ title, content, date })
    })
    const data = await res.json()
    setMsg(data.message || data.detail)
  }

  const handleGoHome = () => {
    navigate("/")
  }

  if (!tokenOk) {
    return (
      <form onSubmit={handleLogin} className="admin-panel-form">
        <input
          type="password"
          placeholder="Enter admin token"
          value={inputToken}
          onChange={e => setInputToken(e.target.value)}
          required
        />
        <button type="submit">Access Admin Panel</button>
        <button type="button" onClick={handleGoHome} style={{marginTop: "1em"}}>Back to Home</button>
        {msg && <div>{msg}</div>}
      </form>
    )
  }

  return (
    <form onSubmit={handleAdd} className="admin-panel-form">
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required />
      <input placeholder="Date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Add Post</button>
      <button type="button" onClick={handleGoHome} style={{marginTop: "1em"}}>Back to Home</button>
      {msg && <div>{msg}</div>}
    </form>
  )
}