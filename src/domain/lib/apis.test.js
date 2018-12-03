import nock from 'nock'
import { fetchCategories, fetchProducts } from './apis'

describe('apis', () => {
  describe('fetchCategories', () => {
    function nockRequest() {
      return nock('https://api.gousto.co.uk').get('/products/v2.0/categories')
    }

    it('fetches', async () => {
      const data = [{ id: '123' }, { id: '456' }]
      nockRequest().reply(200, JSON.stringify({ status: 'ok', data }))
      expect(await fetchCategories()).toEqual(data)
    })

    it('throws an error if http status is invalid', async () => {
      nockRequest().reply(500, JSON.stringify({ status: 'ok', data: [] }))
      await expect(fetchCategories()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if status is invalid', async () => {
      nockRequest().reply(200, JSON.stringify({ status: 'error', data: [] }))
      await expect(fetchCategories()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if is an invalid json', async () => {
      nockRequest().reply(200, 'invalid json')
      await expect(fetchCategories()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if does not contain a data array', async () => {
      nockRequest().reply(200, JSON.stringify({ status: 'ok', data: {} }))
      await expect(fetchCategories()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if returns null', async () => {
      nockRequest().reply(200, JSON.stringify(null))
      await expect(fetchCategories()).rejects.toBeInstanceOf(Error)
    })
  })

  describe('fetchProducts', () => {
    function nockRequest() {
      return nock('https://api.gousto.co.uk').get(
        '/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120'
      )
    }

    it('fetches', async () => {
      const data = [{ id: '123' }, { id: '456' }]
      nockRequest().reply(200, JSON.stringify({ status: 'ok', data }))
      expect(await fetchProducts()).toEqual(data)
    })

    it('throws an error if http status is invalid', async () => {
      nockRequest().reply(500, JSON.stringify({ status: 'ok', data: [] }))
      await expect(fetchProducts()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if status is invalid', async () => {
      nockRequest().reply(200, JSON.stringify({ status: 'error', data: [] }))
      await expect(fetchProducts()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if is an invalid json', async () => {
      nockRequest().reply(200, 'invalid json')
      await expect(fetchProducts()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if does not contain a data array', async () => {
      nockRequest().reply(200, JSON.stringify({ status: 'ok', data: {} }))
      await expect(fetchProducts()).rejects.toBeInstanceOf(Error)
    })

    it('throws an error if returns null', async () => {
      nockRequest().reply(200, JSON.stringify(null))
      await expect(fetchProducts()).rejects.toBeInstanceOf(Error)
    })
  })
})
