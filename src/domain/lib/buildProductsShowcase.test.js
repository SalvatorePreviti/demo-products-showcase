import buildProductsShowcase from './buildProductsShowcase'

describe('buildProductsShowcase', () => {
  const categories = [
    { id: 'C0', title: 'c0 title' },
    { id: 'C1', title: 'c1 title' },
    { id: 'C2', title: 'c2 title' },
    { id: 'C3', title: 'c3 title' },
    { id: 'CHidden', title: 'hidden', hidden: true }
  ]

  const products = [
    {
      id: 'P0',
      title: 'Joseph Joseph - Citrus Catcher',
      description: 'Citrous Description Text',
      categories: [{ id: 'C0' }, { id: 'C100' }]
    },
    {
      id: 'P1',
      title: 'title 1',
      description: 'P1 Description',
      categories: [{ id: 'C1' }, { id: 'C0' }]
    },
    {
      id: 'P2',
      title: 'title 2',
      description: 'P2 Description',
      categories: [{ id: 'C100' }, { id: 'C2' }]
    },
    {
      id: 'P3',
      title: 'title 3',
      description: 'P3 Description',
      categories: [{ id: 'C3' }]
    }
  ]

  let combined

  beforeAll(() => {
    combined = buildProductsShowcase(categories, products)
  })

  it('generates the correct combined values', () => {
    expect(combined).toEqual([
      {
        id: 'C0',
        title: 'c0 title',
        products: [
          { id: 'P0', title: 'Joseph Joseph - Citrus Catcher', description: 'Citrous Description Text', active: false },
          { id: 'P1', title: 'title 1', description: 'P1 Description', active: false }
        ]
      },
      { id: 'C1', title: 'c1 title', products: [{ id: 'P1', title: 'title 1', description: 'P1 Description', active: false }] },
      { id: 'C2', title: 'c2 title', products: [{ id: 'P2', title: 'title 2', description: 'P2 Description', active: false }] },
      { id: 'C3', title: 'c3 title', products: [{ id: 'P3', title: 'title 3', description: 'P3 Description', active: false }] }
    ])
  })
})
