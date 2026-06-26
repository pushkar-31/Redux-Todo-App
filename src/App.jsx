import TodoInput from "./componenets/TodoInput";
import TodoList from "./componenets/TodoList";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
    <h1> redux-todo-app</h1>
    <TodoInput/>
    <TodoList />
    </div>
  );
}

export default  App;