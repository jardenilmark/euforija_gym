import React from 'react'
import { Table, Header, Image, Button } from 'semantic-ui-react'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility, clearStaffProfile, setClickedStaff, id) => {
	toggleFormVisibility(false)
	// clearStaffProfile()
	toggleProfileVisibility(true)
	setClickedStaff(id)
}

const TableExampleCollapsing = ({
	staff,
	toggleProfileVisibility,
	setClickedStaff,
	toggleFormVisibility,
	removeStaff,
	clearStaffProfile
}) => {
	return (
		<Table.Row>
			<Table.Cell>
				<Header as={'h2'} image style={styles.header}>
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
					style={styles.button}
					onClick={() =>
						invokeFunctions(
							toggleFormVisibility,
							toggleProfileVisibility,
							clearStaffProfile,
							setClickedStaff,
							staff._id
						)
					}
				/>
				<Button
					icon={'edit outline'}
					circular
					floated={'right'}
					style={styles.button} />
				<Button
					icon={'trash alternate outline'}
					circular
					floated={'right'}
					style={styles.button}
					onClick={() => removeStaff(staff)}
				/>
			</Table.Cell>
		</Table.Row>
	)
}

const styles = {
	button: {
		marginTop: 30
	},
	header: {
		padding: 5,
		margin: 0
	}
}

export default TableExampleCollapsing
