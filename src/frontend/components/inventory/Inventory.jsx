import React from 'react'
import { Input, Menu, Container, Table, Button, Icon, Header } from 'semantic-ui-react'
import { onSubmit } from '../../helpers/inventoryHelper'
import AddItemModal from '../../redux/containers/inventory/AddModalContainer'
import EditItemModal from '../../redux/containers/inventory/EditModalContainer'
import DeleteItemModal from '../../redux/containers/inventory/DeleteModalContainer'
import TableRows from './TableRows'

class Inventory extends React.Component {
	componentDidMount() {
		this.props.getInventory()
	}

	render() {
		const { activeItem, setActiveItem, setModalState, setPriceValue, setNameVal } = this.props
		return (
			<Container textAlign={'center'} fluid style={styles.container}>
				<EditItemModal />
				<AddItemModal />
				<DeleteItemModal />
				<Header as={'h1'} textAlign={'center'}>
					EUFORIJA FITNESS
					<Header.Subheader>Inventory Management</Header.Subheader>
				</Header>
				<Menu text>
					<Menu.Item header>SEARCH BY</Menu.Item>
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
							style={styles.input}
							placeholder={'Search...'}
							onChange={e => {
								if (activeItem === 'name') {
									setNameVal(e.target.value)
								} else {
									setPriceValue(e.target.value, 'ONE')
								}
							}}
						/>
						<Header style={{ display: activeItem !== 'name' ? 'inline' : 'none' }}>to</Header>
						<Input
							style={{ ...styles.input, display: activeItem !== 'name' ? 'inline' : 'none' }}
							placeholder={'Search...'}
							onChange={e => setPriceValue(e.target.value, 'TWO')}
						/>
						<Button icon={'search'} onClick={e => onSubmit(this.props)} />
					</Menu.Item>
					<Menu.Item position={'right'}>
						<Button
							animated
							negative
							style={styles.button}
							onClick={() => setModalState(true, 'ADD_FORM_STATE')}>
							<Button.Content hidden>Add New Item</Button.Content>
							<Button.Content visible>
								<Icon name={'add'} />
							</Button.Content>
						</Button>
					</Menu.Item>
				</Menu>
				<div>
					<Table celled unstackable striped fixed>
						<Table.Header>
							<Table.Row textAlign={'center'} style={styles.tableHeader}>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Quantity</Table.HeaderCell>
								<Table.HeaderCell>Price</Table.HeaderCell>
								<Table.HeaderCell>Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
					</Table>
				</div>
				<div style={styles.div}>
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

//TODO: fix inconsistent units e.g. (px, vw)

const styles = {
	container: {
		paddingLeft: 100,
		paddingRight: 100,
		paddingTop: 20
	},
	button: {
		width: '120px'
	},
	div: {
		height: '38vw',
		overflowY: 'auto'
	},
	tableHeader: {
		fontSize: 18
	},
	input: {
		padding: '3px'
	},
	icon: {
		marginTop: '2px'
	}
}

export default Inventory
