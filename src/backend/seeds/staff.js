import faker from 'faker'
import app from '../../frontend/client'

let staffApi = 'api/staff'

async function seedStaff(count) {
	for (let i = 0; i < count; i++) {
		const staff = {
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

		try {
			await app.service(staffApi).create(staff)
		} catch (error) {
			console.log(error)
		}
	}
}

export default seedStaff
