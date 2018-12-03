import React from 'react'
import getDefaultState from '../../domain/getDefaultState'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import BoundProductFilter from './BoundProductFilter'
import actionSetProductFilter from '../../domain/actions/actionSetProductFilter'

describe('BoundProductCategories', () => {
  let root
  let store

  beforeAll(() => {
    store = mockStore()({
      ...getDefaultState(),
      productFilter: 'custom filter'
    })
    root = shallow(<BoundProductFilter store={store} />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('passes props', () => {
    expect(root.props()).toMatchObject({
      productFilter: 'custom filter'
    })
  })

  it('passes callbacks', () => {
    root.simulate('change', 'new filter')
    expect(store.getActions()).toEqual([actionSetProductFilter('new filter')])
  })
})
