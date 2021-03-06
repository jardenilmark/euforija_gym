import React, { Component } from 'react'
import { List, Image, Segment, Header, Icon } from 'semantic-ui-react'

class StaffList extends Component {
	async componentDidMount() {
		await this.props.fetchAllStaff()
	}

	render() {
		const { staffs } = this.props
		if (staffs.length) {
			return (
				<List horizontal size={'big'} style={styles.list}>
					{staffs.map(staff => (
						<List.Item
							key={staff._id}
							style={styles.listItem}
							onClick={() => this.props.selectStaff(staff)}>
							<Image avatar src={staff.image} />
							<List.Content>
								<List.Header>{staff.idNumber}</List.Header>
								<p style={styles.name}>
									{staff.firstName} {staff.lastName}
								</p>
							</List.Content>
						</List.Item>
					))}
				</List>
			)
		}
		return (
			<Segment size={'tiny'}>
				<Header icon>
					<Icon name="exclamation circle" color={'red'} />
					<Header.Content>No Matched Staff.</Header.Content>
				</Header>
			</Segment>
		)
	}
}

const styles = {
	list: {
		display: 'flex',
		minWidth: '100%',
		maxHeight: '100px',
		overflowX: 'auto'
	},
	listItem: {
		display: 'flex',
		maxHeight: '50px',
		minWidth: '230px',
		margin: '5px'
	},
	name: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '180px'
	}
}

export default StaffList
