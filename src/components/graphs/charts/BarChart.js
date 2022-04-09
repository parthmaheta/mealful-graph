import React from "react"
import { Bar } from "react-chartjs-2"
import { countItems, sortScheduleTime } from "../date"

export function BarChart({ isDayGraph, toggleGraph, schedules, labels }) {
  return (
    <Bar
      options={{
        maintainAspectRatio: false,
        onClick: isDayGraph
          ? null
          : function (evt, element) {
              if (element.length > 0) {
                toggleGraph(sortScheduleTime(schedules[element[0].index]), true)
              }
            },
      }}
      data={{
        labels: labels,

        datasets: [
          {
            label: "Meal Scheduled",
            data: countItems(schedules),
            hoverBorderWidth: 3,
            hoverBorderColor: "orange",
            hoverBackgroundColor: "black",
            backgroundColor: "orange",
          },
        ],
      }}
    />
  )
}
