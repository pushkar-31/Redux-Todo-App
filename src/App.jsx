import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

import "./styles/App.css";

function App() {
  const todos = useSelector((state) => state.todo.todos);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;

  return (
    <div className="container">
      <div className="todo-card">

        <h1>📝 Todo App</h1>
        <p className="subtitle">
          Organize your daily tasks efficiently
        </p>

        <TodoInput />

        <div className="stats">

          <div className="stat">
            <h2>{total}</h2>
            <p>Total</p>
          </div>

          <div className="stat">
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>

          <div className="stat">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

        </div>

        <TodoList />

      </div>
    </div>
  );
}

export default App;