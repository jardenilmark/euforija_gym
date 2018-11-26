import { Table, Button, Label, Image, Popup } from 'semantic-ui-react'
import React from 'react'

const TableRows = ({
	inventory,
	filteredInv,
	setModalState,
	setFormValues,
	setFormId,
	setImageId
}) => {
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

export default TableRows
