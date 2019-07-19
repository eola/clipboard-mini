# [clipboard-mini](https://www.npmjs.com/package/clipboard-mini) · ![npm version](https://img.shields.io/npm/v/clipboard-mini.svg) ![downloads](https://img.shields.io/npm/dt/clipboard-mini.svg) ![gzipped weight](https://img.shields.io/bundlephobia/minzip/clipboard-mini.svg?label=gzipped)

Super tiny copy-to-clipboard JS library.

If you've come from [clipboard.js](https://clipboardjs.com/) and want a smaller package, you get pretty much the same here at half the cost (in KB).

No dependencies at all, no flash no nothing. Vanilla JS 🚀

### How to use it

Import `clipboard-mini` into your project like any other module:

```
yarn add clipboard-mini
```

To start using it, you only need to give `ClipboardMini` a selector.

```
import ClipboardMini from 'clipboard-mini'

const clipbutton = new ClipboardMini('.js-clipboard')

<button class="btn js-clipboard">Copy</button>
```

You can target what to copy via attribute, which can be text or a selector:
- `data-clipboard-text`: You will copy the text contained in th attribute to the clipboard
- `data-clipboard-target`: A unique CSS selector (it will grab the first result available) from which to copy its contents.


### Feedback

In order to let the user know something has been copied to the clipboard, the button label will change to `Copied!` for 2.5seconds, then revert to the original label.
