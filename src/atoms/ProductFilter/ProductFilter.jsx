import React from 'react'
import PropTypes from 'prop-types'

function ProductFilter(props) {
  const { value, onChange } = props
  return (
    <div>
      <input type="text" value={value} onChange={event => onChange && onChange(event.target.value)} />
    </div>
  )
}

ProductFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default ProductFilter
