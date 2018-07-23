import loginService from './loginService'

const setupServices = (app) => {
  return () => {
    app
      .configure(loginService(app))
  }
}

export default setupServices
