import Model from './Model'
import Joi from 'joi'

class Student extends Model {
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
			image: Joi.string().required()
		}
	}
}

export default Student
