function getData(body) {
  if (!body || typeof body !== 'object') {
    throw new Error('Response is empty or invalid')
  }
  if (body.status !== 'ok') {
    throw new Error('Response status is not ok')
  }
  const data = body.data
  if (!data || !Array.isArray(data)) {
    throw new Error('Response data is not an array')
  }
  return data
}

function getResponseData(response) {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Http error ${response.status} ${response.statusText}`)
  }
  return response.json().then(getData)
}

export function fetchCategories() {
  return fetch(`${process.env.PRODUCTS_API_URL}/products/v2.0/categories`).then(getResponseData)
}

export function fetchProducts() {
  return fetch(
    `${
      process.env.PRODUCTS_API_URL
    }/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120`
  ).then(getResponseData)
}
