import seedStaff from './staff'
import seedStudent from './student'

;(async () => {
	try {
		await seedStaff(10)
		await seedStudent(20)
		console.log('You have successfully seed your db')
	} catch (error) {
		console.log(error)
	}
	process.exit(0)
})()
