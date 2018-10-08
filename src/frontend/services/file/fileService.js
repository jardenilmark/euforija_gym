const fileService = (app) => {
  return () => {
    app.service('api/file')
  }
}

export default fileService
