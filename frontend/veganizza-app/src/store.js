import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productReducer } from './reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  //products state
  productList: productListReducer,
  product: productReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
