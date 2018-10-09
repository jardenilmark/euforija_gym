import createServices from './createService'

const fileService = (app, db) => {
  return () => {
    const service = createServices(app, db, 'file')

    service.hooks({
      before: {
        create: [],
        update: [],
        patch: []
      }
    })
  }
}

export default fileService
