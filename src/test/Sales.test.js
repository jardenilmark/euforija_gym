import Sales from '../models/Sales'

describe('Sales', () => {
  describe('#isValid', () => {
    let sale

    test('valid inputs', () => {
      sale = new Sales({
        product: 'Energy Drink',
        price: 50.00,
        date: new Date(),
      })
      expect(sale.isValid()).toBeTruthy
    })

    test('invalid inputs', () => {
      sale = new Sales({
        product: 3487138,
        price: '100.00',
        date: 'today',
      })
      expect(sale.isValid()).toBeFalsy
    })

    test('empty inputs', () => {
      sale = new Sales({
        product: '',
        price: '',
        date: '',
      })
      expect(sale.isValid()).toBeFalsy
    })
  })
})