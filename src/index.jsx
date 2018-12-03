// Polyfill for Internet Explorer and other browsers that don't support 'fetch'
// https://github.com/lquixada/cross-fetch
import 'cross-fetch/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

ReactDOM.render(<App />, document.getElementById('root'))
