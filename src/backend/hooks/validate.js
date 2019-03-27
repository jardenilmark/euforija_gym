function validateHook() {
	return function execute(context) {
		if (context.data.isValid()) {
			return context
		} else {
			return new Error('Invalid data')
		}
	}
}

export default validateHook
