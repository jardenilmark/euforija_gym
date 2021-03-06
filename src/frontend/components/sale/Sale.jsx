import Cards from './Cards'
import React from 'react'
import { Container, Grid, Header, Icon, Button, Table, Segment } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import TableContent from './TableContent'
import PurchaseOverview from './PurchaseOverview'
import FloatingButton from '../custom/FloatingButton'

class Sale extends React.Component {
	componentDidMount() {
		const { getInventory } = this.props
		getInventory()
	}

	render() {
		const isEmpty = this.props.overviewArr.length === 0
		console.log(this.props)
		return (
			<Grid style={styles.grid}>
				<EditModal />
				<PurchaseOverview {...this.props} />
				<Grid.Row divided style={styles.gridRow}>
					<Grid.Column width={11} style={styles.cardsColumn}>
						<Cards {...this.props} />
					</Grid.Column>
					<Grid.Column width={5} textAlign={'center'} style={styles.ordersColumn}>
						<Header as={'h1'}>
							<Icon name={'shopping cart'} />
							Overview of Orders
						</Header>
						<Container fluid style={styles.ordersContainer}>
							<Table basic={'very'} singleLine padded>
								<Table.Header>
									<Table.Row textAlign={'center'} style={styles.tableRow}>
										<Table.HeaderCell>Name</Table.HeaderCell>
										<Table.HeaderCell>Price</Table.HeaderCell>
										<Table.HeaderCell>Quantity</Table.HeaderCell>
										<Table.HeaderCell>Total</Table.HeaderCell>
										<Table.HeaderCell>Action</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<TableContent {...this.props} />
								</Table.Body>
							</Table>
							{!isEmpty && (
								<div>
									<Button
										onClick={() => this.props.clearCart()}
										size={'medium'}
										negative
										style={styles.button}
										content={'Clear Cart'}
									/>
									<Button
										onClick={() => this.props.togglePurchaseOverview()}
										size={'medium'}
										positive
										style={styles.button}
										content={'Purchase'}
									/>
								</div>
							)}
							{isEmpty && <EmptyCartMessage />}
						</Container>
					</Grid.Column>
					<FloatingButton />
				</Grid.Row>
			</Grid>
		)
	}
}

const EmptyCartMessage = () => {
	return (
		<Segment placeholder style={{ border: 'dotted 5px' }} size={'large'}>
			<Header icon>
				<Icon name="exclamation circle" color={'red'} />
				<Header.Content>No items have been added to cart yet.</Header.Content>
				<Header.Content>Start clicking the cards on the side to start.</Header.Content>
			</Header>
		</Segment>
	)
}

const styles = {
	grid: {
		height: '100%'
	},
	gridRow: {
		padding: 0,
		margin: 0
	},
	cardsColumn: {
		overflowY: 'auto',
		height: '100%',
		padding: 20
	},
	ordersColumn: {
		height: '100%',
		paddingRight: 30,
		paddingTop: 70
	},
	ordersContainer: {
		height: '80%',
		marginTop: 20
	},
	tableRow: {
		fontSize: 17
	},
	priceSegment: {
		fontSize: 17
	},
	button: {
		float: 'right'
	}
}

export default Sale
