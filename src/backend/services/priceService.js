import createService from './createService'

const loginService = (app, db) => {
	return () => {
		createService(app, db, 'price')
	}
}

export default loginService
