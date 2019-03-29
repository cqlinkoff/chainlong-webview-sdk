# chainlong-webview-sdk

chianlong webview sdk, based on [`wk-bridge`](https://github.com/cqlinkoff/wk-bridge)

## Install

```bash
npm i @cqlinkoff/webview-sdk
```

or

```html
<script src="https://unpkg.com/@cqlinkoff/webview-sdk@1.0.3/dist/chainlong-webview-sdk.min.js" type="text/javascript"></script>
```


## Use

```js
// NPM
import ChainLongWebView from '@cqlinkoff/webview-sdk'

const webview = new ChainLongWebView()

// UMD

const webview = new window.ChainLongWebView()
```

## API

### webview.close()
  - arguments: `null`
  - return: `null`
  - throw: `null`
  - example:
  ```js
  import ChainLongWebView from '@cqlinkoff/webview-sdk'

  const webview = new ChainLongWebView()
  webview.close()
  ```
