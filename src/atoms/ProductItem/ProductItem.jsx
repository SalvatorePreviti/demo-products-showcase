import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductItem.scss'

const headerStyle = styles.header
const headerActiveStyle = `${styles.header} ${styles.active}`

function ProductItem(props) {
  const { title, active, description, onSelect } = props

  const onClick = event => {
    if (onSelect) {
      onSelect()
    }
    if (event) {
      event.preventDefault()
    }
  }

  return (
    <div>
      <a href="#" onClick={onClick} className={active ? headerActiveStyle : headerStyle}>
        {title}
      </a>
      {active ? <div className={styles.description}>{description}</div> : null}
    </div>
  )
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  description: PropTypes.string,
  onSelect: PropTypes.func
}

export default ProductItem
