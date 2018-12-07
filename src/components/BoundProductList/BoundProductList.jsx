import React from 'react'
import { connect } from 'react-redux'
import ProductList from '../../atoms/ProductList/ProductList'
import actionToggleProduct from '../../domain/actions/actionToggleProduct'

function mapStateToProps(state) {
  const { filteredProducts, activeProductsById } = state
  return {
    items: filteredProducts,
    activeProductsById: activeProductsById
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect(product) {
      dispatch(actionToggleProduct(product))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ProductList))
