import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    name: 'chainLongWebviewSDK',
    format: 'umd',
    file: 'dist/chainlong-webview-sdk.min.js'
  },
  plugins: [
    resolve(),
    babel(),
    terser()
  ]
}
