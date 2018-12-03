import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'

function App() {
  return (
    <Provider store={store}>
      <div />
    </Provider>
  )
}

export default App
