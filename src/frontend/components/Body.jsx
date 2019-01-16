import React from 'react'
import { Route } from 'react-router-dom'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import Attendance from '../components/attendance/Attendance'
import HomeScreen from './homescreen/HomeScreen'
import Sale from '../redux/containers/sale/SaleContainer'
import Login from '../redux/containers/login/LoginContainer'
import Student from './student/StudentPage'
import CreateStudent from '../redux/containers/student/CreateStudentPage'
import Staff from './staff/Staff'
import 'semantic-ui-css/semantic.min.css'

const Body = () => {
	return (
		<div>
			<Route exact path={'/'} component={Login} />
			<Route exact path={'/inventory'} component={Inventory} />
			<Route exact path={'/sales'} component={Sale} />
			<Route exact path={'/home'} component={HomeScreen} />
			<Route exact path={'/attendance'} component={Attendance} />
			<Route exact path={'/create-staff'} component={Staff} />
			<Route exact path={'/student'} component={Student} />
			<Route exact path={'/create-student'} component={CreateStudent} />
		</div>
	)
}

export default Body
