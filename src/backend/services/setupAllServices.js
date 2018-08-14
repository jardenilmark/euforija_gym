import setupStudentService from './studentService'
import setupStaffService from './staffService'
import setupInventoryService from './inventoryService'
import setupSaleService from './salesService'

const setupAllServices = (app, db) => {
  return () => {
    app
      .configure(setupStaffService(app, db))
      .configure(setupStudentService(app, db))
      .configure(setupInventoryService(app, db))
      .configure(setupSaleService(app, db))
  }
}

export default setupAllServices
