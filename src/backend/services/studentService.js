import createServices from './createService'
import transform from '../hooks/transfrom'
import Student from '../../models/Student'
import validate from '../hooks/validate'

const setupStudentService = (app, db) => {
	return () => {
		const service = createServices(app, db, 'student')

		service.hooks({
			// before: {
			// 	create: [transform(Student), validate()]
			// },
			after: {
				find: [transform(Student)]
			}
		})
	}
}

export default setupStudentService
