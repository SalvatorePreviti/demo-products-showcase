import React from 'react'
import { shallow } from 'enzyme'

import ProductList from './ProductList'

describe('ProductList', () => {
  describe('with a list of items, without selection', () => {
    const items = [
      { id: '1', title: 'title 1', description: 'desc 1' },
      { id: '2', title: 'title 2', description: 'desc 2' },
      { id: '3', title: 'title 3', description: 'desc 3' },
      { id: '4', title: 'title 4', description: 'desc 4' }
    ]

    let root

    beforeAll(() => {
      root = shallow(<ProductList items={items} activeProductsById={{}} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders all elements', () => {
      const found = root.find('ProductItem')
      expect(found.map(x => x.props())).toMatchObject([
        { active: false, description: 'desc 1', title: 'title 1' },
        { active: false, description: 'desc 2', title: 'title 2' },
        { active: false, description: 'desc 3', title: 'title 3' },
        { active: false, description: 'desc 4', title: 'title 4' }
      ])
    })
  })

  describe('with a list of items, with some selections', () => {
    const items = [
      { id: '1', title: 'title 1', description: 'desc 1' },
      { id: '2', title: 'title 2', description: 'desc 2' },
      { id: '3', title: 'title 3', description: 'desc 3' },
      { id: '4', title: 'title 4', description: 'desc 4' }
    ]

    const activeProductsById = {
      '2': true,
      '4': true
    }

    let root

    beforeAll(() => {
      root = shallow(<ProductList items={items} activeProductsById={activeProductsById} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders all elements', () => {
      const found = root.find('ProductItem')
      expect(found.map(x => x.props())).toMatchObject([
        { active: false, description: 'desc 1', title: 'title 1' },
        { active: true, description: 'desc 2', title: 'title 2' },
        { active: false, description: 'desc 3', title: 'title 3' },
        { active: true, description: 'desc 4', title: 'title 4' }
      ])
    })
  })

  describe('with an empty list of items', () => {
    let root

    beforeAll(() => {
      root = shallow(<ProductList items={[]} activeProductsById={{}} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders empty message div', () => {
      expect(root.find('div.empty')).toHaveLength(1)
    })
  })

  it('handles selection event', () => {
    const items = [
      { id: '1', title: 'title 1', description: 'desc 1' },
      { id: '2', title: 'title 2', description: 'desc 2' },
      { id: '3', title: 'title 3', description: 'desc 3' },
      { id: '4', title: 'title 4', description: 'desc 4' }
    ]

    let selected
    const root = shallow(<ProductList items={items} activeProductsById={{}} onSelect={x => (selected = x)} />)

    root
      .find('ProductItem')
      .at(2)
      .props()
      .onSelect(items[2])

    expect(selected).toBe(items[2])
  })
})
