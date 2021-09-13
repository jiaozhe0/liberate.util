/**
 * @description:
 * @param {number} count 并行的梳理
 * @param {array} list
 * @param {function} action 回调函数,返回一个promise
 * @param {number} limit 冲出次数
 * @return {promise}
 */
function keepRun(count, list, action, limit = 3) {
  return new Promise((resolve) => {
    const temList = list.slice()
    const retryMap = {}
    const successList = []
    const failList = []
    let running = 0
    function finished() {
      if (running > 0 || temList.length > 0) return
      resolve({
        failList,
        successList
      })
    }
    function handleEmitter() {
      while (running < count && temList.length) {
        // eslint-disable-next-line no-use-before-define
        next(temList.shift())
        running += 1
      }
    }
    function handleRetry(item) {
      let retryItem = retryMap[item.id || item.photoId] || 0
      // eslint-disable-next-line no-plusplus
      retryMap[item.id] = retryItem++
      if (retryItem >= limit) {
        failList.push(item)
        finished()
      } else {
        temList.push(item)
        handleEmitter()
      }
    }
    function next(item) {
      action(item)
        .then(() => {
          running -= 1
          successList.push(item)
          finished()
          handleEmitter()
        })
        .catch((errItem) => {
          running -= 1
          handleRetry(errItem)
        })
    }
    handleEmitter()
  })
}
export { keepRun }
