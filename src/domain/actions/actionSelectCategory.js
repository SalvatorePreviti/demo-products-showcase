import { SELECT_CATEGORY } from '../actionTypes'

export default function actionSelectCategory(category) {
  return { type: SELECT_CATEGORY, category }
}
