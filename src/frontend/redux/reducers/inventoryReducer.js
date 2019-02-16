import Swal from 'sweetalert'
const initialState = {
	items: [],
	activeItem: 'name',
	filteredInv: [],
	initialVal: {
		name: '',
		price: 0,
		quantity: 0,
		image: ''
	},
	editModalState: false,
	addModalState: false,
	deleteModalState: false,
	isFetchingInventory: false,
	isFilteringInventory: false,
	formId: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCHING_INVENTORY_SUCCESS':
			return {
				...state,
				items: action.payload,
				isFetchingInventory: false
			}
		case 'FETCHING_INVENTORY':
			return {
				...state,
				isFetchingInventory: true
			}
		case 'GET_NAME_VAL':
			return {
				...state,
				nameVal: action.payload
			}
		case 'GET_PRICE_ONE':
			return {
				...state,
				priceOne: action.payload
			}
		case 'GET_PRICE_TWO':
			return {
				...state,
				priceTwo: action.payload
			}
		case 'GET_EDIT_FORM_ID':
			return {
				...state,
				formId: action.payload
			}
		case 'GET_IMAGE_ID':
			return {
				...state,
				imageId: action.payload
			}
		case 'DELETE_FORM_STATE':
			return {
				...state,
				deleteModalState: action.payload
			}
		case 'ADD_FORM_STATE':
			return {
				...state,
				addModalState: action.payload
			}
		case 'EDIT_FORM_ID':
			return {
				...state,
				formId: action.payload
			}
		case 'EDIT_FORM_STATE':
			return {
				...state,
				editModalState: action.payload
			}
		case 'GET_INITIAL_VALUES':
			return {
				...state,
				initialVal: action.payload
			}
		case 'GET_ACTIVE_ITEM_INVENTORY':
			return {
				...state,
				activeItem: action.payload
			}
		case 'FILTERING_INVENTORY_SUCCESS':
			return {
				...state,
				filteredInv: action.payload,
				isFilteringInventory: false
			}
		case 'FILTERING_INVENTORY':
			return {
				...state,
				isFilteringInventory: true
			}
		case 'GET_FILTERED_INVENTORY':
			return {
				...state,
				filteredInv: action.payload
			}
		case 'FILTERING_INVENTORY_FAILED':
			Swal.fire({
				type: 'error',
				title: action.payload,
				showConfirmButton: false,
				timer: 1500
			})
			break
		case 'ITEM_CREATED':
			return {
				...state,
				itemCreated: action.payload
			}
		default:
			return state
	}
}
