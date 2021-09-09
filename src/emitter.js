export const emiiter = function (thing, options) {
  const opts = options || {}
  let evt = {}
  if (thing === undefined) thing = {}
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn]
    } else {
      evt[type].push(fn)
    }
    return thing
  }
  thing.once = function (type, fn) {
    fn._once = true // thing.off(fn) still works!
    thing.on(type, fn)
    return thing
  }
  thing.off = function (type, fn) {
    const c = arguments.length
    if (c === 1) {
      delete evt[type]
    } else if (c === 0) {
      evt = {}
    } else {
      const et = evt[type]
      if (!et) {
        return thing
      }
      et.splice(et.indexOf(fn), 1)
    }
    return thing
  }
  thing.emit = function () {
    const args = atoa(arguments)
    return thing.emitterSnapshot(args.shift()).apply(this, args)
  }
  thing.emitterSnapshot = function (type) {
    const et = (evt[type] || []).slice(0)
    return function () {
      const args = atoa(arguments)
      const ctx = this || thing
      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args
      }
      et.forEach((listen) => {
        if (opts.async) {
          debounce(listen, args, ctx)
        } else {
          listen.apply(ctx, args)
        }
        if (listen._once) {
          thing.off(type, listen)
        }
      })
      return thing
    }
  }
  return thing
}
