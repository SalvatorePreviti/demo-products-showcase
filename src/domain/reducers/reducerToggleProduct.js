import getDefaultState from '../getDefaultState'

export default function reducerToggleProduct(state = getDefaultState(), action) {
  return {
    ...state,
    activeProductsById: {
      ...state.activeProductsById,
      [action.product.id]: !state.activeProductsById[action.product.id]
    }
  }
}
