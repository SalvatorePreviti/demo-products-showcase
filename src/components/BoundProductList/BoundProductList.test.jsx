import React from 'react'
import getDefaultState from '../../domain/getDefaultState'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import BoundProductList from './BoundProductList'
import actionToggleProduct from '../../domain/actions/actionToggleProduct'

describe('BoundProductList', () => {
  const items = [{ id: '1', title: 'title1' }, { id: '2', title: 'title2' }]

  let root
  let store

  beforeAll(() => {
    store = mockStore()({
      ...getDefaultState(),
      filteredProducts: items
    })
    root = shallow(<BoundProductList store={store} />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('passes props', () => {
    expect(root.props()).toMatchObject({ items })
  })

  it('passes callbacks', () => {
    root.simulate('select', items[1])
    expect(store.getActions()).toEqual([actionToggleProduct(items[1])])
  })
})
