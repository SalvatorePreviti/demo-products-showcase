import { createStore } from 'redux'
import reducers from './reducers'

export function createAppStore() {
  return createStore(reducers)
}

export default createAppStore()
