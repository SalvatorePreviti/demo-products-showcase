import { LOAD_STARTED, LOAD_OK, LOAD_FAIL } from '../actionTypes'
import { actionLoadStarted, actionLoadOk, actionLoadFail } from './actionsLoad'

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
})
