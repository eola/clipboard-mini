import ClipboardMini from './clipboard-mini'
import ClipboardMiniSingle from './clipboard-mini-single'

describe('ClipboardMini', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="btn">
        Copy
      </button>

      <div class="container">I am text in a div</div>
    `
  })

  test('it fails to initialise correctly', () => {
    const restore = ClipboardMini.prototype.init
    ClipboardMini.prototype.init = jest.fn()
    const clipboard = new ClipboardMini('.not-a-btn')

    expect(clipboard.elements).toHaveLength(0)
    expect(ClipboardMini.prototype.init).not.toHaveBeenCalled()

    ClipboardMini.prototype.init = restore
  })

  test('it initialises correctly', () => {
    const clipboard = new ClipboardMini('.btn')

    expect(clipboard.elements).toHaveLength(1)
    expect(clipboard.list).toHaveLength(1)
    expect(clipboard.list[0]).toBeInstanceOf(ClipboardMiniSingle)
  })
})