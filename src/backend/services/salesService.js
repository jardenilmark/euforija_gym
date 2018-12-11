import createService from './createService'

const inventoryService = (app, db) => {
	return () => {
		createService(app, db, 'sales')
	}
}

export default inventoryService
