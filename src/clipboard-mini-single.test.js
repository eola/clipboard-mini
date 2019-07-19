import 'jsdom'
import ClipboardMiniSingle from './clipboard-mini-single'

describe('ClipboardMiniSingle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="btn" id="first-btn">
        Copy
      </button>

      <button class="btn" id="second-btn">
        Copy
      </button>

      <div class="container"></div>
    `
  })

  test('it copies from attribute', () => {
    // Mock function
    const restore = ClipboardMiniSingle.prototype.copyFromHardcoded
    ClipboardMiniSingle.prototype.copyFromHardcoded = jest.fn()

    // Set environment
    const text = "I have been copied from an attribute"
    const button = document.getElementById('first-btn')
    button.setAttribute('data-clipboard-text', text)
    const clipboardSingle = new ClipboardMiniSingle(button)

    // Test
    clipboardSingle.handleClick()
    expect(clipboardSingle.copyFromHardcoded).toHaveBeenCalled()

    // Restore
    ClipboardMiniSingle.prototype.copyFromHardcoded = restore
  })

  test('it copies from a selector', () => {
    // Mock function
    const restore = ClipboardMiniSingle.prototype.copyFromSelector
    ClipboardMiniSingle.prototype.copyFromSelector = jest.fn()

    // Set environment
    const text = "I have been copied from an div"
    const container = document.getElementsByClassName('container')
    container.innerHTML = text
    const button = document.getElementById('second-btn')
    button.setAttribute('data-clipboard-target', '.container')
    const clipboardSingle = new ClipboardMiniSingle(button)

    // Test
    clipboardSingle.handleClick()
    expect(clipboardSingle.copyFromSelector).toHaveBeenCalled()

    // Restore
    ClipboardMiniSingle.prototype.copyFromSelector = restore
  })

})