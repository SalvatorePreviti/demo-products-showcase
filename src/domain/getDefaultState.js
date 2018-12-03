function getDefaultState() {
  return {
    categories: [],
    activeCategory: null,
    productFilter: '',
    filteredProducts: [],
    loading: false,
    loadFailed: false
  }
}

export default getDefaultState
