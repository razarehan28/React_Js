import React, { useState } from "react";

import taskIcon from "../../Images/checked.jpg";
function ListItems({ todo }) {
  const [checked, setChecked] = useState(localStorage.getItem(todo.id));
  //  handling  the input checkbox
  const checkedHandler = (event) => {
    const notChecked = event.target.checked;
    if (notChecked) {
      setChecked(true);
      localStorage.setItem(todo.id, true);
    } else {
      setChecked(false);
      localStorage.removeItem(todo.id);
    }
  };
  return (
    <div className={checked ? "list completed" : "list not-completed"}>
      <p>{todo.title}</p>
      <input
        className="list-checkbox"
        type="checkbox"
        onChange={checkedHandler}
      />
      <img
        className={checked ? "task-icon show" : "task-icon hidden"}
        src={taskIcon}
        alt=""
      />
    </div>
  );
}

export default ListItems;
