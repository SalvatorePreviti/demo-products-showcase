import getDefaultState from '../getDefaultState'
import * as actionTypes from '../actionTypes'
import reducerSelectCategory from './reducerSelectCategory'
import reducerSetProductFilter from './reducerSetProductFilter'
import reducerToggleProduct from './reducerToggleProduct'
import { reducerLoadStarted, reducerLoadOk, reducerLoadFail } from './reducersLoad'

const reducersMap = {
  [actionTypes.SELECT_CATEGORY]: reducerSelectCategory,
  [actionTypes.SET_PRODUCT_FILTER]: reducerSetProductFilter,
  [actionTypes.TOGGLE_PRODUCT]: reducerToggleProduct,
  [actionTypes.LOAD_STARTED]: reducerLoadStarted,
  [actionTypes.LOAD_OK]: reducerLoadOk,
  [actionTypes.LOAD_FAIL]: reducerLoadFail
}

const reducersLookup = Object.assign(Object.create(null), reducersMap)

function reducers(state = getDefaultState(), action) {
  const reducer = reducersLookup[action.type]
  if (reducer) {
    return reducer(state, action)
  }
  return state
}

export default reducers
