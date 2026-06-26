import "../styles/Todo.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";

function TodoInput() {

    const [text,setText] = useState("");

    const dispatch = useDispatch();

    const handleAddTodo =() => {
        if(text.trim() === "") return;

        dispatch(
            addTodo({
                id:Date.now(),
                text:text,
            })
        );

        setText("");
    };

      return (
    <div className="todo-input">

      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add
      </button>

    </div>
  );
}

export default TodoInput;
