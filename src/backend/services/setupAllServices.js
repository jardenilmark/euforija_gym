import setupStudentService from './studentService'
import setupStaffService from './staffService'

const setupAllServices = (app, db) => {
  return () => {
    app
      .configure(setupStaffService(app, db))
      .configure(setupStudentService(app, db))
  }
}

export default setupAllServices
