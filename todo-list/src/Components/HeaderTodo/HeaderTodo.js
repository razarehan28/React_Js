import React from "react";

import "./HeaderTodo.css";

function HeaderTodo() {
  const date = new Date();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const weekday = date.toLocaleString("en-us", { weekday: "long" });
  return (
    <div className="header">
      <div className="date">
        <div className="day">{day}</div>
        <div>
          <div className="month">{month.toUpperCase()}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="weekday">{weekday.toUpperCase()}</div>
    </div>
  );
}

export default HeaderTodo;