import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

function TodoList() {

  const todos = useSelector(
    (state) => state.todo.todos
  );

  return (

    <div>

      {

        todos.length === 0 ?

        (

          <p>No Todos Found</p>

        )

        :

        (

          todos.map((todo) => (

            <TodoItem
              key={todo.id}
              todo={todo}
            />

          ))

        )

      }

    </div>

  );
}

export default TodoList;