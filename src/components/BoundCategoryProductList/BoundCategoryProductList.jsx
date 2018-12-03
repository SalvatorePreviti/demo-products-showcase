import { connect } from 'react-redux'
import ProductList from '../../atoms/ProductList/ProductList'
import actionSelectProduct from '../../domain/actions/actionSelectProduct'

function mapStateToProps(state) {
  const { filteredProducts } = state
  return {
    items: filteredProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect(product) {
      dispatch(actionSelectProduct(product))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
