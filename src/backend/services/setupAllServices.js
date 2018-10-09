import setupStudentService from './studentService'
import setupStaffService from './staffService'
import setupInventoryService from './inventoryService'
import setupSaleService from './salesService'
import fileService from './fileService'
import loginService from './loginService'
import attendanceService from './attendanceService'

const setupAllServices = (app, db) => {
  return () => {
    app
      .configure(setupStaffService(app, db))
      .configure(setupStudentService(app, db))
      .configure(setupInventoryService(app, db))
      .configure(setupSaleService(app, db))
      .configure(fileService(app, db))
      .configure(loginService(app, db))
      .configure(attendanceService(app, db))
  }
}

export default setupAllServices
