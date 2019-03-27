import Inventory from '../models/Inventory'

describe('Inventory', () => {
	describe('#isValid', () => {
		let item

		test('inputs are valid', () => {
			item = new Inventory({
				name: 'Protein Shake',
				quantity: 10,
				unit: 'piece',
				price: 350.0
			})
			expect(item.isValid()).toBeTruthy()
		})

		test('inputs are empty', () => {
			item = new Inventory({
				name: '',
				quantity: '',
				unit: '',
				price: ''
			})
			expect(item.isValid()).toBeFalsy()
		})

		test('inputs are invalid', () => {
			item = new Inventory({
				name: 98749534,
				quantity: '10',
				unit: 1232,
				price: '1000.00'
			})
			expect(item.isValid()).toBeFalsy()
		})

		test('name input is invalid', () => {
			item = new Inventory({
				name: 9124102,
				quantity: 50,
				unit: 'gallon',
				price: 35.0
			})
			expect(item.isValid()).toBeFalsy()
		})
	})
})
