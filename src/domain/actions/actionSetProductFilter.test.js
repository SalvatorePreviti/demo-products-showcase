import { SET_PRODUCT_FILTER } from '../actionTypes'
import actionSetProductFilter from './actionSetProductFilter'

describe('actionSetProductFilter', () => {
  it('makes the valid action', () => {
    expect(actionSetProductFilter('hello')).toEqual({ type: SET_PRODUCT_FILTER, filter: 'hello' })
  })
})
