import getDefaultState from '../getDefaultState'

export default function reducerSelectCategory(state = getDefaultState(), action) {
  state.activeCategory = action.category
  return state
}
