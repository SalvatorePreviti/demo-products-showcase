import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductFilter.scss'

function ProductFilter(props) {
  const { value, onChange } = props
  return (
    <div className={styles.ProductFilter}>
      <input type="text" value={value} onChange={event => onChange && onChange(event.target.value)} />
    </div>
  )
}

ProductFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default ProductFilter
