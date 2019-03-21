import auth from '@feathersjs/authentication'
import local from '@feathersjs/authentication-local'
import jwt from '@feathersjs/authentication-jwt'

const setupAuthenticationService = (app) => {
  return () => {
    app
      .configure(auth(app.get('auth')))
      .configure(local())
      .configure(jwt())

    app.service('/api/authentication').hooks({
      before: {
        create: [
          auth.hooks.authenticate(['jwt', 'local'])
        ],
        remove: [
          auth.hooks.authenticate('jwt')
        ]
      }
    })
  }
}

export default setupAuthenticationService
