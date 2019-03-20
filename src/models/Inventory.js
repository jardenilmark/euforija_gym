import Model from './Model'
import Joi from 'joi'

class Inventory extends Model {
  static get schema() {
    return {
      name: Joi.string().required(),
      quantity: Joi.number().min(1).required(),
      unit: Joi.string().required(),
      price: Joi.number().required(),
    }
  }
}

export default Inventory