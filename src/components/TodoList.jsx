import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  if (todos.length === 0) {
    return (
      <div className="empty-state">

        <h2>📭 No Todos Yet</h2>

        <p>Add your first task above.</p>

      </div>
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
}

export default TodoList;