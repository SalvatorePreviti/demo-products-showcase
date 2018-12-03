import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductCategories.scss'

const itemStyle = styles.item
const itemActiveStyle = styles.item + ' ' + styles.active

function ProductCategories(props) {
  const { categories, activeCategoryId } = props
  return (
    <header>
      Store Cupboard
      {categories.map(category => {
        const categoryId = category.id
        return (
          <a
            key={categoryId}
            href="#"
            className={categoryId === activeCategoryId ? itemActiveStyle : itemStyle}
            onClick={() => props.onSelectCategory(categoryId)}>
            {category.title}
          </a>
        )
      })}
    </header>
  )
}

ProductCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  activeCategoryId: PropTypes.string,
  onSelectCategory: PropTypes.func.isRequired
}

ProductCategories.prop

export default ProductCategories
