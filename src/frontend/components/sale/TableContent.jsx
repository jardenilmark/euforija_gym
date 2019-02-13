import { Table, Label, Popup, Button } from 'semantic-ui-react'
import React from 'react'

const TableContent = ({ overviewArr, setModalState, setClickedItem, removeItem, inventory }) => {
	return overviewArr.map((val, index) => {
		const item = findItem(inventory, val._id)
		return (
			<Table.Row key={val._id} textAlign={'center'} style={styles.tableRow}>
				<Table.Cell>{val.name}</Table.Cell>
				<Table.Cell>
					₱ {val.price}
					.00
				</Table.Cell>
				<Table.Cell>
					<b>x</b> {<Label content={val.quantity} circular color={'green'} size={'large'} />}
				</Table.Cell>
				<Table.Cell>
					₱ {val.price * val.quantity}
					.00
				</Table.Cell>
				<Table.Cell>
					<Popup
						trigger={
							<Button
								circular
								icon={'edit outline'}
								onClick={() => {
									setModalState(true)
									setClickedItem(item)
								}}
							/>
						}
						color={'black'}
						inverted
						content={'edit item quantity'}
					/>
					<Popup
						trigger={
							<Button
								circular
								icon={'delete'}
								onClick={() => {
									removeItem(overviewArr, index)
								}}
							/>
						}
						content={'remove item from cart'}
						color={'black'}
						inverted
					/>
				</Table.Cell>
			</Table.Row>
		)
	})
}

const findItem = (inventory, id) => {
	const found = inventory.find(item => {
		return item._id === id
	})
	return found
}

const styles = {
	tableRow: {
		fontSize: '15px',
		fontWeight: 'bold',
		cursor: 'pointer'
	}
}

export default TableContent
