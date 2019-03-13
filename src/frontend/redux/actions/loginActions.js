import app from '../../client'
import Swal from 'sweetalert2'
import jwt from 'jsonwebtoken'
import { comparePass } from '../../helpers/bcrypt'
import { privateKey } from '../../../../config/default.json'
const staffApi = 'api/staff'
const fileApi = 'api/file'

const getImageData = async data => {
	const image = await app.service(fileApi).find({ query: { _id: data.image } })
	return image[0].data
}
export function handleLogin(data) {
	return async dispatch => {
		const result = await app.service(staffApi).find({
			query: {
				idNumber: data.idNumber,
				$select: { password: 1, role: 1, firstName: 1, lastName: 1, image: 1, idNumber: 1 }
			}
		})
		if (result.length > 0) {
			const user = result[0]
			if (await comparePass(data.password, user.password)) {
				const token = jwt.sign(user, privateKey)
				window.localStorage.setItem('jwtToken', token)
				await app.service(staffApi).patch(user._id, { status: 'in' })
				const success = await Swal.fire('Success', 'You have successfully logged in!', 'success')
				const image = await getImageData(user)
				user.image = image
				if (success) {
					window.location.assign('/home')
					dispatch({ type: 'USER_LOGIN', payload: user })
					dispatch({ type: 'LOGIN_CHECKED', payload: true })
				}
			} else {
				Swal.fire('Oops', 'The password you entered is incorrect.', 'error')
			}
		} else {
			Swal.fire('Oops', 'User not found.', 'error')
		}
	}
}

export function logout() {
	return dispatch => {
		window.location.assign('/')
		window.localStorage.clear()
		dispatch({ type: 'USER_LOGIN', payload: undefined })
		dispatch({ type: 'LOGIN_CHECKED', payload: false })
	}
}

export function checkStorage() {
	return async dispatch => {
		const token = window.localStorage.getItem('jwtToken')
		if (token) {
			const legit = jwt.verify(token, privateKey)
			const image = await getImageData(legit)
			legit.image = image
			if (legit) {
				dispatch({ type: 'USER_LOGIN', payload: legit })
				dispatch({ type: 'LOGIN_CHECKED', payload: true })
			} else {
				Swal.fire('Oops', 'User not found.', 'error')
			}
		} else {
			const error = await Swal.fire('Restricted Access', 'You must login first!', 'error')
			if (error) {
				window.location.assign('/')
			}
		}
	}
}

export async function isValidAuthority(path) {
	try {
		const staffPaths = ['/sales', '/student', '/payroll']
		const token = window.localStorage.getItem('jwtToken')
		const user = jwt.verify(token, privateKey)
		if (user) {
			if (user.role !== 'Owner' && !staffPaths.includes(path)) {
				const error = await Swal.fire('Restricted Access', 'You must login first!', 'error')
				if (error) {
					window.location.assign('/home')
				}
				return false
			}
			return true
		} else {
			const error = await Swal.fire('Restricted Access', 'You must login first!', 'error')
			if (error) {
				window.location.assign('/')
			}
			return false
		}
	} catch (e) {
		const error = await Swal.fire('Restricted Access', 'You must login first!', 'error')
		if (error) {
			window.location.assign('/')
		}
	}
}

export function hasJWT() {
	return dispatch => {
		try {
			const token = window.localStorage.getItem('jwtToken')
			const legit = jwt.verify(token, privateKey)
			console.log(legit)
			if (legit) {
				window.location.assign('/home')
			}
		} catch (e) {}
	}
}
