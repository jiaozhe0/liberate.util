/**
 * @description:
 * @param {fn} action 回调函数
 * @param {number} delay 延迟时间
 * @return {*}
 */
function debounce(action, delay) {
  let timeout = null
  return function () {
    const ctx = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      action.apply(ctx, args)
    }, delay)
  }
}

export { debounce }
