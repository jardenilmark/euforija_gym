import Staff from '../models/Staff'

describe('Staff', () => {
  describe('#isValid', () => {
    let staff

    test('inputs are valid', () => {
      staff = new Staff({
        idNumber: '3JDI24OS',
        firstName: 'Lennar',
        lastName: 'de La Puerta',
        gender: 'male',
        birthdate: '01-01-1998',
        contactNumber: '09123456789',
        address: 'Jaro, Iloilo City',
        role: 'Coach',
        password: 'password',
        status: 'in'
      })
      expect(staff.isValid().toBeTruthy)
    })

    test('all inputs are invalid', () => {
      staff = new Staff({
        idNumber: 'ASDF32421FDS',
        firstName: 'D@ndy',
        lastName: 'P()rr@s',
        gender: 'M',
        birthdate: 'January 1, 1998',
        contactNumber: '091234567890',
        address: 12.8797,
        role: 'Sanitary Engineer',
        password: 'pwd',
        status: 'absent'
      })
      expect(staff.isValid().toBeFalsy)
    })

    test('all inputs are blank', () => {
      staff = new Staff({
        idNumber: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthdate: '',
        contactNumber: '',
        address: '',
        role: '',
        password: '',
        status: ''
      })
      expect(staff.isValid().toBeFalsy)
    })
  })
})