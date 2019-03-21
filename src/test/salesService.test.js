import faker from 'faker'

describe('salesService', () => {
  describe('#setupSalesService', () => {
    const findStub = jest.fn()
    const createStub = jest.fn()
    const serviceStub = jest.fn()
    let fakeApp = jest.fn()
    let sale = [{
      product: faker.commerce.product(),
      price: faker.commerce.price(),
      date: new Date(),
    }, {
      product: faker.commerce.product(),
      price: faker.commerce.price(),
      date: new Date(),
    }]

    fakeApp = {
      service: serviceStub
    }

    serviceStub.mockReturnValue({
      create: createStub,
      find: findStub,
    })

    test('creates a new sale', () => {
      createStub.mockResolvedValue(sale[0])
      expect(fakeApp.service('salesService').create(sale[0])).not.toEqual('{}')
    })

    test('finds all sales from the database', () => {
      findStub.mockResolvedValue(sale)
      expect(fakeApp.service('salesService').find()).toEqual(Promise.resolve(sale))
    })
  })
})