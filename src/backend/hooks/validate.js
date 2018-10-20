const validateHook = async context => {
	let result
	context.data.isValid() ? (result = context) : (result = new Error('Invalid data'))
	return result
}

export default validateHook
