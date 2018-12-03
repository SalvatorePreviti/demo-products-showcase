import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.scss'

function ProductList(props) {
  const { items, activeProductsById, onSelect } = props
  return (
    <div>
      {items.length ? (
        items.map(item => {
          const itemId = item.id
          return (
            <ProductItem
              key={itemId}
              itemId={itemId}
              title={item.title}
              active={activeProductsById[itemId] === true}
              description={item.description}
              onSelect={() => onSelect && onSelect(item)}
            />
          )
        })
      ) : (
        <div className={styles.empty}>No products found</div>
      )}
    </div>
  )
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired,
  activeProductsById: PropTypes.object.isRequired,
  onSelect: PropTypes.func
}

export default ProductList
