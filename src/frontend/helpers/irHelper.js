// ir = income report
const manipulateItem = (obj, e) => {
	if (obj) {
		obj = obj + e.price
	} else {
		obj = e.price
	}
	return obj
}

export const getData = props => {
	const { sales, byItem } = props
	const data = []
	if (byItem) {
		sales.forEach(e => {
			const item = data.find(item => item.name === e.name)
			const date = new Date(e.date)
			if (!item) {
				data.push({
					name: e.name,
					data: {
						[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`]: e.price
					}
				})
			} else {
				const parsedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
				const obj = item.data[parsedDate]
				item.data[parsedDate] = manipulateItem(obj, e)
			}
		})
	} else {
		const dates = {}
		sales.forEach(e => {
			const date = new Date(e.date)
			const parsedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
			const obj = dates[parsedDate]
			dates[parsedDate] = manipulateItem(obj, e)
		})
		data.push({
			name: 'Sales',
			data: {
				...dates
			}
		})
	}
	return data
}
