import React from 'react'
import TableRow from './TableRow'
import { Table, Loader, Segment, Header, Icon } from 'semantic-ui-react'

class StaffTable extends React.Component {
	componentDidMount() {
		const { fetchStaff, userLogin } = this.props
		fetchStaff(userLogin)
	}

	render() {
		let rows
		if (this.props.isFetching) {
			rows = (
				<Table.Row>
					<Table.Cell>
						H
						<Segment style={styles.loaderSegment} basic>
							<Loader active content={'Loading Staff...'} size={'big'} />
						</Segment>
					</Table.Cell>
				</Table.Row>
			)
		} else {
			if (this.props.staff.length > 0) {
				rows = this.props.staff.map((staff, index) => {
					if (index == 0) {
						this.props.setClickedStaff(staff)
					}
					return (
						<TableRow
							staff={staff}
							key={index}
							toggleProfileVisibility={this.props.toggleProfileVisibility}
							toggleFormVisibility={this.props.toggleFormVisibility}
							setClickedStaff={this.props.setClickedStaff}
							removeStaff={this.props.removeStaff}
							clearStaffProfile={this.props.clearStaffProfile}
							editStaffProfile={this.props.editStaffProfile}
						/>
					)
				})
			} else {
				rows = (
					<Table.Row>
						<Table.Cell>
							<Segment placeholder style={styles.placeholderSegment} size={'big'}>
								<Header icon>
									<Icon name={'exclamation circle'} color={'red'} />
									<Header.Content>No staff exists in the database.</Header.Content>
									<Header.Content>Click the button above to add one.</Header.Content>
								</Header>
							</Segment>
						</Table.Cell>
					</Table.Row>
				)
			}
		}

		return (
			<div>
				<Table basic={'very'} collapsing style={styles.table}>
					<Table.Body>{rows}</Table.Body>
				</Table>
			</div>
		)
	}
}

const styles = {
	table: {
		width: '100%',
		padding: 30,
		paddingTop: 0
	},
	placeholderSegment: {
		border: 'dotted 5px'
	},
	loaderSegment: {
		height: 200
	}
}

export default StaffTable
