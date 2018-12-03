import React from 'react'
import { shallow } from 'enzyme'

import ProductItem from './ProductItem'

describe('ProductItem', () => {
  describe('not active', () => {
    function getComponent() {
      return <ProductItem title="Item title" />
    }

    it('snapshots', () => {
      expect(shallow(getComponent())).toMatchSnapshot()
    })

    it('renders header', () => {
      const root = shallow(getComponent())
      const header = root.find('a')
      expect(header.props()).toMatchObject({
        href: '#',
        className: 'header',
        children: 'Item title'
      })
    })

    it('does not have description visible', () => {
      const root = shallow(getComponent())
      expect(root.find('div.description')).toHaveLength(0)
    })
  })

  describe('active', () => {
    function getComponent() {
      return <ProductItem title="Active item title" description="Item description" active={true} />
    }

    it('snapshots', () => {
      expect(shallow(getComponent())).toMatchSnapshot()
    })

    it('renders header with active style', () => {
      const root = shallow(getComponent())
      const header = root.find('a')
      expect(header.props()).toMatchObject({
        href: '#',
        className: 'header active',
        children: 'Active item title'
      })
    })

    it('renders description', () => {
      const root = shallow(getComponent())
      const description = root.find('div.description')
      expect(description.props()).toMatchObject({
        className: 'description',
        children: 'Item description'
      })
    })
  })

  describe('when clicking', () => {
    it('invokes onSelect with the item id', () => {
      let clickedValue
      const root = shallow(
        <ProductItem
          itemId="123"
          title="Item"
          onSelect={value => {
            clickedValue = value
          }}
        />
      )

      root
        .find('a')
        .at(0)
        .simulate('click')

      expect(clickedValue).toBe('123')
    })
  })
})
