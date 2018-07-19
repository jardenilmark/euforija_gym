import inventoryService from './inventoryService'

const setupServices = (app, db) => {
  return () => {
    app
      .configure(inventoryService(app, db))
  }
}

export default setupServices
