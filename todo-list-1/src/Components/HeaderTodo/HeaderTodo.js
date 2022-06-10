import React from "react";
import "./HeaderTodo.css";

function HeaderTodo() {
  const CurrentDate = new Date();
  const day = CurrentDate.toLocaleString("en-US", { day: "2-digit" });
  const month = CurrentDate.toLocaleString("en-US", { month: "short" });
  const year = CurrentDate.toLocaleString("en-US", { year: "numeric" });
  const weekday = CurrentDate.toLocaleString("en-us", { weekday: "long" });
  //storing it in local storage
  const current = CurrentDate.getTime();
  localStorage.setItem("date", JSON.stringify(current));
  return (
    <div className="header">
      <div className="date">
        <div className="day">{day}</div>
        <div>
          <div className="month">{month}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="weekday">{weekday.toUpperCase()}</div>
    </div>
  );
}

export default HeaderTodo;
