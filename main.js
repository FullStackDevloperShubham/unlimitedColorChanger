// Generating random color


const randomColor = function () {
  const hexValue = "0123456789ABCDEF"
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)]
  }
  return color
};

let startAndStopChanginColor;
const startChangingColor = function () {
  if (!startAndStopChanginColor) {
    startAndStopChanginColor = setInterval(function () {
      document.body.style.backgroundColor = randomColor()
    }, 1000)
  }
}

const stopChangingColor = function () {
  clearInterval(startAndStopChanginColor)
  startAndStopChanginColor = null
}


document.querySelector('#start').addEventListener('click', function (e) {
  startChangingColor()
})
document.querySelector('#stop').addEventListener('click', function (e) {
  stopChangingColor()
})