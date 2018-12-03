import React from 'react'
import getDefaultState from '../../domain/getDefaultState'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import BoundProductCategories from './BoundProductCategories'
import actionSelectCategory from '../../domain/actions/actionSelectCategory'

describe('BoundProductCategories', () => {
  const categories = [{ id: '1', title: 'title 1' }, { id: '2', title: 'title 1' }, { id: '3', title: 'title 1' }]

  let root
  let store

  beforeAll(() => {
    store = mockStore()({
      ...getDefaultState(),
      categories: categories,
      activeCategory: categories[3]
    })
    root = shallow(<BoundProductCategories store={store} />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('passes props', () => {
    expect(root.props()).toMatchObject({
      categories,
      activeCategory: categories[3]
    })
  })

  it('passes callbacks', () => {
    root.simulate('selectCategory', categories[2])
    expect(store.getActions()).toEqual([actionSelectCategory(categories[2])])
  })
})
