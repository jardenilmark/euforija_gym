import Joi from 'joi'

class Model {
  constructor (docs) {
    Object.assign(this, docs)
  }

  static get schema () {
    return {}
  }

  isValid () {
    const result = Joi.validate(this, this.constructor.schema)
    return result.error == null
  }
}

export default Model
