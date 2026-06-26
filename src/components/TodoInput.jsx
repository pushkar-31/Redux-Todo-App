import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

import "../styles/Todo.css";

function TodoInput() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <div className="todo-input">

      <input
        type="text"
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAddTodo}
        disabled={!text.trim()}
      >
        Add
      </button>

    </div>
  );
}

export default TodoInput;