import inventoryService from './inventory/inventoryService'
import salesService from './sales/salesService'
import fileService from './file/fileService'

const setupService = (app) => {
  return () => {
    app
      .configure(inventoryService(app))
      .configure(salesService(app))
      .configure(fileService(app))
  }
}

export default setupService
