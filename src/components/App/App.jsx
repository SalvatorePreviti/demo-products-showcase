import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'
import BoundAppBody from '../BoundAppBody/BoundAppBody'

function App() {
  return (
    <Provider store={store}>
      <BoundAppBody />
    </Provider>
  )
}

export default App
