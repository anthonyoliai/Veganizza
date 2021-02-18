import React from 'react'

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' component={MainScreen} exact></Route>
      <Route path='/login' component={LoginScreen}></Route>
    </Router>
  )
}

export default App
