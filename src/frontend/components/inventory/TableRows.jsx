import {
	Table,
	Button,
	Label,
	Image,
	Popup,
	Header,
	Segment,
	Icon,
	Loader
} from 'semantic-ui-react'
import React from 'react'

const TableRows = ({
	inventory,
	filteredInv,
	setModalState,
	setFormValues,
	setFormId,
	setImageId,
	isFetchingInventory
}) => {
	const arr = filteredInv.length > 0 ? filteredInv : inventory
	if (isFetchingInventory) {
		return <Loader active content={'Fetching Items...'} size={'huge'} />
	} else {
		if (arr.length === 0) {
			return (
				<Segment placeholder style={{ border: 'dotted 5px' }} size={'big'}>
					<Header icon>
						<Icon name="exclamation circle" color={'red'} />
						<Header.Content>No item has been added to the inventory.</Header.Content>
						<Header.Content>Click the button above to start adding items.</Header.Content>
					</Header>
				</Segment>
			)
		}
	}

	return arr.map((item, index) => {
		return (
			<Table.Row key={item._id} negative={item.quantity < 5}>
				<Table.Cell style={styles.text}>
					<Label ribbon>{index + 1}</Label>
					<Popup
						trigger={<Image src={item.image} avatar />}
						content={<Image src={item.image} size={'large'} />}
						position={'right center'}
					/>
					{item.name}
				</Table.Cell>
				<Table.Cell style={styles.text} textAlign={'center'}>
					{item.quantity}
				</Table.Cell>
				<Table.Cell textAlign={'center'}>
					<Label tag style={styles.text}>
						₱ {item.price}
						.00
					</Label>
				</Table.Cell>
				<Table.Cell textAlign={'center'}>
					<Button.Group size={'large'}>
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
						<Button.Or />
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

const styles = {
	text: {
		fontSize: 16,
		fontWeight: 'bold'
	}
}

export default TableRows
