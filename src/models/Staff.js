import Model from './Model'
import Joi from 'joi'

class Staff extends Model {
  static get schema() {
    return {
      idNumber: Joi.string().alphanum().min(8).max(8).required(),
      firstName: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      lastName: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      gender: Joi.any().valid(['male', 'female']).required(),
      birthdate: Joi.date().required(),
      contactNumber: Joi.string().regex(/[0-9]*$/).max(11).required(),
      address: Joi.string().required(),
      role: Joi.any().valid(['Coach', 'Maintenance']).required(),
      password: Joi.string().alphanum().min(8).required(),
      image: Joi.string().base64().required(),
      status: Joi.any().valid(['in', 'out']).required()
    }
  }
}

export default Staff