import React from 'react'
import getDefaultState from '../../domain/getDefaultState'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import BoundAppBody from './BoundAppBody'

describe('BoundCategoryProductList', () => {
  let root
  let store

  beforeAll(() => {
    store = mockStore()({
      ...getDefaultState(),
      loading: false,
      loadFailed: false
    })
    root = shallow(<BoundAppBody store={store} />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('passes props', () => {
    expect(root.props()).toMatchObject({ loading: false, loadFailed: false })
  })
})
