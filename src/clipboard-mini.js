import ClipboardMiniSingle from './clipboard-mini-single'

export default class ClipboardMini {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector)
    this.list = []
    if (this.elements.length) this.init()
  }

  init() {
    let i = this.elements.length
    while (i--) {
      this.list.push(new ClipboardMiniSingle(this.elements[i]))
    }
  }
}
