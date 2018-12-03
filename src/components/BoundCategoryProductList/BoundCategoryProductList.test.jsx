import React from 'react'
import getDefaultState from '../../domain/getDefaultState'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import BoundCategoryProductList from './BoundCategoryProductList'
import actionSelectProduct from '../../domain/actions/actionSelectProduct'

describe('BoundCategoryProductList', () => {
  const items = [{ id: '1', title: 'title1', active: false }, { id: '2', title: 'title2', active: false }]

  let root
  let store

  beforeAll(() => {
    store = mockStore()({
      ...getDefaultState(),
      filteredProducts: items
    })
    root = shallow(<BoundCategoryProductList store={store} />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('passes props', () => {
    expect(root.props()).toMatchObject({ items })
  })

  it('passes callbacks', () => {
    root.simulate('select', items[1])
    expect(store.getActions()).toEqual([actionSelectProduct(items[1])])
  })
})
