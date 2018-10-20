import React from 'react'
import { Route } from 'react-router-dom'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import Attendance from '../components/attendance/Attendance'
import HomeScreen from './homescreen/HomeScreen'
import Sale from '../redux/containers/sale/SaleContainer'
import Login from '../redux/containers/login/LoginContainer'

const Body = () => {
	return (
		<div>
			<Route exact path={'/'} component={HomeScreen} />
			<Route exact path={'/inventory'} component={Inventory} />
			<Route exact path={'/sales'} component={Sale} />
			<Route exact path={'/login'} component={Login} />
			<Route exact path={'/Attendance'} component={Attendance} />
		</div>
	)
}

export default Body
