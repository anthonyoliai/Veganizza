import {
  ADD_CART,
  CART_RESET,
  REMOVE_CART,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { shippingAddress: {}, cartItems: [] },
  action
) => {
  function compare(a, b) {
    if (a.product._id < b.product._id) {
      return -1
    }
    if (a.product._id > b.product._id) {
      return 1
    }
    return 0
  }

  switch (action.type) {
    case ADD_CART:
      const item = action.payload
      const itemFoundIndex = state.cartItems.findIndex(
        (x) => x.product._id === item.product._id
      )
      if (itemFoundIndex > -1) {
        const old_qty = state.cartItems[itemFoundIndex].qty
        item.qty += old_qty
        state.cartItems.splice(itemFoundIndex, 1)
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item].sort(compare),
      }
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== action.payload.product
        ),
      }
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_RESET:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}
