import React from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const InventoryTable = (props) => {
  return (
    <Table
      celled
      selectable
      textAlign='center'
      padded='very'
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Placeholder</Table.Cell>
          <Table.Cell>Placeholder</Table.Cell>
          <Table.Cell>Placeholder</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default InventoryTable
