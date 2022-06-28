import { useState, useEffect } from "react";

import "./App.css";
import HeaderTodo from "./Components/HeaderTodo/HeaderTodo";
import TodoList from "./Components/TodoList/TodoList";
import AddTask from "./Components/AddTask/AddTask";

function getDataFromLocalStorage() {
  const local = new Date();
  const current = local.getTime();
  let setTime = localStorage.getItem("date"); // from localstorage
  if (current - setTime > 24 * 60 * 60 * 1000) {
    localStorage.clear();
  }
  const dataValue = localStorage.getItem("todos");
  if (dataValue) {
    return JSON.parse(dataValue);
  } else {
    return [];
  }
}
function App() {
  const [todos, setTodos] = useState(getDataFromLocalStorage());
  const addTodoHandler = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <div className="main">
        <HeaderTodo />
        <TodoList todos={todos} />
        <AddTask onAddTodo={addTodoHandler} />
      </div>
    </div>
  );
}

export default App;
