import React from 'react'
import { shallow } from 'enzyme'

import LoadError from './LoadError'

describe('LoadError', () => {
  it('snapshots', () => {
    expect(shallow(<LoadError />)).toMatchSnapshot()
  })
})
