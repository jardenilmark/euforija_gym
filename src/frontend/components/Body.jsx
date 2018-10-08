import React from 'react'
import { Route } from 'react-router-dom'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import HomeScreen from './homescreen/HomeScreen'
import Sale from '../redux/containers/sale/SaleContainer'

const Body = () => {
  return (
    <div>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/inventory' component={Inventory} />
      <Route exact path='/sales' component={Sale} />
    </div>
  )
}

export default Body
