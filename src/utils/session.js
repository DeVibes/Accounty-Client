export class Session {
  static setData(key, value) {
    sessionStorage.setItem(key, value)
  }
  static setDataObject(obj) {
    for (const prop in obj) {
      this.setData(prop, obj[prop])
    }
  }
  static getData(key) {
    return sessionStorage.getItem(key)
  }
  static resetData() {
    sessionStorage.clear()
  }
}
