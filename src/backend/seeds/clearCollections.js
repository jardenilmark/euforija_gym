import app from '../../frontend/client'

async function clear() {
	try {
		await app.service('api/staff').remove(null)
		await app.service('api/student').remove(null)
	} catch (error) {
		console.log(error)
	}
}

;(async () => {
	try {
		await clear()
		console.log('You have successfully cleared your db')
	} catch (error) {
		console.log(error)
	}
	process.exit(0)
})()
