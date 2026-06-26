# 📝 Redux Todo App

A modern and responsive Todo application built using **React** and **Redux Toolkit**. This project demonstrates centralized state management using Redux Toolkit while following a scalable feature-based folder structure.

## 🚀 Features

- ➕ Add new todos
- 🗑️ Delete todos
- ✅ Mark todos as completed
- ↩️ Undo completed todos
- 📊 Task statistics (Total, Completed, Pending)
- 📭 Empty state message
- 📱 Responsive design
- 🎨 Modern UI

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- CSS3
- Vite
- Git & GitHub

---

## 📂 Folder Structure

```text
src
│
├── app
│   └── store.js
│
├── features
│   └── todo
│       └── todoSlice.js
│
├── components
│   ├── TodoInput.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
│
├── styles
│   ├── App.css
│   └── Todo.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/pushkar-31/redux-todo-app.git
```

Move into the project

```bash
cd redux-todo-app
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## 📖 Redux Concepts Used

- configureStore()
- createSlice()
- Provider
- useSelector()
- useDispatch()
- Redux Store
- Reducers
- Actions
- State Management

---

## 🔄 Redux Flow

```text
User Action
      │
      ▼
dispatch()
      │
      ▼
Reducer
      │
      ▼
Redux Store Updated
      │
      ▼
useSelector()
      │
      ▼
UI Re-render
```

---

## 🌟 Future Improvements

- Edit Todo
- Search Todos
- Filter Todos
- Dark Mode
- Local Storage
- Due Dates
- Categories

---

## 👨‍💻 Author

**Pushkar Shelke**

GitHub: https://github.com/pushkar-31

---