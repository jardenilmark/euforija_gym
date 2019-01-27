import React from 'react'
import { Route } from 'react-router-dom'
import Inventory from '../redux/containers/inventory/InventoryContainer'
import Attendance from '../components/attendance/Attendance'
import HomeScreen from './homescreen/HomeScreen'
import Sale from '../redux/containers/sale/SaleContainer'
import Login from '../redux/containers/login/LoginContainer'
import Student from './student/StudentPage'
import CreateStudent from '../redux/containers/student/CreateStudentPage'
import Staff from '../redux/containers/staff/StaffPage'
import Report from '../redux/containers/report/IncomeReport'
import 'semantic-ui-css/semantic.min.css'
import 'izitoast/dist/css/iziToast.min.css'
import 'izitoast/dist/js/iziToast.min.js'

const Body = () => {
	return (
		<div>
			<Route exact path={'/'} component={Login} />
			<Route exact path={'/inventory'} component={Inventory} />
			<Route exact path={'/sales'} component={Sale} />
			<Route exact path={'/home'} component={HomeScreen} />
			<Route exact path={'/attendance'} component={Attendance} />
			<Route exact path={'/staff'} component={Staff} />
			<Route exact path={'/student'} component={Student} />
			<Route exact path={'/create-student'} component={CreateStudent} />
			<Route exact path={'/income-report'} component={Report} />
		</div>
	)
}

export default Body
