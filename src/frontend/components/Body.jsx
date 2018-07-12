import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Inventory from './Inventory'

const Body = (props) => {
  // console.log(history)
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/Inventory' component={Inventory} />
    </div>
  )
}

export default Body
