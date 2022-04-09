import React from "react";

export function GraphInfo({ totalMeal }) {
    return (<div className="container">
        {totalMeal === 0 ? <h1 className="red-big-text">No Meal Scheduled</h1> : <h1 className="big-text">{totalMeal} Meal Scheduled </h1>}
    </div>);
}
