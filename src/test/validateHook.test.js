import validate from '../backend/hooks/validate'
import Student from '../models/Student'
import Staff from '../models/Staff'
import faker from 'faker'

describe('validateHook', () => {
	let hookBefore
	const student = new Student({
		idNumber: '34UE83DB',
		firstName: 'Johnny',
		lastName: 'Smith',
		gender: 'male',
		birthdate: '01-01-1998',
		contactNumber: '09987654321',
		address: 'Leganes, Iloilo City',
		image: 'www.euforija.com'
	})

	const staff = new Staff({
		idNumber: '3JDI24OS',
		firstName: 'Lennar',
		lastName: 'de La Puerta',
		gender: 'male',
		birthdate: '01-01-1998',
		contactNumber: '09123456789',
		address: 'Jaro, Iloilo City',
		role: 'Coach',
		password: 'password',
		image: 'www.euforija.com',
		status: 'in'
	})

	beforeEach(() => {
		hookBefore = {
			type: 'before',
			method: 'create',
			data: student
		}
	})

	test('valid student data', () => {
		expect(validate()(hookBefore)).not.toBeUndefined()
	})
})
