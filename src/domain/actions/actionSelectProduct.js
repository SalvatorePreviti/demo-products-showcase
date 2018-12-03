import { SELECT_PRODUCT } from '../actionTypes'

export default function selectProduct(product) {
  return { type: SELECT_PRODUCT, product }
}
