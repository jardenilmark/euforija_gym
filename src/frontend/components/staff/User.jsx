import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const User = props => {
	return (
		<div>
			<Button as={Link} to={'/create-staff'}>
				Create User
			</Button>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>ID</Table.HeaderCell>
						<Table.HeaderCell>Firstname</Table.HeaderCell>
						<Table.HeaderCell>Lastname</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>ID</Table.Cell>
						<Table.Cell>Firstname</Table.Cell>
						<Table.Cell>Lastname</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	)
}

export default User
