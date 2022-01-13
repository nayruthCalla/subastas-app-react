import { GET_PRODUCTS, SHOW_LOADING, HIDE_LOADING } from './types'
import axios from '../utils/axios'

// eslint-disable-next-line import/prefer-default-export
// action creators
export const loadProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
})
export const showLoader = (flag) => ({ type: SHOW_LOADING, payload: flag })
export const hideLoader = () => ({ type: HIDE_LOADING, payload: false })

// actions

export const getallProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('products')
    const res = response.data
    dispatch(loadProducts(res))
    dispatch(showLoader(true))
  } catch (e) {
    console.log(e)
  }
}
