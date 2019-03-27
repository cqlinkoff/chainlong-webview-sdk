import WKBridge from '@cqlinkoff/wk-bridge'

export default class ChainLongWebview {
  constructor () {
    this.bridge = new WKBridge({
      namespace: 'chainLong'
    })
  }

  /**
   * close page
   *
   * @memberof ChainLongWebview
   */
  close = () => {
    this.bridge.postMessage('close', {})
  }

  setFullScreen = (options) => {
    // TODO: implements
  }
}
