import { ADD_CART, REMOVE_CART } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
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
      console.log(item)
      const itemFoundIndex = state.cartItems.findIndex(
        (x) => x.product._id === item.product._id
      )
      if (itemFoundIndex > -1) {
        const old_qty = state.cartItems[itemFoundIndex].qty
        item.qty += old_qty
        state.cartItems.splice(itemFoundIndex, 1)
      }

      return {
        cartItems: [...state.cartItems, item].sort(compare),
      }
    case REMOVE_CART:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== action.payload.product
        ),
      }
    default:
      return state
  }
}
