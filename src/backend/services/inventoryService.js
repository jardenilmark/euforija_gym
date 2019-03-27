import createService from './createService'
import search from 'feathers-mongodb-fuzzy-search'
import Inventory from '../../models/Inventory'
import transform from '../hooks/transfrom'
import validate from '../hooks/validate'

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
				],
				create: [transform(Inventory), validate()]
			}
		})
	}
}

export default inventoryService
