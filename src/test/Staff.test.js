import Staff from '../models/Staff'

describe('Staff', () => {
	describe('#isValid', () => {
		let staff
		test('inputs are valid', () => {
			staff = new Staff({
				firstname: 'Lennar',
				lastname: 'de La Puerta',
				type: 'Trainor',
				studentsIds: []
			})
			expect(staff.isValid().toBeTruthy)
		})
		test('inputs are invalid', () => {
			staff = new Staff({
				firstname: 'Nic4',
				lastname: 'D3l4 Cruz',
				type: 'Trainor',
				studentsIds: []
			})
			expect(staff.isValid().toBeFalsy)
		})
	})
})
