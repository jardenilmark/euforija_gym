export const getArray = (array, type) => {
	// to transfer in another file
	if (type === 'all') {
		return array
	}
	return array.filter(e => e.role === type)
}

export const options = array => {
	return [
		...new Set(
			array.map(e => {
				if (e.role.includes('coach')) {
					return e.role
				}
			})
		),
		'all'
	]
}
