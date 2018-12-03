import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductItem.scss'

const headerStyle = styles.header
const headerActiveStyle = styles.header + ' ' + styles.active
const contentStyle = styles.content

function ProductItem(props) {
  const { itemId, title, active, content } = props
  return (
    <div>
      <a
        href="#"
        className={active ? headerActiveStyle : headerStyle}
        onClick={() => {
          props.onSelect && props.onSelect(itemId)
        }}>
        {title}
      </a>
      {active ? <div className={contentStyle}>{content}</div> : null}
    </div>
  )
}

ProductItem.propTypes = {
  itemId: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  content: PropTypes.string,
  onSelect: PropTypes.func
}

export default ProductItem
