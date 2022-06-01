import React, { useState } from "react";

import "./AddTask.css";
import plus from "../../Images/plus.png";

function AddTask({ onAddTodo }) {
  const [enterTodo, setEnteredTodo] = useState([]);
  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    !clicked ? setClicked(true) : setClicked(false);
  }
  // on form submission handler
  function addNewTaskHandler(event) {
    event.preventDefault();
    // handling  not giving input
    if (enterTodo === "") {
      alert("Enter the todo.");
    } else {
      const defaultTodos = {
        id: Math.random().toString(),
        title: enterTodo,
      };
      onAddTodo(defaultTodos);
      setEnteredTodo("");
    }
  }
  const Escape = (e) => {
    if (e.code === "Escape") {
      setClicked(false);
    }
  };
  return (
    <div className="add-task-container">
      <form
        className={clicked ? "form-container" : "form-hidden"}
        onSubmit={addNewTaskHandler}
      >
        <input
          type="text"
          value={enterTodo}
          onKeyDown={Escape}
          onChange={(event) => setEnteredTodo(event.target.value)}
          placeholder="Enter Your Task You Want"
        />
      </form>
      <button
        className={clicked ? "btn-hidden" : "button"}
        onClick={clickHandler}
      >
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default AddTask;
