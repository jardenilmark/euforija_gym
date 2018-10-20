import createService from './createService'

const loginService = (app, db) => {
	return () => {
		createService(app, db, 'staff')
	}
}

export default loginService
