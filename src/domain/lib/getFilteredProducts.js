function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default function getFilteredProducts(products, filter) {
  if (!products) {
    return []
  }

  if (!filter) {
    return products
  }

  const escapedFilter = escapeRegExp(filter)
  const regex = new RegExp(escapedFilter, 'ig')

  return products.filter(product => {
    const { title, description } = product
    return (typeof title === 'string' && title.match(regex)) || (typeof description === 'string' && description.match(regex))
  })
}
