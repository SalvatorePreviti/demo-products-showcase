import getDefaultState from '../getDefaultState'

export default function reducerSelectProduct(state = getDefaultState(), action) {
  action.product.active = !action.product.active
  return state
}
