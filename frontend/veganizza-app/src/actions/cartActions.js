import {
  ADD_CART,
  CART_RESET,
  REMOVE_CART,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

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

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: {
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country,
    },
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_RESET,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
