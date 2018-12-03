import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export default function reducerSelectCategory(state = getDefaultState(), action) {
  if (state.activeCategory !== action.category) {
    state.activeCategory = action.category
    state.filteredProducts = getFilteredProducts(state.activeCategory && state.activeCategory.products, state.productFilter)
  }
  return state
}
