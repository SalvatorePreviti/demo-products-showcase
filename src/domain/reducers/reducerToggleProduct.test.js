import getDefaultState from '../getDefaultState'
import actionToggleProduct from '../actions/actionToggleProduct'
import reducers from '.'

describe('reducerToggleProduct', () => {
  it('sets active = true to a not active product', () => {
    const product = { id: '123' }
    const state = getDefaultState()
    const nextState = reducers(state, actionToggleProduct(product))
    expect(nextState).toMatchObject({
      ...state,
      activeProductsById: { '123': true }
    })
  })

  it('sets active = false to an active product', () => {
    const product = { id: '123' }

    const state = getDefaultState()
    state.activeProductsById['123'] = true

    const nextState = reducers(state, actionToggleProduct(product))
    expect(nextState).toMatchObject({
      ...state,
      activeProductsById: { '123': false }
    })
  })
})
