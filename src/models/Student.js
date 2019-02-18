import Model from './Model'
import Joi from 'joi'

class Student extends Model {
  static get schema () {
    return {
      idNumber: Joi.string().alphanum().min(8).max(8).required(),
			firstName: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
			lastName: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
			gender: Joi.any().valid(['male', 'female']).required(),
			birthdate: Joi.date().required(),
      contactNumber: Joi.string().regex(/[0-9]*$/).max(11).required(),
			address: Joi.string().required(),
      password: Joi.string().alphanum().min(8).required(),
			// image: faker.image.avatar()
    }
  }
}

export default Student