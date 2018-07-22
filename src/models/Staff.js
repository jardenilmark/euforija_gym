import Model from './Model';

class Staff extends Model {
  constructor(docs) {
    super(docs);
  }

  static get schema() {
    return {};
  }
}

export default Staff;