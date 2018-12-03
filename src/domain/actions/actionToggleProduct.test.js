import { TOGGLE_PRODUCT } from '../actionTypes'
import actionToggleProduct from './actionToggleProduct'

describe('actionToggleProduct', () => {
  it('makes the valid action', () => {
    const product = { id: 'id' }
    expect(actionToggleProduct(product)).toEqual({ type: TOGGLE_PRODUCT, product })
  })
})
