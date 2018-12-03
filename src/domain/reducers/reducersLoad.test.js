import { actionLoadStarted, actionLoadOk, actionLoadFail } from '../actions/actionsLoad'
import getDefaultState from '../getDefaultState'
import reducers from '.'

describe('reducersLoad', () => {
  describe('actionLoadStarted', () => {
    it('sets loading to true and loadFailed to false', () => {
      const state = getDefaultState()
      state.loading = false
      state.loadFailed = true
      const nextState = reducers(state, actionLoadStarted())
      expect(nextState).toMatchObject({
        ...state,
        loading: true,
        loadFailed: false
      })
    })
  })

  describe('actionLoadOk', () => {
    const categories = [
      { id: 'c0', title: 't0', products: [{ id: 'p1', title: 'p1' }, { id: 'p2', title: 'p2' }] },
      { id: 'c1', title: 't1', products: [{ id: 'p3', title: 'p3' }] }
    ]
    const state = getDefaultState()
    const nextState = reducers(state, actionLoadOk(categories))
    expect(nextState).toMatchObject({
      ...state,
      categories: categories,
      activeCategory: categories[0],
      filteredProducts: [{ id: 'p1', title: 'p1' }, { id: 'p2', title: 'p2' }]
    })
  })

  describe('actionLoadFail', () => {
    it('sets loading to false and loadFailed to true', () => {
      const state = getDefaultState()
      state.loading = true
      state.loadFailed = false
      const nextState = reducers(state, actionLoadFail())
      expect(nextState).toMatchObject({
        ...state,
        loading: false,
        loadFailed: true
      })
    })
  })
})
