import React from 'react'
import {
	Input,
	Menu,
	Container,
	Table,
	Button,
	Icon,
	Label,
	Header,
	Image,
	Popup
} from 'semantic-ui-react'
import AddItemModal from '../../redux/containers/inventory/AddModalContainer'
import EditItemModal from '../../redux/containers/inventory/EditModalContainer'
import DeleteItemModal from '../../redux/containers/inventory/DeleteModalContainer'
import 'semantic-ui-css/semantic.min.css'
import 'izitoast/dist/css/iziToast.min.css'
import 'izitoast/dist/js/iziToast.min.js'

class Inventory extends React.Component {
	componentDidMount() {
		this.props.getInventory()
	}

	getTableRows() {
		const {
			inventory,
			filteredInv,
			setModalState,
			setFormValues,
			setFormId,
			setImageId
		} = this.props
		const arr = filteredInv.length > 0 ? filteredInv : inventory
		return arr.map((item, index) => {
			return (
				<Table.Row key={item._id}>
					<Table.Cell style={{ fontSize: 18, fontWeight: 'bold' }}>
						<Label ribbon>{index + 1}</Label>
						<Popup
							trigger={<Image src={item.image} avatar />}
							content={<Image src={item.image} size={'small'} />}
							position={'right center'}
						/>
						{item.name}
					</Table.Cell>
					<Table.Cell style={{ fontSize: 15, fontWeight: 'bold' }} textAlign={'center'}>
						{item.quantity}
					</Table.Cell>
					<Table.Cell textAlign={'center'}>
						<Label tag style={{ fontSize: 15, fontWeight: 'bold' }}>
							₱ {item.price}
						</Label>
					</Table.Cell>
					<Table.Cell textAlign={'center'}>
						<Button.Group size={'medium'}>
							<Button
								content={'Edit'}
								inverted
								color={'green'}
								onClick={() => {
									setModalState(true, 'EDIT_FORM_STATE')
									setFormValues(item)
									setFormId(item._id)
									setImageId(item.imageId)
								}}
							/>
							<Button.Or style={{ color: 'red' }} />
							<Button
								content={'Delete'}
								inverted
								color={'red'}
								onClick={() => {
									setModalState(true, 'DELETE_FORM_STATE')
									setFormId(item._id)
									setImageId(item.imageId)
								}}
							/>
						</Button.Group>
					</Table.Cell>
				</Table.Row>
			)
		})
	}

	render() {
		const { activeItem, setActiveItem, filterList, setModalState, setFilteredInv } = this.props
		return (
			<Container
				textAlign={'center'}
				fluid
				style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
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
						<Button.Group>
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
				<div style={{ marginBottom: -1, paddingRight: 10 }}>
					<Table celled unstackable striped fixed>
						<Table.Header>
							<Table.Row textAlign={'center'} style={{ fontSize: 15 }}>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Quantity</Table.HeaderCell>
								<Table.HeaderCell>Price</Table.HeaderCell>
								<Table.HeaderCell>Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
					</Table>
				</div>
				<div id={'tbody'} style={{ height: '30vw', overflowY: 'scroll' }}>
					<Table celled unstackable striped fixed>
						<Table.Body>{this.getTableRows()}</Table.Body>
					</Table>
				</div>
			</Container>
		)
	}
}

export default Inventory
