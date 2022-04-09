//get firstmilliseconds of the date
export function getFirstMillisecondOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

//return milliseconds of the date
export function getMilisecondsOfDaysAgo(date, day) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day)
}

//returns milliseconds of a day
export function getMillisecondsOfADay() {
  return 86400 * 1000
}

//find max date from array of objects(data)
export function findMaxDate(data) {
  let maxDate = new Date(data[0].item_date)
  for (let i in data) {
    if (maxDate < new Date(data[i].item_date)) {
      maxDate = new Date(data[i].item_date)
    }
  }

  return maxDate
}

export function findMinDate(data) {
  let minDate = new Date(data[0].item_date)
  for (let i in data) {
    if (minDate > new Date(data[i].item_date)) {
      minDate = new Date(data[i].item_date)
    }
  }

  return minDate
}
//return array of unique date in dd-MM fromat from data array of objects
export function printDateLabels(date, data) {
  let labels = data.reduce((prev, curr) => {
    if (
      prev.indexOf(
        getFirstMillisecondOfDay(new Date(curr[0].schedule_time))
      ) === -1
    ) {
      prev.push(getFirstMillisecondOfDay(new Date(curr[0].schedule_time)))
    }
    return prev
  }, [])

  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return labels.map((item) => {
    return new Date(item).getDate() + "-" + Months[new Date(item).getMonth()]
  })
}

//count schedules from date to last given day from data array
export function countSchedules(date, data) {
  let schedules = data.filter(
    (value) =>
      getFirstMillisecondOfDay(date) ===
      getFirstMillisecondOfDay(new Date(value.item_date))
  )

  schedules = schedules.reduce(
    (prev, val) => {
      if (getFirstMillisecondOfDay(new Date(val.schedule_time)) in prev) {
        prev[getFirstMillisecondOfDay(new Date(val.schedule_time))].push({
          ...val,
        })
      } else {
        prev[getFirstMillisecondOfDay(new Date(val.schedule_time))] = [
          { ...val },
        ]
      }
      return prev
    },

    {}
  )

  schedules = Object.values(schedules).map((value) => value)

  return schedules
}

function getMSFromDateToDay(date, day) {
  return getFirstMillisecondOfDay(date) + 86400 * 1000 * day
}

export function sortScheduleTime(arrDates) {
  //0 to 3,3 to 6,6 to 9,9 to 12 ...21 to 24
  const hoursBuckets = [[], [], [], [], [], [], [], []]

  arrDates.forEach((date) => {
    const index = Math.floor(new Date(date.schedule_time).getHours() / 3)
    hoursBuckets[index].push({ ...date })
  })

  return hoursBuckets
}

export function countItems(arr) {
  return arr.reduce((prev, val) => {
    prev.push(val.length)
    return prev
  }, [])
}

export function print3HoursLabels() {
  return [
    "12 To 3am",
    "3 TO 6am",
    "6 To 9am",
    "9 To 12pm",
    "12 To 3pm",
    "3 To 6pm",
    "6 To 9pm",
    "9 To 12am",
  ]
}
