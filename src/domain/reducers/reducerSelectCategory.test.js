import actionSelectCategory from '../actions/actionSelectCategory'
import getDefaultState from '../getDefaultState'
import reducers from '.'

describe('reducerSelectCategory', () => {
  it('set the active category and apply the product filter', () => {
    const state = getDefaultState()
    state.productFilter = 'p2'
    const category = {
      id: '123',
      products: [{ id: 'p1', title: 'p1' }, { id: 'p2', title: 'p2' }]
    }
    const nextState = reducers(state, actionSelectCategory(category))
    expect(nextState).toMatchObject({
      ...state,
      activeCategory: { id: '123' },
      filteredProducts: [category.products[1]]
    })
  })
})
