import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductCategory.scss'

const itemStyle = styles.ProductCategory
const itemActiveStyle = `${itemStyle} ${styles.active}`

function ProductCategory(props) {
  const { title, active, onSelect } = props

  const onClick = event => {
    if (onSelect) {
      onSelect()
    }
    if (event) {
      event.preventDefault()
    }
  }

  return (
    <a href="#" className={active ? itemActiveStyle : itemStyle} onClick={onClick}>
      {title}
    </a>
  )
}

ProductCategory.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  onSelect: PropTypes.func
}

export default ProductCategory
