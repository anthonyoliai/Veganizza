import React from 'react'

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'

const App = () => {
  return (
    <Router>
      <Route path='/' component={MainScreen} exact></Route>
      <Route path='/login' component={LoginScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/cart' component={CartScreen}></Route>
    </Router>
  )
}

export default App
