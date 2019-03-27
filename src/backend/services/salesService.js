import createService from './createService'
import Sales from '../../models/Sales'
import transform from '../hooks/transfrom'
import validate from '../hooks/validate'

const inventoryService = (app, db) => {
	return () => {
		const service = createService(app, db, 'sales')

		service.hooks({
			before: {
				// create: [transform(Sales), validate()]
			}
		})
	}
}

export default inventoryService
