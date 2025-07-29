# Gonzalo Romero Bernal – Personal Portfolio

Welcome to my personal portfolio, built with **React** and **Vite**. Here you’ll find information about me, my featured projects, technical skills, and ways to get in touch. The site is designed to be modern, responsive, and visually engaging, with smooth page transitions and interactive elements.

---

## 🚀 Features

- **Multi-page navigation:** About Me, Projects, and Contact sections, each with their own route.
- **Animated transitions:** Smooth fade and scale animations between pages for a polished user experience.
- **Skills showcase:** Technology logos and a dynamic skills section.
- **Dynamic blog/posts:** Posts are fetched from a Python FastAPI backend, making the About Me section dynamic and extensible.
- **Responsive design:** Looks great on desktop, tablet, and mobile.
- **Contact form:** Integrated with Formspree for secure, spam-protected messaging.
- **Accessible & semantic HTML:** Focused on usability and best practices.
- **Dark mode ready:** Modern color palette that adapts to user preferences.
- **Clean, maintainable code:** Modular React components and modern CSS.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) – Frontend library
- [Vite](https://vitejs.dev/) – Lightning-fast build tool
- [FastAPI](https://fastapi.tiangolo.com/) – Python backend for posts/blog API
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – Modern, responsive styling
- [Devicon](https://devicon.dev/) – Technology icons
- [Formspree](https://formspree.io/) – Contact form backend
- [ESLint](https://eslint.org/) – Code quality and linting

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

### 3. Start the React development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

### 4. (Optional) Start the Python FastAPI backend

If you want to enable dynamic posts/blog functionality:

1. Go to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    pip install fastapi uvicorn
    ```
3. Run the API server:
    ```bash
    uvicorn main:app --reload --port 8000
    ```

The API will be available at [http://localhost:8000/api/posts](http://localhost:8000/api/posts).

---

## ✨ Customization

- **Add your own posts:** Edit `backend/posts.json` or use a script to add new posts.
- **Update skills and projects:** Modify the corresponding React components in `/src`.
- **Change theme or colors:** Edit `/src/App.css` and `/src/index.css` for a personalized look.
- **Replace avatar:** Update `/src/assets/image.jpg` with your own photo.

---

## 📁 Project Structure

```
├── backend/           # Python FastAPI backend (for posts/blog)
│   └── main.py
├── src/
│   ├── assets/
│   ├── components/
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
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
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/gonzalo-romero-bernal-72985633b/) or check out my [GitHub](https://github.com/gromber05).

---

## 📬 Contact

You can reach me via the contact form on the site or directly at [gonzalorbac@gmail.com](mailto:gonzalorbac@gmail.com).

---

**Thank you for visiting my portfolio!**