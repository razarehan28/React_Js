import React from "react";

import "./HeaderDate.css";

function HeaderDate() {
  const date = new Date();
  const todayDate = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const weekday = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "short" });

  return (
    <div className="header-todo">
      <div className="date">
        <div className="today-date">{todayDate}</div>
        <div>
          <div className="month">{month.toUpperCase()}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="weekday">{weekday.toUpperCase()}</div>
    </div>
  );
}

export default HeaderDate;
