import getDefaultState from '../getDefaultState'
import * as actionTypes from '../actionTypes'
import reducerSelectCategory from './reducerSelectCategory'

const reducersMap = {
  [actionTypes.SELECT_CATEGORY]: reducerSelectCategory
}

const reducersLookup = Object.assign(Object.create(null), reducersMap)

function reducers(state = getDefaultState(), action) {
  const reducer = reducersLookup[action.type]
  return reducer ? reducer(state, action) : state
}

export default reducers
