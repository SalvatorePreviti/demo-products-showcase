import getDefaultState from '../getDefaultState'
import * as actionTypes from '../actionTypes'
import reducerSelectCategory from './reducerSelectCategory'
import reducerSetProductFilter from './reducerSetProductFilter'
import reducerSelectProduct from './reducerSelectProduct'
import { reducerLoadStarted, reducerLoadOk, reducerLoadFail } from './reducersLoad'

const reducersMap = {
  [actionTypes.SELECT_CATEGORY]: reducerSelectCategory,
  [actionTypes.SET_PRODUCT_FILTER]: reducerSetProductFilter,
  [actionTypes.SELECT_PRODUCT]: reducerSelectProduct,
  [actionTypes.LOAD_STARTED]: reducerLoadStarted,
  [actionTypes.LOAD_OK]: reducerLoadOk,
  [actionTypes.LOAD_FAIL]: reducerLoadFail
}

const reducersLookup = Object.assign(Object.create(null), reducersMap)

function reducers(state = getDefaultState(), action) {
  const reducer = reducersLookup[action.type]
  if (!reducer) {
    return state
  }
  state = reducer(state, action)
  return state
}

export default reducers
