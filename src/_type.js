// 判断是否是空或者为定义
export function isUndef(v) {
  return v === undefined || v === null
}
// 判断不为空
export function isDef(v) {
  return v !== undefined && v !== null
}
// 判断是否是原始类型
export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
// 是否Object类型
export function isObject(v) {
  return v !== null && typeof obj === 'object'
}

// 是否是promise
export function isPromise(v) {
  return v && typeof v.then === 'function'
}
// eslint-disable-next-line no-underscore-dangle
const _toString = Object.prototype.toString

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}
export function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]'
}

export function toNumber(val) {
  const n = parseFloat(val)
  // eslint-disable-next-line no-restricted-globals
  return isNaN(n) ? val : n
}
