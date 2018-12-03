import React from 'react'
import { Route } from 'react-router-dom'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import Attendance from '../components/attendance/Attendance'
import HomeScreen from './homescreen/HomeScreen'
import Sale from '../redux/containers/sale/SaleContainer'
import Login from '../redux/containers/login/LoginContainer'
import User from './staff/User'
import Staff from '../redux/containers/staff/CreateContainer'

const Body = () => {
	return (
		<div>
			<Route exact path={'/'} component={Login} />
			<Route exact path={'/inventory'} component={Inventory} />
			<Route exact path={'/sales'} component={Sale} />
			<Route exact path={'/home'} component={HomeScreen} />
			<Route exact path={'/attendance'} component={Attendance} />
			<Route exact path={'/staff'} component={User} />
			<Route exact path={'/create-staff'} component={Staff} />
		</div>
	)
}

export default Body
