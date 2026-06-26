import "../styles/Todo.css";
function TodoItem({ todo }) {

  return (

    <div className="todo-item">

      <span>

        {todo.text}

      </span>

    </div>

  );

}

export default TodoItem;