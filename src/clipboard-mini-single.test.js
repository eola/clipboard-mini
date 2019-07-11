import ClipboardMiniSingle from './clipboard-mini-single'

describe('ClipboardMiniSingle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="btn" id="first-btn">
        Copy
      </button>

      <button
          class="btn"
          data-clipboard-text="I am text in an attribute"
          id="second-btn"
      >
        Copy
      </button>

      <div class="container">I am text in a div</div>
      <div class="container2">I am text in a div</div>
    `
  })

})