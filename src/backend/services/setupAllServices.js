import setupStudentService from './studentService'
import setupTrainorService from './trainorService'
import setupUtilityService from './utilityService'
import setupAuthService from './authenticationService'

const setupAllServices = (app, db) => {
  return () => {
    app
      .configure(setupTrainorService(app, db))
      .configure(setupUtilityService(app, db))
      .configure(setupStudentService(app, db))
      .configure(setupAuthService(app))
  }
}

export default setupAllServices
