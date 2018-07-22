const inventoryService = (app) => {
  return () => {
    app.service('api/inventory')
  }
}

export default inventoryService
