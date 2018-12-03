import React from 'react'
import { shallow } from 'enzyme'

import ProductCategories from './ProductCategories'

describe('ProductCategories', () => {
  const categories = [
    { id: '1', title: 'title 1' },
    { id: '2', title: 'title 2' },
    { id: '3', title: 'title 3' },
    { id: '4', title: 'title 4' }
  ]

  describe('with a list of categories, without selection', () => {
    function getComponent() {
      return <ProductCategories categories={categories} />
    }

    it('snapshots', () => {
      expect(shallow(getComponent())).toMatchSnapshot()
    })

    it('renders all elements', () => {
      const root = shallow(getComponent())
      const found = root.find('a')
      expect(found.map(item => item.props())).toMatchObject([
        { href: '#', className: 'item', children: 'title 1' },
        { href: '#', className: 'item', children: 'title 2' },
        { href: '#', className: 'item', children: 'title 3' },
        { href: '#', className: 'item', children: 'title 4' }
      ])
    })
  })

  describe('with a list of categories, with a selection', () => {
    function getComponent() {
      return <ProductCategories categories={categories} activeCategory={categories[1]} />
    }

    it('snapshots', () => {
      expect(shallow(getComponent())).toMatchSnapshot()
    })

    it('renders all elements, marking as active the active element', () => {
      const root = shallow(getComponent())
      const found = root.find('a')
      expect(found.map(item => item.props())).toMatchObject([
        { href: '#', className: 'item', children: 'title 1' },
        { href: '#', className: 'item active', children: 'title 2' },
        { href: '#', className: 'item', children: 'title 3' },
        { href: '#', className: 'item', children: 'title 4' }
      ])
    })
  })

  describe('when clicking', () => {
    it('invokes onSelectCategory with the category id', () => {
      let clickedValue
      const root = shallow(
        <ProductCategories
          categories={categories}
          onSelectCategory={value => {
            clickedValue = value
          }}
        />
      )

      root
        .find('a')
        .at(2)
        .simulate('click')

      expect(clickedValue).toBe(categories[2])
    })
  })
})
