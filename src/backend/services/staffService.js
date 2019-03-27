import createServices from './createService'
import transformHook from '../hooks/transfrom'
import validate from '../hooks/validate'
import Staff from '../../models/Staff'
import encryptPassword from '../hooks/user'

const setupStaffService = (app, db) => {
	return () => {
		const service = createServices(app, db, 'staff')
		service.hooks({
			before: {
				create: [transformHook(Staff), validate(), encryptPassword],
				update: [encryptPassword],
				patch: [encryptPassword]
			}
		})
	}
}

export default setupStaffService
