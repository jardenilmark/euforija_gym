import React from 'react'
import TableRow from './TableRow'
import { Table, Loader, Segment, Header, Icon } from 'semantic-ui-react'

class StaffTable extends React.Component {
	componentDidMount() {
		this.props.fetchStaff()
	}

	render() {
		let rows
		if (this.props.isFetching) {
			rows = (
				<Table.Row>
					<Table.Cell>
						<Segment style={{ height: '200px' }} basic>
							<Loader active content={'Loading Staff...'} size={'big'} />
						</Segment>
					</Table.Cell>
				</Table.Row>
			)
		} else {
			if (this.props.staff.length > 0) {
				rows = this.props.staff.map((staff, index) => {
					return (
						<TableRow
							staff={staff}
							key={index}
							toggleProfileVisibility={this.props.toggleProfileVisibility}
							toggleFormVisibility={this.props.toggleFormVisibility}
							setClickedStaff={this.props.setClickedStaff}
						/>
					)
				})
			} else {
				rows = (
					<Table.Row>
						<Table.Cell>
							<Segment placeholder style={{ border: 'dotted 5px' }} size={'big'}>
								<Header icon>
									<Icon name="exclamation circle" color={'red'} />
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
				<Table basic={'very'} collapsing style={{ width: '100%', padding: 30, paddingTop: 0 }}>
					<Table.Body>{rows}</Table.Body>
				</Table>
			</div>
		)
	}
}

export default StaffTable
