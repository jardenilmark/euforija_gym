import Cards from './Cards'
import React from 'react'
import { Container, Grid, Header, Icon, Button, Table, Message, Segment } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import TableContent from './TableContent'

class Sale extends React.Component {
	componentDidMount() {
		this.props.getInventory()
	}

	render() {
		const isEmpty = this.props.overviewArr.length === 0
		return (
			<Grid style={{ height: '100%' }}>
				<EditModal />
				<Grid.Row divided>
					<Grid.Column width={11} style={{ overflowY: 'auto', height: '100%' }}>
						<Cards {...this.props} />
					</Grid.Column>
					<Grid.Column
						width={5}
						textAlign={'center'}
						style={{ height: '100%', paddingRight: 30, paddingTop: 70 }}>
						<Header as={'h1'}>
							<Icon name={'shopping cart'} />
							Overview of Orders
						</Header>
						<Container fluid style={{ height: '80%', marginTop: 20 }}>
							<Table basic={'very'} singleLine padded>
								<Table.Header>
									<Table.Row textAlign={'center'} style={{ fontSize: '17px' }}>
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
								<Segment basic textAlign={'right'}>
									<b style={{ fontSize: '17px' }}>
										Total Price: ₱ {getTotalPrice(this.props.overviewArr)}
										.00
									</b>
								</Segment>
							)}
							{!isEmpty && (
								<Button
									onClick={() => this.props.updateSales(this.props.overviewArr)}
									size={'medium'}
									style={{ float: 'right' }}>
									Confirm Purchase
								</Button>
							)}
							{isEmpty && <EmptyCartMessage />}
						</Container>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const getTotalPrice = arr => {
	let total = 0
	arr.forEach(element => {
		total += element.price * element.quantity
	})
	return total
}

const EmptyCartMessage = () => {
	return (
		<Message negative size={'big'}>
			<Message.Header>
				<b>Cart is empty!</b>
			</Message.Header>
			<p>
				Start adding items to your cart by <b>clicking the cards on the side.</b>
			</p>
		</Message>
	)
}

export default Sale
