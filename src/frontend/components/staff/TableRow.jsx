import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility, setClickedStaff, id) => {
	console.log(id)
	toggleFormVisibility(false)
	toggleProfileVisibility(true)
	setClickedStaff(id)
}

const TableExampleCollapsing = ({
	staff,
	toggleProfileVisibility,
	setClickedStaff,
	toggleFormVisibility
}) => {
	return (
		<Table.Row
			onClick={() =>
				invokeFunctions(toggleFormVisibility, toggleProfileVisibility, setClickedStaff, staff._id)
			}>
			<Table.Cell style={{ cursor: 'pointer', padding: '10' }}>
				<Header as={'h2'} image>
					<Image src={staff.image} circular />
					<Header.Content>
						{staff.lastName}, {staff.firstName}
						<Header.Subheader>{staff.role}</Header.Subheader>
					</Header.Content>
				</Header>
			</Table.Cell>
		</Table.Row>
	)
}

export default TableExampleCollapsing
