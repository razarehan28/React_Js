import React, { useState } from "react";

import "./AddTask.css";
import Plus from "../../Images/plus.png";

function AddTask({ onAddTodo }) {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler(e) {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }
  const [enteredTodo, setEnteredTodo] = useState([]);
  //  form submission
  function submitHandler(event) {
    const { preventDefault } = event;
    preventDefault();
    // error handling for not giving input
    if (enteredTodo === "") {
      alert("Please enter the todo.");
    } else {
      const defaultTodos = {
        id: Math.random().toString(),
        title: enteredTodo,
      };
      onAddTodo(defaultTodos);
      setEnteredTodo("");
    }
  }
  return (
    <div className="add-task-container">
      <form
        className={isClicked ? "form" : "form-hidden"}
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
      </form>
      <button className="btn" onClick={clickHandler}>
        <img src={Plus} alt="Plus" />
      </button>
    </div>
  );
}

export default AddTask;
