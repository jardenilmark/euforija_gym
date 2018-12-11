const studentService = app => {
	return () => {
		app.service('api/student')
	}
}

export default studentService
