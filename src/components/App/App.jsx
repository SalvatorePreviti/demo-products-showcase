import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'
import BoundProductFilter from '../BoundProductFilter/BoundProductFilter'
import BoundCategoryProductList from '../BoundCategoryProductList/BoundCategoryProductList'

function App() {
  return (
    <Provider store={store}>
      <div>
        <BoundProductCategories />
        <BoundProductFilter />
        <BoundCategoryProductList />
      </div>
    </Provider>
  )
}

export default App
