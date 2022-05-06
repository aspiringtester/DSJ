const dateElement = document.querySelector('#showDate')
const timeElement = document.querySelector('#showTime')
// FUNCTION FOR TIME OBJECT
function tickingTime() {
  let timeNow = new Date()
  return (timeElement.innerText = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`)
}
// DATE OBJECT
let d = new Date()

// DISPLAY TIME AND DATE
tickingTime()
setInterval(tickingTime, 1000)
dateElement.innerText = `${d.getDate()} / ${
  d.getMonth() + 1
} / ${d.getFullYear()}`
