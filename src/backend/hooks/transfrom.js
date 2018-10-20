const transformHook = ModelClass => {
	return context => {
		let resource
		context.type === 'before' ? (resource = 'data') : (resource = 'result')
		if (context[resource] instanceof Array) {
			context[resource] = context[resource].map(obj => new ModelClass(obj))
		} else if (context[resource] instanceof Object) {
			context[resource] = new ModelClass(context[resource])
		} else {
			return new Error('Transform Hook Error')
		}

		return context
	}
}

export default transformHook
