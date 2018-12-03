import React from 'react'
import PropTypes from 'prop-types'

import LoadError from '../../atoms/LoadError/LoadError'
import Loading from '../../atoms/Loading/Loading'
import BoundProductCategories from '../BoundProductCategories/BoundProductCategories'
import BoundProductFilter from '../BoundProductFilter/BoundProductFilter'
import BoundCategoryProductList from '../BoundCategoryProductList/BoundCategoryProductList'

function AppBody(props) {
  const { loading, loadFailed } = props

  if (loadFailed) {
    return <LoadError />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <BoundProductCategories />
      <BoundProductFilter />
      <BoundCategoryProductList />
    </div>
  )
}

AppBody.propTypes = {
  loading: PropTypes.bool,
  loadFailed: PropTypes.bool
}

export default AppBody
