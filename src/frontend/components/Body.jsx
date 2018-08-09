import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import HomeScreen from './homescreen/HomeScreen'

const Body = () => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/Inventory' component={Inventory} />
      <Route exact path='/Home' component={HomeScreen} />
    </div>
  )
}

export default Body
