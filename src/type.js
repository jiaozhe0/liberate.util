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

// 类型判断
const _toString = Object.prototype.toString
// 数据类型：Object, Array
export function toRawType(v) {
  return _toString.call(v).slice(8, -1)
}
// 判断是否是对象
export function isPlainObject(v) {
  return _toString.call(v) === '[object Object]'
}
// 类型转换
export function toString(val) {
  return val === null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
    ? JSON.stringify(val, null, 2)
    : String(val)
}
export function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

// 原型
const { hasOwnProperty } = Object.prototype
export function hasOwn(obj, key) {
  return hasOwnProperty(obj, key)
}

// 合并
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}
/**
 * Merge an Array of Objects into a single Object.
 */
export function toObject(arr) {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
// 宽松比较
export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)

  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => looseEqual(e, b[i]))
      }
      if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      }
      if (!isArrayA && !isArrayB) {
        const keyA = Object.keys(a)
        const keyB = Object.keys(b)
        return keyA.length === keyB.length && keysA.every((key) => looseEqual(a[key], b[key]))
      }
      return false
    } catch (e) {
      return false
    }
  }
}

export function once(fn) {
  let called = false
  return function () {
    if (called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
