import inventoryService from './inventoryService'
import salesService from './salesService'

const setupServices = (app, db) => {
  return () => {
    app
      .configure(inventoryService(app, db))
      .configure(salesService(app, db))
  }
}

export default setupServices
