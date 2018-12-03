import React from 'react'
import { shallow } from 'enzyme'

import ProductFilter from './ProductFilter'

describe('ProductItem', () => {
  let root

  beforeAll(() => {
    root = shallow(<ProductFilter value="custom filter" />)
  })

  it('snapshots', () => {
    expect(root).toMatchSnapshot()
  })

  it('renders the input box correctly', () => {
    expect(root.find('input').props()).toMatchObject({})
  })
})
