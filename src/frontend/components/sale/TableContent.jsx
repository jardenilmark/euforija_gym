import { Table, Label, Popup, Button } from 'semantic-ui-react'
import React from 'react'
import { setClickedItem } from '../../redux/actions/saleAction'

const TableContent = ({ overviewArr, setModalState, setClickedItem }) => {
	return overviewArr.map(val => {
		return (
			<Table.Row key={val._id} textAlign={'center'} style={styles.tableRow}>
				<Table.Cell>{val.name}</Table.Cell>
				<Table.Cell>
					₱ {val.price}
					.00
				</Table.Cell>
				<Table.Cell>
					<b>x</b> {<Label content={val.quantity} circular color={'green'} size="large" />}
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
								icon="edit outline"
								onClick={() => {
									setModalState(true)
									setClickedItem(val)
								}}
							/>
						}
						content={'edit item quantity'}
					/>
					<Popup trigger={<Button circular icon="delete" />} content={'remove item from cart'} />
				</Table.Cell>
			</Table.Row>
		)
	})
}

const styles = {
	tableRow: {
		fontSize: '15px',
		fontWeight: 'bold',
		cursor: 'pointer'
	}
}

export default TableContent
