import { SELECT_CATEGORY } from '../actionTypes'
import actionSelectCategory from './actionSelectCategory'

describe('actionSelectCategory', () => {
  it('makes the valid action', () => {
    const category = { id: '123' }
    expect(actionSelectCategory(category)).toEqual({ type: SELECT_CATEGORY, category })
  })
})
