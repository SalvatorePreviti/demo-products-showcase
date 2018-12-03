// Polyfill for Internet Explorer and other browsers that don't support 'fetch'
// https://github.com/lquixada/cross-fetch
import 'cross-fetch/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

import store from './domain/store'
import { actionLoad } from './domain/actions/actionsLoad'

ReactDOM.render(<App />, document.getElementById('root'))

// Load initial data
actionLoad()(store.dispatch)
