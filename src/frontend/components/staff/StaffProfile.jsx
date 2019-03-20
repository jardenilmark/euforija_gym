import React from 'react'
import { Segment, Image, Header, Icon, Divider } from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

const StaffProfile = ({ clickedStaff }) => {
	const staff = clickedStaff
	return (
		<Segment basic style={{ padding: 40 }}>
			<Segment basic>
				<Image src={staff.image} circular size={'small'} floated={'left'} />
				<Header as={'h1'}>
					<Header.Content>
						{staff.lastName}, {staff.firstName}
					</Header.Content>
					<HeaderSubHeader>
						<Icon name={'briefcase'} /> <b>{staff.role}</b>
					</HeaderSubHeader>
					<HeaderSubHeader>
						<Icon name={'text telephone'} /> <b>{staff.contactNumber}</b>
					</HeaderSubHeader>
					<HeaderSubHeader>
						<Icon name={'location arrow'} /> <b>{staff.address}</b>
					</HeaderSubHeader>
				</Header>
				<Divider style={styles.divider} />
			</Segment>
		</Segment>
	)
}

const styles = {
	divider: {
		marginTop: 50
	}
}

export default StaffProfile
