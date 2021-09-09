/**
 * @param {*} name
 * @param {*} origin
 */

function getUrlParam(name, origin) {
  const reg = new RegExp(`(\\?|\\&)${name}=([^&]*)(&|$)`)
  let r = null
  if (origin == null) {
    r = window.location.search.substr(1).match(reg)
  } else {
    r = origin.substr(1).match(reg)
  }
  if (r != null) return decodeURIComponent(r[2])
  return null
}

export { getUrlParam }
