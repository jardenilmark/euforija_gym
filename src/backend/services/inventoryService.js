import createService from './createService'
import search from 'feathers-mongodb-fuzzy-search'

const inventoryService = (app, db) => {
	return () => {
		const service = createService(app, db, 'inventory')
		service.hooks({
			before: {
				all: [
					search(),
					search({
						fields: ['name']
					})
				]
			}
		})
	}
}

export default inventoryService
