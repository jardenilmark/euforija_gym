import React from 'react'
import { Input, Menu, Container, Table, Button, Icon, Header } from 'semantic-ui-react'
import AddItemModal from '../../redux/containers/inventory/AddModalContainer'
import EditItemModal from '../../redux/containers/inventory/EditModalContainer'
import DeleteItemModal from '../../redux/containers/inventory/DeleteModalContainer'
import 'semantic-ui-css/semantic.min.css'
import 'izitoast/dist/css/iziToast.min.css'
import 'izitoast/dist/js/iziToast.min.js'
import TableRows from './TableRows'

class Inventory extends React.Component {
	componentDidMount() {
		this.props.getInventory()
	}

	render() {
		const { activeItem, setActiveItem, filterList, setModalState, setFilteredInv } = this.props
		return (
			<Container
				textAlign={'center'}
				fluid
				style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 20 }}>
				<EditItemModal />
				<AddItemModal />
				<DeleteItemModal />
				<Header as={'h1'} textAlign={'center'}>
					EUFORIJA FITNESS
					<Header.Subheader>Inventory Management</Header.Subheader>
				</Header>
				<Menu text>
					<Menu.Item header>Search By</Menu.Item>
					<Menu.Item>
						<Button.Group size={'medium'}>
							<Button
								compact
								positive={activeItem === 'name'}
								onClick={() => setActiveItem('name')}>
								Name
							</Button>
							<Button.Or />
							<Button
								compact
								positive={activeItem === 'quantity'}
								onClick={() => setActiveItem('quantity')}>
								Quantity
							</Button>
							<Button.Or />
							<Button
								compact
								positive={activeItem === 'price'}
								onClick={() => setActiveItem('price')}>
								Price
							</Button>
						</Button.Group>
					</Menu.Item>
					<Menu.Item>
						<Input
							icon={
								<Icon name={'search'} inverted circular disabled style={{ marginTop: '2px' }} />
							}
							style={{ padding: '3px' }}
							placeholder={'Search...'}
							onChange={e => {
								if (e.target.value === '') {
									setFilteredInv([])
								} else {
									filterList({ name: activeItem, value: e.target.value })
								}
							}}
						/>
					</Menu.Item>
					<Menu.Item position={'right'}>
						<Button
							animated
							negative
							style={{ width: '110px' }}
							onClick={() => setModalState(true, 'ADD_FORM_STATE')}>
							<Button.Content hidden>Add New Item</Button.Content>
							<Button.Content visible>
								<Icon name={'add'} />
							</Button.Content>
						</Button>
					</Menu.Item>
				</Menu>
				<div style={{ }}>
					<Table celled unstackable striped fixed>
						<Table.Header>
							<Table.Row textAlign={'center'} style={{ fontSize: 17 }}>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Quantity</Table.HeaderCell>
								<Table.HeaderCell>Price</Table.HeaderCell>
								<Table.HeaderCell>Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
					</Table>
				</div>
				<div id={'tbody'} style={{ height: '35vw', overflowY: 'auto' }}>
					<Table celled unstackable striped fixed>
						<Table.Body>
							<TableRows {...this.props} />
						</Table.Body>
					</Table>
				</div>
			</Container>
		)
	}
}

export default Inventory
