let mockApisShouldThrow

jest.mock('../lib/apis', () => {
  return {
    fetchCategories() {
      if (mockApisShouldThrow) {
        return Promise.reject(new Error('failed'))
      }
      return Promise.resolve([{ id: 'C0', title: 'c0 title' }, { id: 'C1', title: 'c1 title' }])
    },
    fetchProducts() {
      if (mockApisShouldThrow) {
        return Promise.reject(new Error('failed'))
      }
      return Promise.resolve([
        { id: 'P0', title: 'title0', description: 'desc0', categories: [{ id: 'C0' }] },
        { id: 'P1', title: 'title1', description: 'desc1', categories: [{ id: 'C1' }, { id: 'C0' }] },
        { id: 'P2', title: 'title2', description: 'desc2', categories: [{ id: 'C1' }] }
      ])
    }
  }
})

import { LOAD_STARTED, LOAD_OK, LOAD_FAIL } from '../actionTypes'
import { actionLoad, actionLoadStarted, actionLoadOk, actionLoadFail } from './actionsLoad'

describe('actionLoad', () => {
  describe('actionLoadStarted', () => {
    it('makes the valid action', () => {
      expect(actionLoadStarted()).toEqual({ type: LOAD_STARTED })
    })
  })

  describe('actionLoadOk', () => {
    it('makes the valid action', () => {
      const categories = [{ id: '123' }]
      expect(actionLoadOk(categories)).toEqual({ type: LOAD_OK, categories })
    })
  })

  describe('actionLoadFail', () => {
    it('makes the valid action', () => {
      expect(actionLoadFail()).toEqual({ type: LOAD_FAIL })
    })
  })

  describe('actionLoad', () => {
    it('loads', async () => {
      mockApisShouldThrow = false

      const dispatched = []
      await actionLoad()(item => dispatched.push(item))
      expect(dispatched).toEqual([
        { type: LOAD_STARTED },
        {
          type: LOAD_OK,
          categories: [
            {
              id: 'C0',
              title: 'c0 title',
              products: [{ id: 'P0', title: 'title0', description: 'desc0' }, { id: 'P1', title: 'title1', description: 'desc1' }]
            },
            {
              id: 'C1',
              title: 'c1 title',
              products: [{ id: 'P1', title: 'title1', description: 'desc1' }, { id: 'P2', title: 'title2', description: 'desc2' }]
            }
          ]
        }
      ])
    })

    it('handles errors', async () => {
      mockApisShouldThrow = true
      const dispatched = []
      await actionLoad()(item => dispatched.push(item))
      expect(dispatched).toEqual([{ type: 'LOAD_STARTED' }, { type: 'LOAD_FAIL' }])
    })
  })
})
