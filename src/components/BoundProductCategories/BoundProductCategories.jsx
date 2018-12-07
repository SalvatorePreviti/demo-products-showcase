import React from 'react'
import { connect } from 'react-redux'
import ProductCategories from '../../atoms/ProductCategories/ProductCategories'
import actionSelectCategory from '../../domain/actions/actionSelectCategory'

function mapStateToProps(state) {
  const { categories, activeCategory } = state
  return { categories, activeCategory }
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectCategory(category) {
      dispatch(actionSelectCategory(category))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ProductCategories))
