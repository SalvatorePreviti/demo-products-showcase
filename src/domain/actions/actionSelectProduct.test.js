import { SELECT_PRODUCT } from '../actionTypes'
import actionSelectProduct from './actionSelectProduct'

describe('actionSelectProduct', () => {
  it('makes the valid action', () => {
    const product = { id: 'id', active: false }
    expect(actionSelectProduct(product)).toEqual({ type: SELECT_PRODUCT, product })
  })
})
