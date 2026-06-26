import { useDispatch } from "react-redux";

import {

deleteTodo,

toggleTodo

}

from "../features/todo/todoSlice";

import "../styles/Todo.css";

function TodoItem({ todo }) {

const dispatch=

useDispatch();

return(

<div className="todo-item">

<span

className={

todo.completed?

"completed":""

}

>

{todo.text}

</span>

<div>

<button

onClick={()=>dispatch(

toggleTodo(todo.id)

)}

>

{

todo.completed?

"Undo":

"Complete"

}

</button>

<button

onClick={()=>dispatch(

deleteTodo(todo.id)

)}

>

Delete

</button>

</div>

</div>

)

}

export default TodoItem;