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
        password: 'thisismypassword',
      })
      expect(student.isValid()).toBeTruthy
    })

    test('all inputs are invalid', () => {
      student = new Student({
        idNumber: '12141315',
        firstName: 4,
        lastName: '???',
        gender: 'F',
        birthdate: '14-14-1997',
        contactNumber: '0918237124',
        address: 121.7740,
        password: 'short',
      })
      expect(student.isValid()).toBeFalsy
    })

    test('all inputs are empty', () => {
      student = new Student({
        idNumber: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthdate: '',
        contactNumber: '',
        address: '',
        password: '',
      })
      expect(student.isValid()).toBeFalsy
    })
  })
})