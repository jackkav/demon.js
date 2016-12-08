const LOCAL_STORAGE_PREFIX = 'demon_'
export default {
  getItem(key) {
    let value = ''
    try {
      value = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_PREFIX + key)) || ''
    } catch (e) {
      console.error(e)
    }

    return value
  },
  setItem(key, data) {
    if (typeof data === 'undefined') {
      console.error('just ignore undefined for ' + key)
      return
    }
    return window.localStorage.setItem(LOCAL_STORAGE_PREFIX + key, JSON.stringify(data))
  },
  removeItem(key) {
    console.log(key)
    return window.localStorage.removeItem(LOCAL_STORAGE_PREFIX + key)
  },
  clear() {
    // TODO: just clear user data
    window.localStorage.clear()
  }
}
if (!window.localStorage) {
  console.error('This browser does NOT support localStorage')
}
