import loginService from './loginService'

const setupServices = (app, db) => {
  return () => {
    app
      .configure(loginService(app, db))
  }
}

export default setupServices
