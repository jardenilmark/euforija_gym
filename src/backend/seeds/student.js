import faker from 'faker'
import app from '../../frontend/client'

let studentApi = 'api/student'

async function seedStudent(count) {
	for (let i = 0; i < count; i++) {
		const student = {
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

		try {
			await app.service(studentApi).create(student)
		} catch (error) {
			console.log(error)
		}
	}
}

export default seedStudent
