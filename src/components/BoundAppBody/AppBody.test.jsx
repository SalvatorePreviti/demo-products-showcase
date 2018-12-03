import React from 'react'
import { shallow } from 'enzyme'

import AppBody from './AppBody'
import LoadError from '../../atoms/LoadError/LoadError'
import Loading from '../../atoms/Loading/Loading'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'
import BoundProductFilter from '../BoundProductFilter/BoundProductFilter'
import BoundProductList from '../BoundProductList/BoundProductList'

describe('AppBody', () => {
  describe('with load error', () => {
    let root

    beforeAll(() => {
      root = shallow(<AppBody loadFailed={true} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders a LoadError', () => {
      expect(root.find(LoadError)).toHaveLength(1)
    })

    it('does not render anything else', () => {
      expect(root.children()).toHaveLength(0)
    })
  })

  describe('with loading', () => {
    let root

    beforeAll(() => {
      root = shallow(<AppBody loading={true} />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('renders a Loading', () => {
      expect(root.find(Loading)).toHaveLength(1)
    })

    it('does not render anything else', () => {
      expect(root.children()).toHaveLength(0)
    })
  })

  describe('when ready', () => {
    let root

    beforeAll(() => {
      root = shallow(<AppBody />)
    })

    it('snapshots', () => {
      expect(root).toMatchSnapshot()
    })

    it('Renders BoundProductCategories', () => {
      expect(root.find(BoundProductCategories)).toHaveLength(1)
    })

    it('Renders BoundProductFilter', () => {
      expect(root.find(BoundProductFilter)).toHaveLength(1)
    })

    it('Renders BoundProductList', () => {
      expect(root.find(BoundProductList)).toHaveLength(1)
    })
  })
})
