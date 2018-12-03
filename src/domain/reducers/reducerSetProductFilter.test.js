import actionSetProductFilter from '../actions/actionSetProductFilter'
import getDefaultState from '../getDefaultState'
import reducers from './'

describe('reducerSetProductFilter', () => {
  it('sets the product filter and apply the product filter', () => {
    const state = getDefaultState()

    const category = { id: '123', products: [{ id: 'p1', title: 'p1' }, { id: 'p2', title: 'p2' }] }
    state.categories = [category, { id: '234', products: [{ id: 'p2', title: 'p2' }] }]
    state.activeCategory = category

    const nextState = reducers(state, actionSetProductFilter('p2'))

    expect(nextState).toMatchObject({
      ...state,
      productFilter: 'p2',
      filteredProducts: [category.products[1]]
    })
  })
})
