import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Inventory from './Inventory'
import Login from './Login'

const Body = (props) => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/Inventory' component={Inventory} />
      <Route exact path='/login' component={Login} />
    </div>
  )
}

export default Body
