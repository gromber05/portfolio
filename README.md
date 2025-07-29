# Gonzalo Romero Bernal – Personal Portfolio

Welcome to my personal portfolio, built with React and Vite. Here you’ll find information about me, my featured projects, technical skills, and ways to get in touch. The site is modern, responsive, and visually engaging, with smooth transitions and interactive elements.

---

## Features

- Multi-page navigation: About Me, Projects, Contact, and Admin sections.
- Animated transitions for a polished user experience.
- Skills showcase with technology logos.
- Dynamic blog/posts: Managed via a Python FastAPI backend with persistent storage.
- Responsive design for all devices.
- Contact form integrated with Formspree.
- Accessible, semantic HTML.
- Dark mode ready.
- Modular React components and modern CSS.
- Private admin panel to manage posts (token-protected).

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Devicon](https://devicon.dev/)
- [Formspree](https://formspree.io/)
- [ESLint](https://eslint.org/)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React development server & Python backend Rest API

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).
The API will be available at [http://localhost:8000/api/posts](http://localhost:8000/api/posts).

---

### 4. Set your admin token

Create a file named `token.env` in the root of your project (or backend) with:

```
ADMIN_TOKEN=your-secret-token
```

This token is required to add or delete posts via the admin panel.

---

## Customization

- Add your own posts: Use the admin panel or edit `backend/posts.json`.
- Update skills and projects: Edit the React components in `/src`.
- Change theme or colors: Edit `/src/App.css` and `/src/index.css`.
- Replace avatar: Update `/src/assets/image.jpg`.

---

## 📁 Project Structure

```
├── backend/
│   ├── main.py
│   ├── posts.json
│   └── token.env
├── src/
│   ├── assets/
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── AdminPanel.jsx
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── public/
├── index.html
├── package.json
└── README.md
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ About Me

I’m Gonzalo Romero Bernal, a passionate developer focused on building modern, scalable web applications.  
Connect with me on [LinkedIn](https://www.linkedin.com/in/gonzalo-romero-bernal-72985633b/) or [GitHub](https://github.com/gromber05).

---

## 📬 Contact

You can reach me via the contact form on the site or directly at [gonzalorbac@gmail.com](mailto:gonzalorbac@gmail.com).

---

**Thank you for visiting my portfolio!**