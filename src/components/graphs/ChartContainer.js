import React from "react"
import { LineChart } from "./charts/LineChart"
import { BarChart } from "./charts/BarChart"

export function ChartContainer({
  chartType,
  schedules,
  labels,
  toggleGraph,
  isDayGraph,
}) {
  return (
    <div className="chart-container">
      {chartType === "line" ? (
        <LineChart
          isDayGraph={isDayGraph}
          toggleGraph={toggleGraph}
          schedules={schedules}
          labels={labels}
        />
      ) : (
        <BarChart
          isDayGraph={isDayGraph}
          toggleGraph={toggleGraph}
          schedules={schedules}
          labels={labels}
        />
      )}
    </div>
  )
}
