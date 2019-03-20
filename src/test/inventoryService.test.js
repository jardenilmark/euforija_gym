import faker from 'faker'

describe('inventoryService', () => {
  describe('#setupInventoryService', () => {
    const findStub = jest.fn()
    const createStub = jest.fn()
    const serviceStub = jest.fn()
    let fakeApp = jest.fn()
    let item = {
      name: faker.commerce.productMaterial,
      quantity: faker.random.number,
      unit: 'pieces',
      price: faker.commerce.price
    }

    fakeApp = {
      service: serviceStub
    }

    serviceStub.mockReturnValue({
      create: createStub,
      find: findStub,
    })

    test('creates a new inventory item', () => {
      createStub.mockResolvedValue(item)
      expect(fakeApp.service('inventoryService').create(item)).not.toEqual('{}')
    })

    test('finds all items in the inventory', () => {
      findStub.mockResolvedValue(item)
      expect(fakeApp.service('inventoryService').find()).toEqual(Promise.resolve(item))
    })
  })
})