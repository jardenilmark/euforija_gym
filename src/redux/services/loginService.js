const loginService = (app) => {
  return () => {
    app.service('api/staff')
  }
}

export default loginService
