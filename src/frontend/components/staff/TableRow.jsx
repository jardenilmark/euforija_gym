import React from 'react'
import { Table, Header, Image, Button, Popup } from 'semantic-ui-react'
import { editStaffProfile } from '../../redux/actions/staffActions'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility, setClickedStaff, staff) => {
	toggleFormVisibility(false)
	toggleProfileVisibility(true)
	setClickedStaff(staff)
}

const TableExampleCollapsing = ({
	staff,
	toggleProfileVisibility,
	setClickedStaff,
	toggleFormVisibility,
	removeStaff,
	editStaffProfile
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
				<Popup
					content={'view profile'}
					inverted
					trigger={
						<Button
							icon={'chevron right'}
							circular
							floated={'right'}
							style={styles.button}
							onClick={() =>
								invokeFunctions(
									toggleFormVisibility,
									toggleProfileVisibility,
									setClickedStaff,
									staff
								)
							}
						/>
					}
				/>
				<Popup
					content={'edit staff'}
					inverted
					trigger={
						<Button
							icon={'edit outline'}
							circular
							floated={'right'}
							style={styles.button}
							onClick={() => editStaffProfile(staff)}
						/>
					}
				/>
				<Popup
					content={'delete staff'}
					inverted
					trigger={
						<Button
							icon={'trash alternate outline'}
							circular
							floated={'right'}
							style={styles.button}
							onClick={() => removeStaff(staff)}
						/>
					}
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
