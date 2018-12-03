// Polyfill for Internet Explorer and other browsers that don't support 'fetch'
// See https://github.github.io/fetch/
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

ReactDOM.render(<App />, document.getElementById('root'))
