import createServices from './createService'
import { hooks } from '@feathersjs/authentication-local'
import transformHook from '../hooks/transfrom'
import validate from '../hooks/validate'
import Staff from '../../models/Staff'

const setupStaffService = (app, db) => {
	return () => {
		const service = createServices(app, db, 'staff')
		service.hooks({
			before: {
				create: [
					transformHook(Staff),
					validate(),
					hooks.hashPassword({
						passwordField: 'password'
					})
				],
				update: [
					hooks.hashPassword({
						passwordField: 'password'
					})
				],
				patch: [
					hooks.hashPassword({
						passwordField: 'password'
					})
				]
			}
		})
	}
}

export default setupStaffService
