import React, { useState } from "react";

import "./AddTask.css";
import Plus from "../../Images/plus.png";

function AddTask({ onAddTodo }) {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler(e) {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
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
