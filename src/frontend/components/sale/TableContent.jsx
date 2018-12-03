import { Table, Label, Popup, Button } from 'semantic-ui-react'
import React from 'react'
import { setClickedItem } from '../../redux/actions/saleAction';

const TableContent = ({ overviewArr, setModalState, setClickedItem }) => {
	return overviewArr.map(val => {
		return (
			<Popup
				trigger={<Table.Row key={val._id} textAlign={'center'} style={styles.tableRow}>
					<Table.Cell>{val.name}</Table.Cell>
					<Table.Cell>₱ {val.price}.00</Table.Cell>
					<Table.Cell><b>x</b> {<Label content={val.quantity} circular color={'green'} size='large' />}</Table.Cell>
					<Table.Cell>₱ {val.price * val.quantity}.00</Table.Cell>
				</Table.Row>}
				on='click'
				// position='left'
				content={<Button.Group size={'tiny'}>
					<Button
						content={'Edit'}
						color={'green'}
						onClick={() => { 
							setModalState(true)
							setClickedItem(val)
						}}
					/>
					<Button.Or />
					<Button
						content={'Delete'}
						color={'red'}
					/>
				</Button.Group>}
			/>
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
