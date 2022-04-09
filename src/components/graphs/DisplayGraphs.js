import React, { useState, useEffect, useMemo } from "react"
import "react-datepicker/dist/react-datepicker.css"
import { Chart as ChartJS, registerables } from "chart.js"
import {
  countSchedules,
  findMaxDate,
  findMinDate,
  printDateLabels,
  print3HoursLabels,
} from "./date"
import "./Chart.scss"
import { GraphHeader } from "./GraphHeader"
import { ChartContainer } from "./ChartContainer"
import { GraphInfo } from "./GraphInfo"
ChartJS.register(...registerables)

export function DisplayGraphs({ data }) {
  const maxDate = useMemo(() => findMaxDate(data), [])
  const minDate = useMemo(() => findMinDate(data), [])
  const [startDate, setStartDate] = useState(maxDate)
  const [chartType, setChartType] = useState("bar")
  const [isDayGraph, setIsDayGraph] = useState(false)
  const [schedules, setSchedules] = useState(countSchedules(startDate, data))

  const toggleGraph = (schedules, isDayGraph) => {
    if (isDayGraph) {
      setSchedules([...schedules])
      setIsDayGraph(true)
    }
  }

  useEffect(() => {
    setIsDayGraph(false)
    setSchedules(countSchedules(startDate, data))
  }, [startDate])

  return (
    <>
      <GraphHeader
        setStartDate={setStartDate}
        startDate={startDate}
        minDate={minDate}
        maxDate={maxDate}
        setChartType={setChartType}
      />
      <GraphInfo
        totalMeal={schedules.reduce((total, val) => total + val.length, 0)}
      />
      <ChartContainer
        chartType={chartType}
        schedules={schedules}
        labels={
          isDayGraph
            ? print3HoursLabels()
            : printDateLabels(startDate, schedules)
        }
        isDayGraph={isDayGraph}
        toggleGraph={toggleGraph}
      />
    </>
  )
}
