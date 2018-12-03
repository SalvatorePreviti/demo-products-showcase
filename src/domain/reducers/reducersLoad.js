import getDefaultState from '../getDefaultState'
import getFilteredProducts from '../lib/getFilteredProducts'

export function reducerLoadStarted(state = getDefaultState()) {
  return {
    ...state,
    loading: true,
    loadFailed: false
  }
}

export function reducerLoadFail(state = getDefaultState()) {
  return {
    ...state,
    loading: false,
    loadFailed: true
  }
}

export function reducerLoadOk(state = getDefaultState(), action) {
  const activeCategory = action.categories[0]
  return {
    ...state,
    loading: false,
    categories: action.categories,
    activeCategory: activeCategory,
    filteredProducts: getFilteredProducts(activeCategory && activeCategory.products, state.productFilter)
  }
}
