import { Table } from 'semantic-ui-react'
import React from 'react'

const TableContent = ({ overviewArr }) => {
	return overviewArr.map(val => {
		return (
			<Table.Row key={val._id} textAlign={'center'}>
				<Table.Cell>{val.name}</Table.Cell>
				<Table.Cell>{val.quantity}</Table.Cell>
				<Table.Cell>{val.price * val.quantity}</Table.Cell>
			</Table.Row>
		)
	})
}

export default TableContent
