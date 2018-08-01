import Joi from 'joi'
import Model from './Model'

class Staff extends Model {
  static get schema () {
    return {
      firstname: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      lastname: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
      type: Joi.string().required(),
      studentsIds: Joi.array()
    }
  }
}

export default Staff
