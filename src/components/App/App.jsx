import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'
import BoundProductFilter from '../BoundProductFilter/BoundProductFilter'

function App() {
  return (
    <Provider store={store}>
      <div>
        <BoundProductCategories />
        <BoundProductFilter />
      </div>
    </Provider>
  )
}

export default App
