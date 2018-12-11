import service from 'feathers-mongodb'

const createService = (app, db, collection) => {
	app.use(
		`api/${collection}`,
		service({
			Model: db.collection(collection)
		})
	)
	return app.service(`api/${collection}`)
}

export default createService
