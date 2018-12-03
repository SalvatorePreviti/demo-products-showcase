import { connect } from 'react-redux'
import AppBody from './AppBody'

function mapStateToProps(state) {
  const { loading, loadFailed } = state
  return {
    loading: loading,
    loadFailed: loadFailed
  }
}

export default connect(mapStateToProps)(AppBody)
