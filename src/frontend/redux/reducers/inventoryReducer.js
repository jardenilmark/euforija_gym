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
	formId: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_INVENTORY':
			return {
				...state,
				items: action.payload
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
		case 'GET_FILTERED_INVENTORY':
			return {
				...state,
				filteredInv: action.payload
			}
		case 'ITEM_CREATED':
			return {
				...state,
				itemCreated: action.payload
			}
		default:
			return state
	}
}
