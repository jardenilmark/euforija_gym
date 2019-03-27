import Student from '../models/Student'

describe('Student', () => {
	describe('#isValid', () => {
		let student

		test('all inputs are valid', () => {
			student = new Student({
				idNumber: '34UE83DB',
				firstName: 'Johnny',
				lastName: 'Smith',
				gender: 'male',
				birthdate: '01-01-1998',
				contactNumber: '09987654321',
				address: 'Leganes, Iloilo City',
				image: 'www.euforija.com'
			})
			expect(student.isValid()).toBeTruthy()
		})

		test('all inputs are invalid', () => {
			student = new Student({
				idNumber: '12141315',
				firstName: 4,
				lastName: '???',
				gender: 'F',
				birthdate: '14-14-1997',
				contactNumber: '0918237124',
				address: 121.774
			})
			expect(student.isValid()).toBeFalsy()
		})

		test('all inputs are empty', () => {
			student = new Student({
				idNumber: '',
				firstName: '',
				lastName: '',
				gender: '',
				birthdate: '',
				contactNumber: '',
				address: ''
			})
			expect(student.isValid()).toBeFalsy()
		})
	})
})
