import Model from './Model'
import Joi from 'joi'

class Sales extends Model {
  static get schema() {
    return {
      product: Joi.string().required(),
      price: Joi.number().required(),
      date: Joi.date().required(),
    }
  }
}

export default Sales