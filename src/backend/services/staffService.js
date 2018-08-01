import createServices from './createService'
import validateHook from '../hooks/validate'

const setupStaffService = (db) => {
  return () => {
    const app = this
    const service = createServices(app, db, 'staff')

    service.hooks({
      before: {
        create: [
          validateHook()
        ],
        update: [],
        remove: []
      }
    })
  }
}

export default setupStaffService
