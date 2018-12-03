import { SELECT_CATEGORY } from '../actionTypes'

export default function selectCategory(category) {
  return { type: SELECT_CATEGORY, category }
}
