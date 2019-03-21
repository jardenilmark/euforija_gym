import faker from 'faker'

describe('staffService', () => {
  describe('#setupStaffService', () => {
    const createStub = jest.fn()
    const findStub = jest.fn()
    const serviceStub = jest.fn()
    let fakeApp = jest.fn()
    let staff = {
      idNumber: `${faker.hacker.abbreviation()}-${faker.random.number()}`,
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			gender: faker.random.boolean() ? 'male' : 'female',
			birthdate: '1988-01-01',
			contactNumber: faker.phone.phoneNumberFormat(),
			address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
			role: Math.random() >= 0.3 ? 'Coach' : 'Maintenance',
			password: faker.internet.password(),
			image: faker.image.avatar(),
			status: faker.random.boolean() ? 'in' : 'out'
    }

    fakeApp = {
      service: serviceStub
    }

    serviceStub.mockReturnValue({
      create: createStub,
      find: findStub,
    })

    test('creates a new staff', () => {
      createStub.mockResolvedValue(staff)
      expect(fakeApp.service('staffService').create(staff)).not.toEqual('{}')
    })

    test('finds all staff', () => {
      findStub.mockResolvedValue(staff)
      expect(fakeApp.service('staffService').find()).toEqual(Promise.resolve(staff))
    })
  })
})