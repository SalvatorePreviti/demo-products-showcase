import React from 'react'
import TestRenderer from 'react-test-renderer'

import ProductCategories from './ProductCategories'

describe('ProductCategories', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<ProductCategories />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
