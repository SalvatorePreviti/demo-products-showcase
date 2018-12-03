import { TOGGLE_PRODUCT } from '../actionTypes'

export default function actionToggleProduct(product) {
  return { type: TOGGLE_PRODUCT, product }
}
