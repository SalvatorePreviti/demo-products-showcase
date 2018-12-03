function getDefaultState() {
  return {
    categories: [],
    activeCategory: null,
    productFilter: '',
    filteredProducts: [],
    activeProductsById: {},
    loading: false,
    loadFailed: false
  }
}

export default getDefaultState
