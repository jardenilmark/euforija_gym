import app from '../../client'
import swal from 'sweetalert'
// import createHistory from 'history/createBrowserHistory'

const location = 'api/staff'
// const history = createHistory()

export function handleLogin (data) {
  return async (dispatch) => {
    const result = await app.service(location).find({
      query: { idNumber: data.idNumber }
    })
    if (result.length > 0) {
      const user = result[0]
      if (user.password === data.password) {
        window.location.assign('/')
        swal('Success', 'You have successfully logged in.', 'success')
      } else {
        swal('Oops', 'The password you entered is incorrect.', 'error')
      }
    } else {
      swal('Oops', 'User not found.', 'error')
    }
  }
}
