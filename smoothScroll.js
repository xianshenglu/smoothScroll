let animationFrameId = 0;
function smoothScoll(targetScrollTop) {
  let speed = 0.1
  let startTime = 0
  let timeLimit = 2000
  window.cancelAnimationFrame(animationFrameId)
  animationFrameId = window.requestAnimationFrame(step)
  function step(timestamp) {
    startTime = startTime || timestamp
    let interval = timestamp - startTime
    let distance = targetScrollTop - getWinScrollTop()
    let stepSize = speed * distance
    switch (Math.ceil(stepSize)) {
      case 0:
        stepSize = -1
        break
      case 1:
        stepSize = 1
        break
    }
    if (distance !== 0 && interval < timeLimit) {
      window.scrollTo(0, getWinScrollTop() + stepSize)
      animationFrameId = window.requestAnimationFrame(step)
    }
  }
  function getWinScrollTop() {
    return window.scrollY || window.pageYOffset
  }
}