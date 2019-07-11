export default class ClipboardMiniSingle {
  constructor(el) {
    this.el = el
    this.text = null
    this.setupClipboard()
  }

  getAttributeValue(suffix) {
    const attribute = `data-clipboard-${suffix}`
    if (!this.el.hasAttribute(attribute)) {
      return
    }
    return this.el.getAttribute(attribute)
  }

  copy(target, beforeRestore) {
    // Preserve previous selection if any
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false

    target.select()
    const result = document.execCommand('copy')

    if (typeof beforeRestore === 'function') beforeRestore()

    // Restore selection
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }

    return result
  }

  // Detects a string in 'data-attribute-text' and copies from it
  copyFromHardcoded() {
    const text = this.getAttributeValue('text')
    if (!text) return

    // Creates a ghost textarea to copy from
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)

    return this.copy(el, () => {
      // Remove ghost textare
      document.body.removeChild(el)
    })
  }

  // Detects a selector on 'data-attribute-target' and copies from it
  copyFromSelector() {
    const selector = this.getAttributeValue('target')
    const target = document.querySelector(selector)
    if (!target) return

    return this.copy(target)
  }

  handleClick(e) {
    const success = this.copyFromHardcoded() || this.copyFromSelector() || false
    if (success) {
      const label = this.el.innerHTML
      this.el.innerHTML = 'Copied!'
      setTimeout(() => {
        this.el.innerHTML = label
      }, 2500)
    }
    return success
  }

  setupClipboard() {
    this.el.addEventListener('click', this.handleClick.bind(this))
  }
}
