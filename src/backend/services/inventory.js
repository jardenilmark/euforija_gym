export default class Inventory {
  constructor (app) {
    this.app = app
  }

  async addItem (data) {
    return this.app.service('inventory').create({data: data})
  }

  async removeItem (id) {
    return this.app.service('inventory').remove(id)
  }
}
