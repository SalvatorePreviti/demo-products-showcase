import { SET_PRODUCT_FILTER } from '../actionTypes'

export default function selectCategory(filter) {
  return { type: SET_PRODUCT_FILTER, filter }
}
