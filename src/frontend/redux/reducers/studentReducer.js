import Swal from 'sweetalert2'

const initialState = {
	activeForm: 'personal',
	personal: {},
	health: {},
	trainer: {},
	payment: {},
	image: null,
	crop: { x: 0, y: 0 },
	croppedImage: null,
	croppedAreaPixels: null,
	cropImageModalVisibility: false,
	paymentMethod: 'full',
	isFetching: false,
	studentsList: [],
	profileVisibility: false,
	formVisibility: false,
	clickedStudent: null
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ACTIVE_STUDENT_FORM':
			return {
				...state,
				activeForm: action.payload
			}
		case 'STEP_PERSONAL':
			return {
				...state,
				personal: action.payload
			}
		case 'STEP_HEALTH':
			return {
				...state,
				health: action.payload
			}
		case 'STEP_TRAINER':
			return {
				...state,
				trainer: action.payload
			}
		case 'PAYMENT_METHOD':
			return {
				...state,
				paymentMethod: action.payload
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
		case 'FETCHING_STUDENTS':
			return {
				...state,
				isFetching: true
			}
		case 'FETCHING_STUDENTS_SUCCESS':
			return {
				...state,
				isFetching: false,
				studentsList: action.payload
			}
		case 'FETCHING_STUDENTS_FAILED':
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
		case 'TOGGLE_PROFILE_VISIBILITY':
			return {
				...state,
				profileVisibility: action.payload
			}
		case 'TOGGLE_FORM_VISIBILITY':
			return {
				...state,
				formVisibility: action.payload
			}
		case 'SET_CLICKED_STUDENT':
			return {
				...state,
				clickedStudent: action.payload
			}
		case 'STUDENT_CREATED':
			return {
				...state,
				image: null,
				croppedImage: null,
				activeForm: 'personal',
				trainer: {}
			}
		default:
			return state
	}
}
