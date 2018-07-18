import service from 'feathers-mongodb'

const initializeServices = (app, db) => {
  app.use('/inventory', service({
    Model: db.collection('inventory')
  }))
}

export { initializeServices }
