import React, { Component } from 'react'
import { Container, Table, Dropdown, Button, Image, Popup } from 'semantic-ui-react'
import { getArray, options } from '../../helpers/trainerHelper'

class Trainer extends Component {
	componentDidMount() {
		this.props.fetchStaff()
	}
	Cells() {
		return getArray(this.props.staff, this.props.type).map((e, index) => {
			if (e.role.includes('Coach')) {
				return (
					<Table.Row
						key={index}
						style={styles.tableRow}
						active={e._id === this.props.trainer.trainerId}
						onClick={() => this.props.setStepData('TRAINER', { trainerId: e._id })}>
						<Table.Cell>
							<Image avatar src={e.image} />
							<b>
								{e.firstName} {e.lastName}
							</b>
						</Table.Cell>
						<Table.Cell>{e.role}</Table.Cell>
					</Table.Row>
				)
			}
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
				<Container style={styles.innerContainer}>
					<Table selectable celled unstackable fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Program</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body style={styles.tableBody}>{this.Cells()}</Table.Body>
					</Table>
				</Container>
				<Container style={styles.buttonContainer} textAlign={'right'}>
					<Button type={'button'} onClick={() => this.props.setActiveForm('health')}>
						Previous
					</Button>
					<Button
						onClick={() => this.props.setActiveForm('payment')}
						disabled={Object.keys(this.props.trainer).length === 0}>
						Next
					</Button>
				</Container>
			</Container>
		)
	}
}

export default Trainer

const styles = {
	innerContainer: {
		maxHeight: 550,
		marginTop: 10
	},
	buttonContainer: {
		marginTop: 10
	},
	tableRow: {
		fontSize: 16,
		cursor: 'pointer'
	},
	tableBody: {
		overflowY: 'auto'
	}
}
