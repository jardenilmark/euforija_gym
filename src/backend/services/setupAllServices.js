import setupStudentService from './studentService'
import setupStaffService from './staffService'
import setupInventoryService from './inventoryService'
import setupSaleService from './salesService'
import fileService from './fileService'
import loginService from './loginService'

const setupAllServices = (app, db) => {
	return () => {
		app
			.configure(setupInventoryService(app, db))
			.configure(setupStudentService(app, db))
			.configure(setupSaleService(app, db))
			.configure(setupStaffService(app, db))
			.configure(fileService(app, db))
			.configure(loginService(app, db))
	}
}

export default setupAllServices
