export default function buildProductList(categories, products) {
  const visibleCategories = categories.filter(category => !category.hidden)

  const productsByCategory = Object.create(null)
  visibleCategories.forEach(category => {
    productsByCategory[category.id] = []
  })

  products.forEach(product => {
    product.categories.forEach(category => {
      const list = productsByCategory[category.id]
      if (list) {
        list.push({
          id: product.id,
          title: product.title,
          description: product.description,
          active: false
        })
      }
    })
  })

  return visibleCategories
    .filter(category => productsByCategory[category.id].length > 0)
    .map(category => {
      const id = category.id
      return {
        id,
        title: category.title,
        products: productsByCategory[id]
      }
    })
}
