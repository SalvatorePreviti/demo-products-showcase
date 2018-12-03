import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductItem.scss'

const headerStyle = styles.header
const headerActiveStyle = `${styles.header} ${styles.active}`

function ProductItem(props) {
  const { title, active, description } = props
  return (
    <div>
      <a
        href="#"
        className={active ? headerActiveStyle : headerStyle}
        onClick={event => {
          if (props.onSelect) {
            props.onSelect()
          }
          if (event) {
            event.preventDefault()
          }
        }}>
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
