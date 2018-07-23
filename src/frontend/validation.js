export const validate = (values) => {
  const errors = {}
  if (!(/^\d{4}$/g).test(values.idNumber)) {
    errors.idNumber = 'Invalid! ID Number must be a 6 digit number'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}
