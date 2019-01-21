import React from 'react'
import TableRow from './TableRow'
import { Table, Loader, Segment } from 'semantic-ui-react'

class StaffTable extends React.Component {
	componentDidMount() {
		this.props.fetchStaff()
	}

	render() {
		let rows
		console.log(this.props)
		if (this.props.staff) {
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
				<Segment style={{ height: '200px' }} basic>
					<Loader active content={'Loading Staff...'} size={'big'} />
				</Segment>
			)
		}

		return (
			<div>
				<Table
					basic={'very'}
					collapsing
					selectable
					style={{ width: '100%', padding: 30, paddingTop: 0 }}>
					<Table.Body>{rows}</Table.Body>
				</Table>
			</div>
		)
	}
}

export default StaffTable
