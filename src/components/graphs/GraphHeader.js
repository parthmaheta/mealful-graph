import React from "react"
import DatePicker from "react-datepicker"

export function GraphHeader({
  setStartDate,
  startDate,
  minDate,
  maxDate,
  setChartType,
}) {
  return (
    <div className="chart-info">
      <div>
        <label>ChooseDate</label>
        <DatePicker
          onChange={(date) => {
            setStartDate(date)
          }}
          selected={startDate}
          minDate={minDate}
          maxDate={maxDate}
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
  )
}
