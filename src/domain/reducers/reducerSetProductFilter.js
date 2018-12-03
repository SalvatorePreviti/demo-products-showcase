import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export default function reducerSetProductFilter(state = getDefaultState(), action) {
  if (state.productFilter !== action.filter) {
    state.productFilter = action.filter
    state.filteredProducts = getFilteredProducts(state.activeCategory && state.activeCategory.products, state.productFilter)
  }
  return state
}
