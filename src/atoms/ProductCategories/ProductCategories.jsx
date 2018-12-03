import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductCategories.scss'

const itemStyle = styles.item
const itemActiveStyle = styles.item + ' ' + styles.active

function ProductCategories(props) {
  const { categories, activeCategory, onSelectCategory } = props
  return (
    <header>
      Store Cupboard
      {categories.map(category => {
        return (
          <a
            key={category.id}
            href="#"
            className={category === activeCategory ? itemActiveStyle : itemStyle}
            onClick={() => onSelectCategory && onSelectCategory(category)}>
            {category.title}
          </a>
        )
      })}
    </header>
  )
}

const categoryType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
})

ProductCategories.propTypes = {
  categories: PropTypes.arrayOf(categoryType.isRequired).isRequired,
  activeCategory: categoryType,
  onSelectCategory: PropTypes.func
}

export default ProductCategories
