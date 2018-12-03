import React from 'react'
import { shallow } from 'enzyme'

import ProductFilter from './ProductFilter'

describe('ProductItem', () => {
  it('snapshots', () => {
    expect(shallow(<ProductFilter value="custom filter" />)).toMatchSnapshot()
  })

  it('renders the input box correctly', () => {
    const root = shallow(<ProductFilter value="custom filter" />)
    expect(root.find('input').props()).toMatchObject({})
  })
})
