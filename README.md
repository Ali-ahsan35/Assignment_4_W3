# Task Manager

A modern and responsive **Task Manager** web application built with React and Tailwind CSS. This project focuses on clean UI, efficient state management, and real‑world frontend practices such as custom hooks, debounced search, pagination, and theme persistence.

> 📌 **Note:** This project is an internship assignment and demonstrates frontend architecture, not full CRUD functionality.

---

## Live Demo

🔗 **Netlify:** https://task-manager-w3.netlify.app/

---

## Project Description

**Task Manager** is a lightweight task‑viewing application that fetches todo data from the **JSONPlaceholder API** and presents it in a clean, paginated interface. The app includes a debounced search feature for performance optimization and a fully functional dark/light theme toggle that persists user preference using localStorage.

The project emphasizes:

* Reusable components
* Custom React hooks
* Clean folder structure
* Responsive and accessible UI

---

## 🛠️ Tech Stack

* **React** (Vite)
* **Tailwind CSS v4**
* **JavaScript (ES6+)**
* **JSONPlaceholder API**

---

## Features

* Fetch tasks from JSONPlaceholder (read‑only)
* Search functionality with **debounce** (custom hook)
* Pagination for better data handling
* Dark / Light mode toggle
* Theme preference saved in **localStorage**
* Fully responsive UI (mobile‑first)
* Clean component‑based architecture

---

## 🧠 Custom Hooks Used

* **`useDebounce`** – Optimizes search input by delaying API/UI updates
* **`useTheme`** – Manages theme state and persistence

---

## 📁 Project Structure

```
TASK-MANAGER
├── public
├── src
│   ├── assets
│   │   ├── moon.svg
│   │   ├── sun.svg
│   │   ├── task-list-l.svg
│   │   └── react.svg
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskDetailsCard.jsx
│   │   ├── Welcome.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks
│   │   ├── useDebounce.jsx
│   │   └── useTheme.jsx
│   │
│   ├── layouts
│   │   └── MainLayout.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Tasks.jsx
│   │
│   ├── routes
│   │   └── Routes.jsx
│   │
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Screenshots

### Home (Light Mode)
![Home Light](/public/screenshots/Home_light.png)

### Home (Dark Mode)
![Home Dark](/public/screenshots/Home_Dark.png)

### Tasks Page (Dark Mode)
![Tasks Page](/public/screenshots/All_Task_D.png)

### Tasks Page (Light Mode)
![Tasks Page](/public/screenshots/All_Task_L.png)

### Task Details Page (Light Mode)
![Tasks Page](/public/screenshots/Task_Details_L.png)

### Task Details Page (Light Mode)
![Tasks Page](/public/screenshots/Task_Details_D.png)

### 📱 Mobile Responsive View
![Mobile View](/public/screenshots/mobile.png)


---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Ali-ahsan35/Assignment_4_W3.git

# Navigate to project directory
cd task-manager

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Limitations

* No task creation or deletion
* No backend integration


---

## 👤 Author

**Syed Ali Ahsan**

---

## License

This project is created for educational and internship evaluation purposes.
