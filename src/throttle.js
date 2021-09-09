function throttle(action, delay) {
  let timeout = null
  let lastRun = 0
  return function () {
    if (timeout) return
    const elapsed = Date.now() - lastRun
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    const runCallback = function () {
      lastRun = Date.now()
      timeout = false
      action.apply(context, args)
    }
    if (elapsed >= delay) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, delay)
    }
  }
}
export { throttle }
