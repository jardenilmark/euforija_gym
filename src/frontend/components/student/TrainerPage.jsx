import React, { Component } from 'react'
import { Container, Table, Dropdown, Button } from 'semantic-ui-react'
import { getArray, options } from '../../helpers/trainerHelper'

class Trainer extends Component {
	componentDidMount() {
		this.props.fetchStaff()
	}
	Cells() {
		return getArray(this.props.staff, this.props.type).map(e => {
			return (
				<Table.Row
					key={e._id}
					onClick={() => this.props.setStepData('TRAINER', { trainerId: e._id })}>
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
					options={options(this.props.staff).map((e, index) => {
						return { text: e, value: e, key: index }
					})}
				/>
				<Container style={style.containerOuter}>
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
				<Container style={style.containerButton} textAlign={'right'}>
					<Button
						onClick={() => this.props.setActiveForm('payment')}
						disabled={Object.keys(this.props.trainer).length === 0}>
						Submit
					</Button>
				</Container>
			</Container>
		)
	}
}

export default Trainer

const style = {
	containerOuter: {
		maxHeight: 450,
		overflowY: 'auto',
		marginTop: 10
	},
	containerButton: {
		marginTop: 10
	}
}
