import app from '../../client'
import swal from 'sweetalert'
import { comparePass } from '../../helpers/bcrypt'
const staff = 'api/staff'

export function handleLogin(data) {
	return async () => {
		const result = await app.service(staff).find({
			query: { idNumber: data.idNumber, $select: { password: 1 } }
		})
		console.log(result)
		if (result.length > 0) {
			const user = result[0]
			if (comparePass(data.password, user.password)) {
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
