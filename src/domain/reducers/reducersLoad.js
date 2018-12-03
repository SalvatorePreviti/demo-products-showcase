import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export function reducerLoadStarted(state = getDefaultState()) {
  state.loading = true
  state.loadFailed = false
  return state
}

export function reducerLoadFail(state = getDefaultState()) {
  state.loading = false
  state.loadFailed = true
  return state
}

export function reducerLoadOk(state = getDefaultState(), action) {
  state.loading = false
  state.categories = action.categories
  state.activeCategory = state.categories[0]
  state.filteredProducts = getFilteredProducts(state.activeCategory && state.activeCategory.products, state.productFilter)
  return state
}
