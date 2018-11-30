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
      {categories.map(category => (
        <a key={category.id} href="#" className={category.id === activeCategoryId ? itemActiveStyle : itemStyle}>
          {category.title}
        </a>
      ))}
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
  activeCategoryId: PropTypes.string
}

ProductCategories.prop

export default ProductCategories
