import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"
import { countSchedules, findMaxDate, findMinDate, printLabels } from "../date"
import "./Chart.scss"
ChartJS.register(...registerables)

export function DisplayGraphs({ data }) {
  const [startDate, setStartDate] = useState(findMaxDate(data))

  useEffect(() => {}, [startDate])

  return (
    <>
      <div className="chart-info">
        <label style={{ color: "orange" }}>ChooseDate</label>
        <DatePicker
          onChange={(date) => {
            setStartDate(date)
          }}
          selected={startDate}
          minDate={findMinDate(data)}
          maxDate={findMaxDate(data)}
          showMonthDropdown
          showYearDropdown
          peekNextMonth
          dropdownMode="select"
        />
      </div>
      <div className="chart-container">
        <Bar
          options={{ maintainAspectRatio: false }}
          data={{
            labels: printLabels(startDate, 7),
            datasets: [
              {
                label: "Meal Scheduled",
                data: countSchedules(startDate, 7, data),
                backgroundColor: "orange",
              },
            ],
          }}
        />
      </div>
    </>
  )
}
