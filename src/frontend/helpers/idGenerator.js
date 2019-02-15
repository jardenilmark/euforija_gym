import randomstring from 'randomstring'
import date from 'date-fns'

export const generateId = user => {
	const { firstName, lastName } = user
	const name = `${firstName} ${lastName}`
	let id = name
		.split(' ')
		.map(part => part.charAt(0).toUpperCase())
		.join('')
	id += date.format(new Date(), 'MMYY')
	const len = 8 - id.length
	id +=
		len > 0
			? randomstring.generate({
					charset: 'numeric',
					length: len
			  })
			: Math.trunc(Math.random() * 10)
	return id
}
