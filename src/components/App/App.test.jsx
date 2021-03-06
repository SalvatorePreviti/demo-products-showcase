import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('snapshots', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
