import Model from './Model'
import Joi from 'joi'

class Utility extends Model {
  static get schema () {
    return {
      idNumber: Joi.string().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
      firstname: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      lastname: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      type: Joi.string().required()
    }
  }
}

export default Utility
