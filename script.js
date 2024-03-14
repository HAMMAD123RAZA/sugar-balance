const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

const countdownDate = new Date('Mar 14, 2024 00:00:00').getTime()

const updateTimer = () => {
  const now = new Date().getTime()
  const difference = countdownDate - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  daysElement.textContent = formatTime(days)
  hoursElement.textContent = formatTime(hours)
  minutesElement.textContent = formatTime(minutes)
  secondsElement.textContent = formatTime(seconds)
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : `${time}`
}

setInterval(updateTimer, 1000)
