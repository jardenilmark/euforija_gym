import createService from './createService'

const attendanceService = (app, db) => {
	return () => {
		createService(app, db, 'attendance')
	}
}

export default attendanceService
