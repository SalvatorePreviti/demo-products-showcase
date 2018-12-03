import React from 'react'
import { Provider } from 'react-redux'

import store from '../../domain/store'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'
import BoundProductFilter from '../BoundProductFilter/BoundProductFilter'
import BoundCategoryProductList from '../BoundCategoryProductList/BoundCategoryProductList'
import Loading from '../../atoms/Loading/Loading'
import LoadError from '../../atoms/LoadError/LoadError'

function body() {
  const { loading, loadFailed } = store.getState()

  if (loadFailed) {
    return <LoadError />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <BoundProductCategories />
      <BoundProductFilter />
      <BoundCategoryProductList />
    </div>
  )
}

function App() {
  return <Provider store={store}>{body()}</Provider>
}

export default App
