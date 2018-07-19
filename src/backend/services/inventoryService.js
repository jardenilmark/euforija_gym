import createService from './createService'

const inventoryService = (app, db) => {
  return () => {
    createService(app, db, 'inventory')
  }
}

export default inventoryService
