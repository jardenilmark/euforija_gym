import date from 'date-fns'

export const sortDate = (a, b) => {
	if (date.isAfter(new Date(a.date), new Date(b.date))) {
		return 1
	} else if (date.isBefore(new Date(a.date), new Date(b.date))) {
		return -1
	} else {
		return 0
	}
}

export const removeUnpaired = dates => {
	dates = dates.sort(sortDate)
	const pairedDates = []
	const firstIndex = dates.findIndex(date => date.type === 'in')
	let status = 'in'
	if (dates.length) {
		for (let i = firstIndex; i < dates.length - 1; i++) {
			if (dates[i].type === status) {
				if (dates[i].type === 'in' && dates[i + 1].type === 'out') {
					pairedDates.push(dates[i])
					status = 'out'
				} else if (dates[i].type === 'out' && dates[i + 1].type === 'in') {
					pairedDates.push(dates[i])
					status = 'in'
				}
			}
		}
		pairedDates.push(dates[dates.length - 1])
		if (
			pairedDates[pairedDates.length - 1].type === 'in' ||
			pairedDates[pairedDates.length - 1].type === pairedDates[pairedDates.length - 2].type
		) {
			pairedDates.pop()
		}
	}
	return pairedDates
}

export const solveHours = dates => {
	let timeRendered = 0
	dates = removeUnpaired(dates)
	for (let i = 0; i < dates.length; i += 2) {
		timeRendered += date.differenceInSeconds(new Date(dates[i + 1].date), new Date(dates[i].date))
	}
	return timeRendered / 3600
}

export const solveGrossSalary = (hours, rate) => (hours * rate).toFixed(2)

export const pairDates = dates => {
	dates = dates.sort(sortDate)
	const pairedDates = []
	let status = ''
	dates.forEach(date => {
		if (status !== date.type) {
			if (date.type === 'in') {
				pairedDates.push([date])
			} else {
				pairedDates[pairedDates.length - 1].push(date)
			}
		} else {
			pairedDates.push([date])
		}
	})
	return pairedDates
}
