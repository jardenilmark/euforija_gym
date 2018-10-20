import createServices from './createService'

const setupStudentService = (app, db) => {
	return () => {
		const service = createServices(app, db, 'students')

		service.hooks({
			before: {
				create: [],
				update: [],
				patch: []
			}
		})
	}
}

export default setupStudentService
