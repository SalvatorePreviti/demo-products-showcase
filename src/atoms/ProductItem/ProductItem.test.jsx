import React from 'react'
import { shallow } from 'enzyme'

import ProductItem from './ProductItem'

describe('ProductItem', () => {
  describe('not active', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductItem title="Item title" />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders header', () => {
      const header = root.find('a')
      expect(header.props()).toMatchObject({
        href: '#',
        className: 'header',
        children: 'Item title'
      })
    })

    it('does not have description visible', () => {
      expect(root.find('div.description')).toHaveLength(0)
    })
  })

  describe('active', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductItem title="Active item title" description="Item description" active={true} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders header with active style', () => {
      const header = root.find('a')
      expect(header.props()).toMatchObject({
        href: '#',
        className: 'header active',
        children: 'Active item title'
      })
    })

    it('renders description', () => {
      const description = root.find('div.description')
      expect(description.props()).toMatchObject({
        className: 'description',
        children: 'Item description'
      })
    })
  })

  describe('when clicking', () => {
    it('invokes onSelect with the item id', () => {
      let selected
      const root = shallow(
        <ProductItem
          title="Item"
          onSelect={() => {
            selected = true
          }}
        />
      )

      root
        .find('a')
        .at(0)
        .simulate('click')

      expect(selected).toBe(true)
    })
  })
})
