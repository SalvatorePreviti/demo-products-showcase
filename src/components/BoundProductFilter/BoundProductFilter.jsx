import React from 'react'
import { connect } from 'react-redux'
import ProductFilter from '../../atoms/ProductFilter/ProductFilter'
import actionSetProductFilter from '../../domain/actions/actionSetProductFilter'

function mapStateToProps(state) {
  const { productFilter } = state
  return { productFilter }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(filter) {
      dispatch(actionSetProductFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ProductFilter))
