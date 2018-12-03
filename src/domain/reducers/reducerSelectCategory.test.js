import actionSelectCategory from '../actions/actionSelectCategory'
import reducers from './'

describe('reducerSelectCategory', () => {
  it('set the active category', () => {
    const state = reducers(undefined, actionSelectCategory({ id: '123' }))
    expect(state).toMatchObject({
      activeCategory: { id: '123' }
    })
  })
})
