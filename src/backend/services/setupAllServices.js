import setupStudentService from './studentService'
import setupStaffService from './staffService'
import setupInventoryService from './inventoryService'
import fileService from './fileService'

const setupAllServices = (app, db) => {
  return () => {
    app
      .configure(setupStaffService(app, db))
      .configure(setupStudentService(app, db))
      .configure(setupInventoryService(app, db))
      .configure(fileService(app, db))
  }
}

export default setupAllServices
