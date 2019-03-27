import ChainLongWebView from '../src'

describe('ChainLongWebView', () => {
  test('create instance', () => {
    const webview = new ChainLongWebView()

    expect(typeof webview.close).toBe('function')
  })

  test('close', () => {
    window.chainLong = {
      close: jest.fn()
    }
    const webview = new ChainLongWebView()

    webview.close()

    expect(window.chainLong.close).toBeCalled()
  })
})
