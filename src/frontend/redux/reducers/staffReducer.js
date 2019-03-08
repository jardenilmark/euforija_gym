import Swal from 'sweetalert2'
import iziToast from 'izitoast'

const initialState = {
	staffFormVisibility: false,
	staffProfileVisibility: true,
	cropImageModalVisibility: false,
	isFetching: false,
	staffList: [],
	image: null,
	crop: { x: 0, y: 0 },
	croppedImage: null,
	croppedAreaPixels: null,
	type: 'all',
	loginChecked: false,
	initialValues: {},
	clickedStaff: null
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'STAFF_CREATED':
			return {
				...state,
				image: null,
				croppedImage: null
			}
		case 'STAFF_FILTER':
			return {
				...state,
				type: action.payload
			}
		case 'STAFF_FORM_VISIBILITY':
			return {
				...state,
				staffFormVisibility: action.payload
			}
		case 'STAFF_PROFILE_VISIBILITY':
			return {
				...state,
				staffProfileVisibility: action.payload
			}
		case 'SET_CLICKED_STAFF':
			return {
				...state,
				clickedStaff: action.payload
			}
		case 'FETCHING_STAFF':
			return {
				...state,
				isFetching: true
			}
		case 'EDIT_STAFF_PROFILE':
			const staff = action.payload
			delete staff.password
			console.log(action.payload)
			return {
				...state,
				initialValues: staff,
				staffFormVisibility: true,
				staffProfileVisibility: false,
				croppedImage: staff.image
			}
		case 'FETCHING_STAFF_SUCCESS':
			return {
				...state,
				isFetching: false,
				staffList: action.payload
			}
		case 'FETCHING_STAFF_FAILED':
			Swal.fire({
				position: 'top-start',
				type: 'error',
				title: action.payload,
				showConfirmButton: false,
				timer: 1500
			})
			return {
				...state
			}
		case 'SAVE_IMAGE':
			return {
				...state,
				image: action.payload
			}
		case 'CLEAR_IMAGE':
			return {
				...state,
				image: null,
				croppedImage: null
			}
		case 'REMOVE_STAFF_SUCCESS':
			iziToast.success({
				title: 'SUCCESS',
				message: 'Staff removed successfully!',
				position: 'topRight'
			})
			return {
				...state
			}
		case 'REMOVE_STAFF_FAILED':
			Swal.fire({
				position: 'top-start',
				type: 'error',
				title: action.payload,
				showConfirmButton: false,
				timer: 1500
			})
			return {
				...state
			}
		case 'CHANGE_CROP_VALUE':
			return {
				...state,
				crop: action.payload
			}
		case 'CROP_COMPLETED':
			return {
				...state,
				croppedAreaPixels: action.payload
			}
		case 'TOGGLE_CROP_IMAGE_MODAL':
			return {
				...state,
				cropImageModalVisibility: !state.cropImageModalVisibility
			}
		case 'GET_CROPPED_IMAGE':
			console.log(action.payload)
			return {
				...state,
				croppedImage: action.payload
			}
		case 'USER_LOGIN':
			return {
				...state,
				userLogin: action.payload
			}
		case 'LOGIN_CHECKED':
			return {
				...state,
				loginChecked: action.payload
			}
		default:
			return state
	}
}
