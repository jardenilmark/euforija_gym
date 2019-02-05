// ir = income report

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
				if (item.data[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`]) {
					item.data[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] =
						item.data[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] + e.price
				} else {
					item.data[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] = e.price
				}
			}
		})
	} else {
		const dates = {}
		sales.forEach(e => {
			const date = new Date(e.date)
			if (dates[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`]) {
				dates[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] =
					dates[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] + e.price
			} else {
				dates[`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`] = e.price
			}
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
