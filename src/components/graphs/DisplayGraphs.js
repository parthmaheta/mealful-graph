import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Chart as ChartJS, registerables } from "chart.js"
import { Bar, Line, Scatter } from "react-chartjs-2"
import { countSchedules, findMaxDate, findMinDate, printLabels } from "../date"
import "./Chart.scss"
ChartJS.register(...registerables)

export function DisplayGraphs({ data }) {
  const [startDate, setStartDate] = useState(findMaxDate(data))
  const [chartType, setChartType] = useState("bar")

  useEffect(() => {}, [startDate])

  return (
    <>
      <div className="chart-info">
        <div>
          <label>ChooseDate</label>
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
        <div>
          <label>Chart Type</label>
          <select onChange={(e) => setChartType(e.currentTarget.value)}>
            <option value="bar">Bar</option>
            <option value="line">Line</option>
          </select>
        </div>
      </div>
      <ChartContainer chartType={chartType} startDate={startDate} data={data} />
    </>
  )
}
function ChartContainer({ chartType, startDate, data }) {
  return (
    <div className="chart-container">
      {chartType === "line" ? (
        <Line
          options={{
            maintainAspectRatio: false,
          }}
          data={{
            labels: printLabels(startDate, 7),

            datasets: [
              {
                label: "Meal Scheduled",
                data: countSchedules(startDate, 7, data),

                borderWidth: 3,
                borderColor: "orange",
                pointBackgroundColor: "black",
                pointBorderColor: "black",
              },
            ],
          }}
        />
      ) : (
        <Bar
         
          options={{
            maintainAspectRatio: false,
            onClick: function (evt, element) {
              if (element.length > 0) {
                console.log(element, element[0]._datasetInde)
              }
            },
          }}
          
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
      )}
    </div>
  )
}
