import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'
import { getStaffProfile } from '../../redux/actions/staffActions'

const TableExampleCollapsing = ({ staff }) => {
	return (
		<Table.Row>
			<Table.Cell style={{ cursor: 'pointer', padding: '10' }}>
				<Header as="h2" image>
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
