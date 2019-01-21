import React from 'react'
import { Segment, Image, Header, Loader, Icon, Divider } from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

class StaffProfile extends React.Component {
	componentDidMount() {
		const id = this.props.clickedStaff
		this.props.getStaffProfile(id)
	}

	render() {
		const staff = this.props.staffProfile
		let content
		if (staff) {
			content = (
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
			)
		} else {
			content = (
				<Loader active content={'Loading Profile...'} size={'big'} style={{ marginTop: '100px' }} />
			)
		}
		return (
			<Segment basic style={{ padding: 40 }}>
				{content}
			</Segment>
		)
	}
}

const styles = {
	divider: {
		marginTop: 50
	}
}

export default StaffProfile
