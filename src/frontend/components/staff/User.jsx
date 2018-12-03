import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const User = props => {
	return (
		<div>
			<Button as={Link} to={'/create-staff'}>
				Create User
			</Button>
			user
		</div>
	)
}

export default User
