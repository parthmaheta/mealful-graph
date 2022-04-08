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

//find min date from array of objects(data)
export function findMaxDate(data) {
  return new Date(data[data.length - 1].schedule_time)
}

export function findMinDate(data) {
  return new Date(data[0].schedule_time)
}
//return array of labels from date to last given day
export function printLabels(date, day) {
  const months = [
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
  const labels = []
  for (let i = 0; i < day; i++) {
    let d = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
    labels.push(d.getDate() + "-" + months[d.getMonth()])
  }
  return labels.reverse()
}

//count schedules from date to last given day from data array
export function countSchedules(date, day, data) {
  const schedules = [0, 0, 0, 0, 0, 0, 0]
  data.reduce((acc, curr) => {
    const scheduledDate = new Date(curr.schedule_time).getTime()
    const firstMilliSecondOfDay = getFirstMillisecondOfDay(date)
    if (
      scheduledDate < getMSFromDateToDay(date, 1) &&
      scheduledDate >= getMilisecondsOfDaysAgo(date, 6)
    ) {
      const millisecondsFromFirstDay =
        getMSFromDateToDay(date, 1) - scheduledDate
      schedules[
        Math.floor(millisecondsFromFirstDay / getMillisecondsOfADay())
      ]++
    }
  })

  return schedules.reverse()
}

function getMSFromDateToDay(date, day) {
  return getFirstMillisecondOfDay(date) + 86400 * 1000 * day
}
