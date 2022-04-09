import React from "react";
import { Line } from "react-chartjs-2";
import { countItems, sortScheduleTime } from "../date";

export function LineChart({isDayGraph, toggleGraph, schedules, labels}) {
  return <Line

    options={{
      maintainAspectRatio: false, onClick: isDayGraph ? null : function (evt, element) {
        if (element.length > 0) {
          toggleGraph(sortScheduleTime(schedules[element[0].index]), true);
        }
      },
    }}
    data={{
      labels: labels,

      datasets: [
        {
          label: "Meal Scheduled",
          data: countItems(schedules),
          hoverBorderWidth: 2,
          hoverBackgroundColor: "orange",
          borderWidth: 3,
          borderColor: "orange",
          pointBackgroundColor: "black",
          pointBorderColor: "black",
        },
      ],
    }} />;
}
