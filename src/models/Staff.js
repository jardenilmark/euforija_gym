import Model from './Model'
import Joi from 'joi'

class Staff extends Model {
	static get schema() {
		return {
			idNumber: Joi.string()
				.min(8)
				.required(),
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			gender: Joi.any()
				.valid(['male', 'female'])
				.required(),
			birthdate: Joi.string().required(),
			contactNumber: Joi.string().required(),
			address: Joi.string().required(),
			role: Joi.any()
				.valid(['Coach', 'Maintenance', 'Owner'])
				.required(),
			password: Joi.string().required(),
			image: Joi.string().required(),
			status: Joi.any()
				.valid(['in', 'out'])
				.required()
		}
	}
}

export default Staff
