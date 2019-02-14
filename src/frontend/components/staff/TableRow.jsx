import React from 'react'
import { Table, Header, Image, Button } from 'semantic-ui-react'

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
		<Table.Row>
			<Table.Cell>
				<Header as={'h2'} image style={{ padding: 5, margin: 0 }}>
					<Image src={staff.image} circular />
					<Header.Content>
						{staff.lastName}, {staff.firstName}
						<Header.Subheader>{staff.role}</Header.Subheader>
					</Header.Content>
				</Header>
				<Button
					icon={'chevron right'}
					circular
					floated={'right'}
					style={{ marginTop: 30 }}
					onClick={() =>
						invokeFunctions(
							toggleFormVisibility,
							toggleProfileVisibility,
							setClickedStaff,
							staff._id
						)
					}
				/>
				<Button icon={'edit outline'} circular floated={'right'} style={{ marginTop: 30 }} />
				<Button
					icon={'trash alternate outline'}
					circular
					floated={'right'}
					style={{ marginTop: 30 }}
				/>
			</Table.Cell>
		</Table.Row>
	)
}

const styles = {}

export default TableExampleCollapsing
