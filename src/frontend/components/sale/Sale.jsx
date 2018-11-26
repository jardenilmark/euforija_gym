import Cards from './Cards'
import React from 'react'
import { Container, Grid, Header, Icon, Button, Table } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import 'semantic-ui-css/semantic.min.css'
import TableContent from './TableContent'

class Sale extends React.Component {
	componentDidMount() {
		this.props.getInventory()
	}

	render() {
		return (
			<Grid style={{ height: '100%' }}>
				<EditModal />
				<Grid.Row divided>
					<Grid.Column width={12}>
						<Cards {...this.props} />
					</Grid.Column>
					<Grid.Column
						width={4}
						textAlign={'center'}
						style={{ height: '100%', padding: '20', backgroundColor: 'blue' }}>
						<Header as={'h2'} icon>
							<Icon name={'shopping basket'} />
							Overview of Orders
						</Header>
						<Container fluid style={{ height: '70%', backgroundColor: 'red' }}>
							<Table>
								<Table.Header>
									<Table.Row textAlign={'center'}>
										<Table.HeaderCell>Name</Table.HeaderCell>
										<Table.HeaderCell>Quantity</Table.HeaderCell>
										<Table.HeaderCell>Price</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<TableContent {...this.props} />
								</Table.Body>
							</Table>
						</Container>
						<Button onClick={() => this.props.updateSales(this.props.overviewArr)}>Submit</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default Sale
