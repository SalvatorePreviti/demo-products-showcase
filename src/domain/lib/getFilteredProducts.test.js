import getFilteredProducts from './getFilteredProducts'

describe('getFilteredProducts', () => {
  const products = [
    { title: 'Pasta alla Amatriciana', description: 'Pomodoro, guanciale' },
    { title: 'Pizza Napoletana', description: 'Pizza, pomodoro, mozzarella, acciughe' },
    { title: 'Piadina Romagnola', description: 'Prosciutto, mozzarella' },
    { title: 'An item without description' }
  ]

  it('returns an empty array with null or undefined', () => {
    expect(getFilteredProducts(null)).toEqual([])
    expect(getFilteredProducts(undefined)).toEqual([])
  })

  it('returns the whole list with no filter', () => {
    expect(getFilteredProducts(products)).toEqual(products)
  })

  it('returns the whole list with an empty filter', () => {
    expect(getFilteredProducts(products, '')).toEqual(products)
  })

  it('returns all items with a shared keyword, case insensitive', () => {
    expect(getFilteredProducts(products, 'pomodoro')).toEqual([products[0], products[1]])
  })

  it('checks in the title', () => {
    expect(getFilteredProducts(products, 'Piadina')).toEqual([products[2]])
  })

  it('checks in the description', () => {
    expect(getFilteredProducts(products, 'acciughe')).toEqual([products[1]])
  })

  it('works also with items without description', () => {
    expect(getFilteredProducts(products, 'without')).toEqual([products[3]])
  })
})
