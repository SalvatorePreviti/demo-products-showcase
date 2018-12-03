import getDefaultState from '../getDefaultState'
import actionSelectProduct from '../actions/actionSelectProduct'
import reducers from '.'

describe('reducerSelectProduct', () => {
  it('sets active = true to a not active product', () => {
    const product = { id: '123', active: false }
    const state = getDefaultState()
    const nextState = reducers(undefined, actionSelectProduct(product))
    expect(nextState).toMatchObject(state)
    expect(product.active).toBe(true)
  })
})
