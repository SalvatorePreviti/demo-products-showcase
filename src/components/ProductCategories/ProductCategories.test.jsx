import React from 'react'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

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
      const shallowRenderer = new ShallowRenderer()
      shallowRenderer.render(getComponent())
      expect(shallowRenderer.getRenderOutput()).toMatchSnapshot()
    })

    it('renders all elements', () => {
      const root = Renderer.create(getComponent()).root
      const found = root.findAll(item => item.type === 'a', { deep: true })

      expect(found.map(item => item.props)).toEqual([
        { href: '#', className: 'item', children: 'title 1' },
        { href: '#', className: 'item', children: 'title 2' },
        { href: '#', className: 'item', children: 'title 3' },
        { href: '#', className: 'item', children: 'title 4' }
      ])
    })
  })

  describe('with a list of categories, with a selection', () => {
    function getComponent() {
      return <ProductCategories categories={categories} activeCategoryId="2" />
    }

    it('snapshots', () => {
      const shallowRenderer = new ShallowRenderer()
      shallowRenderer.render(getComponent())
      expect(shallowRenderer.getRenderOutput()).toMatchSnapshot()
    })

    it('renders all elements, marking as active the active element', () => {
      const root = Renderer.create(getComponent()).root
      const found = root.findAll(item => item.type === 'a', { deep: true })
      expect(found.map(item => item.props)).toEqual([
        { href: '#', className: 'item', children: 'title 1' },
        { href: '#', className: 'item active', children: 'title 2' },
        { href: '#', className: 'item', children: 'title 3' },
        { href: '#', className: 'item', children: 'title 4' }
      ])
    })
  })
})
