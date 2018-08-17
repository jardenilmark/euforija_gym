import createServices from './createService'
import validateHook from '../hooks/validate'
import transformHook from '../hooks/transfrom'
import objectIdHook from '../hooks/objectId'
import { populate } from 'feathers-hooks-common'
import Staff from '../../models/Staff'
import { hooks } from '@feathersjs/authentication-local'

const setupTrainorService = (app, db) => {
  return () => {
    const service = createServices(app, db, 'staffs')

    const trainorSchema = {
      include: [
        {
          service: '/api/students',
          nameAs: 'students',
          parentField: 'studentsIds',
          childField: '_id',
          asArray: true
        }
      ]
    }

    service.hooks({
      before: {
        create: [
          transformHook(Staff),
          objectIdHook('studentsIds'),
          hooks.hashPassword({ passwordField: 'password' }),
          validateHook()
        ],
        update: [
          objectIdHook('studentsIds'),
          hooks.hashPassword({ passwordField: 'password' })
        ],
        patch: [
          objectIdHook('studentsIds'),
          hooks.hashPassword({ passwordField: 'password' })
        ]
      },

      after: {
        all: [
          populate({ schema: trainorSchema })
        ]
      }
    })
  }
}

export default setupTrainorService
