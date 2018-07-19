import React from 'react'
import { Icon, Input, Menu, Container, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Inventory extends React.Component {
  componentDidMount () {
    this.props.getInventory()
  }

  getTableRows () {
    const { inventory } = this.props
    return inventory.map(item => {
      return <Table.Row key={item._id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.quantity}</Table.Cell>
        <Table.Cell>₱{item.price}</Table.Cell>
      </Table.Row>
    })
  }

  render () {
    return (
      <Container fluid style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Menu text>
          <Menu.Item header>Search By</Menu.Item>
          <Menu.Item
            name='Name'
          />
          <Menu.Item
            name='Quantity'
          />
          <Menu.Item
            name='Price'
          />
          <Menu.Item
            name='Search'
          >
            <Input focus placeholder='Search...' />
          </Menu.Item>
          <Menu.Item position='right'>
            <Icon fitted name='plus' />
          </Menu.Item>
        </Menu>
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
            {this.getTableRows()}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

export default Inventory
