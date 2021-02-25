import { ADD_CART, REMOVE_CART } from '../constants/cartConstants'

export const addToCart = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: ADD_CART,
    payload: {
      product: product,
      qty: qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART,
    payload: {
      product: product,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
