import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export default function reducerSelectCategory(state = getDefaultState(), action) {
  const activeCategory = action.category
  if (state.activeCategory !== action.category) {
    return {
      ...state,
      activeCategory,
      filteredProducts: getFilteredProducts(activeCategory && activeCategory.products, state.productFilter)
    }
  }
  return state
}
