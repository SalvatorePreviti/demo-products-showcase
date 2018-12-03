import getDefaultState from '../getDefaultState'
import * as actionTypes from '../actionTypes'
import reducerSelectCategory from './reducerSelectCategory'
import reducerSetProductFilter from './reducerSetProductFilter'
import reducerSelectProduct from './reducerSelectProduct'

const reducersMap = {
  [actionTypes.SELECT_CATEGORY]: reducerSelectCategory,
  [actionTypes.SET_PRODUCT_FILTER]: reducerSetProductFilter,
  [actionTypes.SELECT_PRODUCT]: reducerSelectProduct
}

const reducersLookup = Object.assign(Object.create(null), reducersMap)

function reducers(state = getDefaultState(), action) {
  const reducer = reducersLookup[action.type]
  return reducer ? reducer(state, action) : state
}

export default reducers
