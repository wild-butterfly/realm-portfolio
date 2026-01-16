# 🌌 Realm Portfolio

A sci-fi–inspired interactive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.  
Instead of a traditional static site, this project creates a small “realm” with animated transitions, glowing UI, and a game-like experience.

---

## 🚀 Live Demo

👉 https://wild-butterfly.github.io/realm-portfolio/

---

## ✨ Features

- Portal intro screen with custom sound & radial animation
- Animated Realm menu with three main sections:
  - **Builds & Creations**
  - **Knowledge & Skills**
  - **About the Developer**
- Developer Card with **stats, skills and profile photo**
- Glow-based UI with **sci-fi gradients** and gamer typography
- Fully responsive across all devices

---

## 🧩 Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- React Icons
- GitHub Pages for hosting

---

## 📁 Project Structure

```text
realm-portfolio/
├─ src/
│  ├─ assets/
│  │  ├─ images/        # Images used across the app
│  │  ├─ sounds/        # Sound effects
│  │  └─ icons/         # UI icons
│  │
│  ├─ components/       # Reusable UI components
│  │  ├─ Portal.jsx
│  │  ├─ Menu.jsx
│  │  └─ DeveloperCard.jsx
│  │
│  ├─ pages/            # Application pages
│  │  ├─ Realm.jsx
│  │  ├─ Builds.jsx
│  │  ├─ Skills.jsx
│  │  └─ About.jsx
│  │
│  ├─ App.jsx           # Root application component
│  └─ main.jsx          # Application entry point
│
├─ public/               # Static public assets
├─ dist/                 # Production build output
├─ package.json
├─ vite.config.js
└─ README.md

