import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productReducer } from './reducers/productReducers'
import { promoReducer } from './reducers/promoReducers'
import { postReducer } from './reducers/postReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  //products state
  productList: productListReducer,
  product: productReducer,
  promoList: promoReducer,
  postList: postReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
