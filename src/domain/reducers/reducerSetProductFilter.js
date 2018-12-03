import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export default function reducerSetProductFilter(state = getDefaultState(), action) {
  const productFilter = action.filter
  const activeCategory = state.activeCategory
  if (state.productFilter !== productFilter) {
    return {
      ...state,
      productFilter,
      filteredProducts: getFilteredProducts(activeCategory && activeCategory.products, productFilter)
    }
  }
  return state
}
