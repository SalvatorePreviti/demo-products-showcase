import React from 'react'
import { shallow } from 'enzyme'

import ProductCategory from '../ProductCategory/ProductCategory'
import ProductCategories from './ProductCategories'

describe('ProductCategories', () => {
  const categories = [
    { id: '1', title: 'title 1' },
    { id: '2', title: 'title 2' },
    { id: '3', title: 'title 3' },
    { id: '4', title: 'title 4' }
  ]

  describe('with a list of categories, without selection', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductCategories categories={categories} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders all elements', () => {
      const found = root.find(ProductCategory)
      expect(found.map(item => item.props())).toMatchObject([
        { active: false, title: categories[0].title },
        { active: false, title: categories[1].title },
        { active: false, title: categories[2].title },
        { active: false, title: categories[3].title }
      ])
    })
  })

  describe('with a list of categories, with a selection', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductCategories categories={categories} activeCategory={categories[1]} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders all elements, marking as active the active element', () => {
      const found = root.find(ProductCategory)
      expect(found.map(item => item.props())).toMatchObject([
        { active: false, title: categories[0].title },
        { active: true, title: categories[1].title },
        { active: false, title: categories[2].title },
        { active: false, title: categories[3].title }
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
        .find(ProductCategory)
        .at(2)
        .simulate('select', categories[2])

      expect(clickedValue).toBe(categories[2])
    })
  })
})
