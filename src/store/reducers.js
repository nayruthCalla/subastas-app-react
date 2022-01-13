/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_PRODUCTS, SHOW_LOADING, HIDE_LOADING } from './types'

const initialState = {
  products: [],
  isloading: false,
}

export const counterReducer = (state = initialState, action) => {
  const newValue = action.payload
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: newValue }
    case SHOW_LOADING:
    case HIDE_LOADING:
      return { ...state, isloading: newValue }
    default:
      return state
  }
}
