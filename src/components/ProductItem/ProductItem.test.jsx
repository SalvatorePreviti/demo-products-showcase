import React from 'react'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import ProductItem from './ProductItem'

describe('ProductItem', () => {
  describe('not active', () => {
    function getComponent() {
      return <ProductItem title="Item title" />
    }

    it('snapshots', () => {
      const shallowRenderer = new ShallowRenderer()
      shallowRenderer.render(getComponent())
      expect(shallowRenderer.getRenderOutput()).toMatchSnapshot()
    })

    it('renders header', () => {
      const root = Renderer.create(getComponent()).root
      const header = root.find(item => item.type === 'a')
      expect(header.props).toMatchObject({
        href: '#',
        className: 'header',
        children: 'Item title'
      })
    })

    it('does not have description visible', () => {
      const root = Renderer.create(getComponent()).root
      const description = root.findAll(item => item.type === 'div' && item.props.className === 'description', { deep: true })[0]
      expect(description).toBeUndefined()
    })
  })

  describe('active', () => {
    function getComponent() {
      return <ProductItem title="Active item title" description="Item description" active={true} />
    }

    it('snapshots', () => {
      const shallowRenderer = new ShallowRenderer()
      shallowRenderer.render(getComponent())
      expect(shallowRenderer.getRenderOutput()).toMatchSnapshot()
    })

    it('renders header with active style', () => {
      const root = Renderer.create(getComponent()).root
      const header = root.find(item => item.type === 'a')
      expect(header.props).toMatchObject({
        href: '#',
        className: 'header active',
        children: 'Active item title'
      })
    })

    it('renders description', () => {
      const root = Renderer.create(getComponent()).root
      const description = root.find(item => item.type === 'div' && item.props.className === 'description', { deep: true })
      expect(description.props).toMatchObject({
        className: 'description',
        children: 'Item description'
      })
    })
  })

  describe('when clicking', () => {
    it('invokes onSelect with the item id', () => {
      let clickedValue
      const root = Renderer.create(
        <ProductItem
          itemId="123"
          title="Item"
          onSelect={value => {
            clickedValue = value
          }}
        />
      ).root

      root.find(x => x.type === 'a').props.onClick()

      expect(clickedValue).toBe('123')
    })
  })
})
