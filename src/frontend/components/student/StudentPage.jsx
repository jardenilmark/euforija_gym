import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StudentPage = props => {
	return (
		<div>
			<Button as={Link} to={'/create-student'}>
				Create User
			</Button>
		</div>
	)
}

export default StudentPage
