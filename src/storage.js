/* eslint-disable no-underscore-dangle */
function Storage() {
  this._self_ = {}
}
Storage.prototype = {
  constructor: Storage,
  add: function add(item, mark) {
    const id = item[mark || 'id']
    if (this._self_[id]) return this._self_[id]
    this._self_[id] = item
  },
  delete(id) {
    const item = this._self_[id]
    delete this._self_[id]
    return item
  },
  query(id) {
    return this._self_[id]
  },
  get() {
    return this._self_
  }
}

export { Storage }
