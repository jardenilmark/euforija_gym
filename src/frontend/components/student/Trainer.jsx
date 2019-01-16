import React, { Component } from 'react'
import { Container, Table, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Trainer extends Component {
	componentDidMount() {
		this.props.fetchStaff()
	}
	Cells() {
		return this.props.staff.map(e => {
			return (
				<Table.Row key={e.id}>
					<Table.Cell>{e.firstName}</Table.Cell>
					<Table.Cell>{e.role}</Table.Cell>
				</Table.Row>
			)
		})
	}
	Options() {
		return [
			...new Set(
				this.props.staff.map(e => {
					if (e.role.includes('coach')) {
						return e.role
					}
				})
			)
		]
	}
	getArray() {}
	render() {
		console.log(this.props)
		return (
			<Container fluid>
				<Dropdown
					selection
					fluid
					placeholder={'Type'}
					onChange={(e, data) => {
						console.log(data.value)
					}}
					options={this.Options().map(e => {
						return { text: e, value: e }
					})}
				/>
				<Container
					style={{
						maxHeight: 500,
						overflowY: 'auto',
						marginTop: 10
					}}>
					<Table selectable celled unstackable striped fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Type</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>{this.Cells()}</Table.Body>
					</Table>
				</Container>
			</Container>
		)
	}
}

export default Trainer
