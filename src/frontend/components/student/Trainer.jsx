import React, { Component } from 'react'
import { Container, Table, Dropdown, Button } from 'semantic-ui-react'

const getArray = (array, type) => {
	// to transfer in another file
	if (type === 'all') {
		return array
	}
	return array.filter(e => e.role === type)
}
const Options = array => {
	return [
		...new Set(
			array.map(e => {
				if (e.role.includes('coach')) {
					return e.role
				}
			})
		),
		'all'
	]
}
class Trainer extends Component {
	componentDidMount() {
		this.props.fetchStaff()
	}
	Cells() {
		return getArray(this.props.staff, this.props.type).map(e => {
			return (
				<Table.Row key={e.id}>
					<Table.Cell>{e.firstName}</Table.Cell>
					<Table.Cell>{e.role}</Table.Cell>
				</Table.Row>
			)
		})
	}
	render() {
		return (
			<Container fluid>
				<Dropdown
					selection
					fluid
					placeholder={'Type'}
					onChange={(e, data) => {
						this.props.setStaffFilter(data.value)
					}}
					options={Options(this.props.staff).map(e => {
						return { text: e, value: e }
					})}
				/>
				<Container
					style={{
						maxHeight: 450,
						overflowY: 'auto',
						marginTop: 10
					}}>
					<Table selectable celled unstackable striped fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Program</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>{this.Cells()}</Table.Body>
					</Table>
				</Container>
				<Container style={{ marginTop: 10 }} textAlign={'right'}>
					<Button>Submit</Button>
				</Container>
			</Container>
		)
	}
}

export default Trainer
