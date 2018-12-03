import { SELECT_PRODUCT } from '../actionTypes'

export default function actionSelectProduct(product) {
  return { type: SELECT_PRODUCT, product }
}
