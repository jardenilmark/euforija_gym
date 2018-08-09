import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import Sale from '../redux/containers/sale/SaleContainer'

const Body = () => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/Inventory' component={Inventory} />
      <Route exact path='/Sale' component={Sale} />
    </div>
  )
}

export default Body
