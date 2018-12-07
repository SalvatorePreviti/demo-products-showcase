import React from 'react'
import PropTypes from 'prop-types'
import ProductCategory from '../ProductCategory/ProductCategory'

function ProductCategories(props) {
  const { categories, activeCategory, onSelectCategory } = props

  return (
    <header>
      Store Cupboard
      {categories.map(category => (
        <ProductCategory
          key={category.id}
          title={category.title}
          active={category === activeCategory}
          onSelect={() => onSelectCategory && onSelectCategory(category)}
        />
      ))}
    </header>
  )
}

const productCategoryType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
})

ProductCategories.propTypes = {
  categories: PropTypes.arrayOf(productCategoryType.isRequired).isRequired,
  activeCategory: productCategoryType,
  onSelectCategory: PropTypes.func
}

export default ProductCategories
