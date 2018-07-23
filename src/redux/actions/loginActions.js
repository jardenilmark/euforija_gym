import app from '../client'
import swal from 'sweetalert'
const location = 'api/staff'

export function handleLogin (data) {
  return async (dispatch) => {
    const result = await app.service(location).find({
      query: { username: data.username }
    })
    if (result.length > 0) {
      const user = result[0]
      if (user.password === data.password) {
        swal('Success', 'You have successfully logged in.', 'success')
      } else {
        swal('Oops', 'The password you entered is incorrect.', 'error')
      }
    } else {
      swal('Oops', 'User not found.', 'warning')
    }
  }
}
