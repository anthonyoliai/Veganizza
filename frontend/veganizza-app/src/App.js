import React from 'react'

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import OrderScreen from './screens/OrderScreen'
import ShippingScreen from './screens/ShippingScreen'
import SingleOrderScreen from './screens/SingleOrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import PostScreen from './screens/PostScreen'
const App = () => {
  return (
    <Router>
      <Route path='/' component={MainScreen} exact></Route>
      <Route path='/login' component={LoginScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/cart' component={CartScreen}></Route>
      <Route path='/order' component={OrderScreen} exact></Route>
      <Route path='/myorders' component={OrderListScreen} exact></Route>
      <Route path='/order/:id' component={SingleOrderScreen}></Route>
      <Route path='/shipping' component={ShippingScreen}></Route>
      <Route path='/posts/:id' component={PostScreen}></Route>
    </Router>
  )
}

export default App
