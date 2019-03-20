import React from 'react'
import { Modal, Header, Button, Icon, Table, Label, Container, Tab } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'

const TableContent = ({ overviewArr }) =>
	overviewArr.map(val => {
		return (
			<Table.Row key={val._id} textAlign={'center'}>
				<Table.Cell>{val.name}</Table.Cell>
				<Table.Cell>
					<NumberFormat
						value={val.price}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'₱ '}
						renderText={value => (
							<p>
								{value}
								.00
							</p>
						)}
					/>
				</Table.Cell>
				<Table.Cell>
					x {<Label content={val.quantity} circular color={'green'} size={'large'} />}
				</Table.Cell>
				<Table.Cell>
					<NumberFormat
						value={val.price * val.quantity}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'₱ '}
						renderText={value => (
							<p>
								{value}
								.00
							</p>
						)}
					/>
				</Table.Cell>
			</Table.Row>
		)
	})

const PurchaseOverview = props => {
	return (
		<Modal open={props.purchaseOverviewState} size="small" basic>
			<Header icon="tasks" content="Review Order Summary" />
			<Modal.Content>
				<Container style={styles.container}>
					<Table singleLine style={styles.text}>
						<Table.Header>
							<Table.Row textAlign={'center'}>
								<Table.HeaderCell style={styles.text}>Name</Table.HeaderCell>
								<Table.HeaderCell style={styles.text}>Price</Table.HeaderCell>
								<Table.HeaderCell style={styles.text}>Quantity</Table.HeaderCell>
								<Table.HeaderCell style={styles.text}>Total</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<TableContent {...props} />
							<Table.Row>
								<Table.Cell />
								<Table.Cell />
								<Table.Cell content={'Total Price: '} textAlign={'right'} />
								<Table.Cell textAlign={'center'} style={styles.total}>
									<b>
										<NumberFormat
											value={getTotalPrice(props.overviewArr)}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'₱ '}
											renderText={value => (
												<p>
													{value}
													.00
												</p>
											)}
										/>
									</b>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Container>
			</Modal.Content>
			<Modal.Actions>
				<Button color="red" inverted onClick={() => props.togglePurchaseOverview()}>
					<Icon name="remove" /> Cancel
				</Button>
				<Button color="green" inverted onClick={() => props.updateSales(props.overviewArr)}>
					<Icon name="checkmark" /> Confirm
				</Button>
			</Modal.Actions>
		</Modal>
	)
}

const getTotalPrice = arr => {
	let total = 0
	arr.forEach(element => {
		total += element.price * element.quantity
	})
	return total
}

const styles = {
	text: {
		// color: 'white',
		fontSize: 15
	},
	container: {
		border: 'dashed 3px white'
		// padding: 10
	},
	total: {
		fontSize: 19,
		color: 'red'
	}
}

export default PurchaseOverview
