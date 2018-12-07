import React from 'react'
import { shallow } from 'enzyme'

import ProductCategory from './ProductCategory'

describe('ProductCategory', () => {
  describe('without selection', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductCategory title="A title" />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders', () => {
      const found = root.find('a')
      expect(found.props()).toMatchObject({ href: '#', className: 'ProductCategory', children: 'A title' })
    })
  })

  describe('with selection', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductCategory title="An active item" active={true} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders', () => {
      const found = root.find('a')
      expect(found.props()).toMatchObject({ href: '#', className: 'ProductCategory active', children: 'An active item' })
    })
  })

  describe('when clicking', () => {
    it('invokes onSelectCategory with the category id', () => {
      let clicked = false
      const root = shallow(
        <ProductCategory
          title="title"
          onSelect={() => {
            clicked = true
          }}
        />
      )

      root.simulate('click')

      expect(clicked).toBe(true)
    })
  })
})
