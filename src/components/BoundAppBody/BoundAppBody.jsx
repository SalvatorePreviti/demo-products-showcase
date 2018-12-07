import { connect } from 'react-redux'
import AppBody from './AppBody'
import React from 'react'

function mapStateToProps(state) {
  const { loading, loadFailed } = state
  return {
    loading: loading,
    loadFailed: loadFailed
  }
}

export default connect(mapStateToProps)(React.memo(AppBody))
