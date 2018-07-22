import inventoryService from './inventoryService'

const setupService = (app) => {
  return () => {
    app
      .configure(inventoryService(app))
  }
}

export default setupService
