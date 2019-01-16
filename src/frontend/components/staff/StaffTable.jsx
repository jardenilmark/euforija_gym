import React from 'react'
import TableRow from './TableRow'
import { Table } from 'semantic-ui-react'

class StaffTable extends React.Component {
	componentDidMount() {
		this.props.fetchStaff()
	}

	render() {
		let rows
		console.log(this.props.staff)
		if (this.props.staff) {
			rows = this.props.staff.map((staff, index) => {
				return <TableRow staff={staff} key={index} />
			})
		} else {
			rows = <div>Loading...</div>
		}

		return (
			<div>
				<Table
					basic="very"
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
