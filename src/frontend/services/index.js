import inventoryService from './inventory/inventoryService'
import studentService from './student/studentService'
import salesService from './sales/salesService'
import fileService from './file/fileService'
import loginService from './login/loginService'
import staffService from './staff/staffService'

const setupService = app => {
	return () => {
		app
			.configure(studentService(app))
			.configure(inventoryService(app))
			.configure(salesService(app))
			.configure(fileService(app))
			.configure(loginService(app))
			.configure(staffService(app))
	}
}

export default setupService
