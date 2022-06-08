import React from "react";

import ListItem from "./ListItem";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <div>
      <div className="list-container">
        {todos && todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}
export default TodoList;
