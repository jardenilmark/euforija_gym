import { Table, Label, Popup, Button } from 'semantic-ui-react'
import React from 'react'
import NumberFormat from 'react-number-format'

const TableContent = ({ overviewArr, setModalState, setClickedItem, removeItem, inventory }) => {
	return overviewArr.map((val, index) => {
		const item = findItem(inventory, val._id)
		return (
			<Table.Row key={val._id} textAlign={'center'} style={styles.tableRow}>
				<Table.Cell>{val.name}</Table.Cell>
				<Table.Cell>
					<NumberFormat
						value={val.price}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'₱ '}
						renderText={value => (
							<b>
								{value}
								.00
							</b>
						)}
					/>
				</Table.Cell>
				<Table.Cell>
					<b>x</b> {<Label content={val.quantity} circular color={'green'} size={'large'} />}
				</Table.Cell>
				<Table.Cell>
					<NumberFormat
						value={val.price * val.quantity}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'₱ '}
						renderText={value => (
							<b>
								{value}
								.00
							</b>
						)}
					/>
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
		fontWeight: 'bold'
	}
}

export default TableContent
