import feathersMongo from 'feathers-mongodb';

const createDBService = (app, db, collectionName) => {
  app.use(`/api/${collectionName}`, feathersMongo({ Model: db.collection(collectionName) }));
  return app.service(`/api/${collectionName}`);
}

export default createDBService;