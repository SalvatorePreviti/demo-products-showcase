import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'

function App() {
  return (
    <Provider store={store}>
      <BoundProductCategories />
    </Provider>
  )
}

export default App
