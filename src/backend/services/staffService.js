import createServices from './createService'
import encryptPassword from '../hooks/user'

const setupStaffService = (app, db) => {
	return () => {
		const service = createServices(app, db, 'staff')
		service.hooks({
			before: {
				create: [encryptPassword]
			}
		})
	}
}

export default setupStaffService

// import validateHook from '../hooks/validate'
// import transformHook from '../hooks/transfrom'
// import objectIdHook from '../hooks/objectId'
// import { populate } from 'feathers-hooks-common'
// import Staff from '../../models/Staff'
// const staffSchema = {
// 	include: [
// 		{
// 			service: '/api/students',
// 			nameAs: 'students',
// 			parentField: 'studentsIds',
// 			childField: '_id',
// 			asArray: true
// 		}
// 	]
// }

// service.hooks({
// 	before: {
// 		create: [transformHook(Staff), objectIdHook('studentsIds'), validateHook()],
// 		update: [objectIdHook('studentsIds')],
// 		patch: [objectIdHook('studentsIds')]
// 	},

// 	after: {
// 		all: [populate({ schema: staffSchema })],
// 		find: [transformHook(Staff)],
// 		get: [transformHook(Staff)]
// 	}
// })
