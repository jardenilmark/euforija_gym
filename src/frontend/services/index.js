import inventoryService from './inventory/inventoryService'
import salesService from './sales/salesService'

const setupService = (app) => {
  return () => {
    app
      .configure(inventoryService(app))
      .configure(salesService(app))
  }
}

export default setupService
