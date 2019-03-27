import faker from 'faker'

describe('studentService', () => {
  describe('#setupUserService', () => {
    const findStub = jest.fn()
    const createStub = jest.fn()
    const serviceStub = jest.fn()
    let fakeApp = jest.fn()
    let student = {
      idNumber: `${faker.hacker.abbreviation()}-${faker.random.number()}`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.random.boolean() ? 'male' : 'female',
      birthdate: '1988-01-01',
      contactNumber: faker.phone.phoneNumberFormat(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      password: faker.internet.password(),
      image: faker.image.avatar()
    }

    fakeApp = {
      service: serviceStub
    }

    serviceStub.mockReturnValue({
      create: createStub,
      find: findStub,
    })

    test('creates a new student account', () => {
      createStub.mockResolvedValue(student)
      expect(fakeApp.service('userService').create(student)).not.toEqual('{}')
    })

    test('finds one student account', () => {
      findStub.mockResolvedValue(student)
      expect(fakeApp.service('userService').find()).toEqual(Promise.resolve(student))
    })
  })
})