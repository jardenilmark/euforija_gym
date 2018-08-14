import createServices from './createService'
import validateHook from '../hooks/validate'
import transformHook from '../hooks/transfrom'
import objectIdHook from '../hooks/objectId'

const setupStudentService = (app, db) => {
  return () => {
    const service = createServices(app, db, 'students')

    service.hooks({
      before: {
        create: [],
        update: [],
        patch: []
      }
    })
  }
}

export default setupStudentService
