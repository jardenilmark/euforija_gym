import setupStudentService from './studentService'
import setupStaffService from './staffService'
import setupInventoryService from './inventoryService'
import setupSaleService from './salesService'
import fileService from './fileService'
import loginService from './loginService'
import attendanceService from './attendanceService'
import authService from './authenticationService'
import priceService from './priceService'

const setupAllServices = (app, db) => {
	return () => {
		app
			.configure(setupInventoryService(app, db))
			.configure(setupStudentService(app, db))
			.configure(setupSaleService(app, db))
			.configure(setupStaffService(app, db))
			.configure(fileService(app, db))
			.configure(loginService(app, db))
			.configure(attendanceService(app, db))
			.configure(priceService(app, db))
		// .configure(authService(app))
	}
}

export default setupAllServices
