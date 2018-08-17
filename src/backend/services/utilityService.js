import createService from './createService'
import validateHook from '../hooks/validate'
import transformHook from '../hooks/transform'
import Utility from '../../models/Utility'
import { hooks } from '@feathersjs/authentication-local'

const setupUtilityService = (app, db) => {
  return () => {
    const service = createService(app, db, 'staffs')

    service.hooks({
      before: {
        create: [
          transformHook(Utility),
          hooks.hashPassword({ passwordField: 'password' }),
          validateHook()
        ],
        update: [
          hooks.hashPassword({ passwordField: 'password' })
        ],
        patch: [
          hooks.hashPassword({ passwordField: 'password' })
        ]
      }
    })
  }
}

export default setupUtilityService
