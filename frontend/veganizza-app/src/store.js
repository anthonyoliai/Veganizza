import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productReducer } from './reducers/productReducers'
import { promoReducer } from './reducers/promoReducers'
import { getPostReducer, postReducer } from './reducers/postReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  orderAnimationReducer,
  orderCreateReducer,
  orderGetReducer,
  orderListReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  //products state
  productList: productListReducer,
  product: productReducer,
  promoList: promoReducer,
  postList: postReducer,
  getPost: getPostReducer,
  userLogin: userLoginReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderGet: orderGetReducer,
  orderAnimation: orderAnimationReducer,
  orderList: orderListReducer,
})

const middleware = [thunk]

//Check if we already logged in and if we have a stored userInfo file.
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
