import { fetchCategories, fetchProducts } from '../lib/apis'
import buildProductsShowcase from '../lib/buildProductsShowcase'
import { LOAD_STARTED, LOAD_OK, LOAD_FAIL } from '../actionTypes'

export function actionLoad() {
  return function(dispatch) {
    dispatch(actionLoadStarted())
    return Promise.all([fetchCategories(), fetchProducts()])
      .then(([fetchedCategories, fetchedProducts]) => {
        const built = buildProductsShowcase(fetchedCategories, fetchedProducts)
        actionLoadOk(built)
      })
      .catch(error => {
        // this should go to a common logging and error handling library that is outside the scope of this project.
        // eslint-disable-next-line no-console
        console.log('Failed loading categories and products', error)
        actionLoadFail()
      })
  }
}

export function actionLoadStarted() {
  return { type: LOAD_STARTED }
}

export function actionLoadOk(categories) {
  return { type: LOAD_OK, categories }
}

export function actionLoadFail() {
  return { type: LOAD_FAIL }
}
