import { inBrowser } from './inBrowser'
// 是否支持webp类型图片
const supportWebp = function () {
  if (!inBrowser) return false
  let support = true
  try {
    const elem = document.createElement('canvas')

    if (elem.getContext && elem.getContext('2d')) {
      support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
  } catch (err) {
    support = false
  }

  return support
}
export { supportWebp }
