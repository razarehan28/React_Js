import { useState } from "react";

import "./App.css";
import TodoList from "./Components/TodoList";
import AddTask from "./Components/AddTask/AddTask";
import defaultTodos from "./Components/ListItems.json";
import HeaderTodo from "./Components/HeaderTodo/HeaderTodo";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  //  input will be submitted via inputForm
  const addTodoHandler = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };
  return (
    <div className="App">
      <div className="todo-container">
        <HeaderTodo />
        <TodoList todos={todos} />
        <AddTask onAddTodo={addTodoHandler} />
      </div>
    </div>
  );
}

export default App;
