import React from 'react'
import { Input, Menu, Container, Table } from 'semantic-ui-react'
import AddItemModal from './AddItemModal'
import 'semantic-ui-css/semantic.min.css'

class Inventory extends React.Component {
  componentDidMount () {
    this.props.getInventory()
  }

  getTableRows () {
    const { inventory, filteredInv } = this.props
    let arr = inventory
    if (filteredInv.length > 0) {
      arr = filteredInv
    }
    return arr.map(item => {
      return <Table.Row key={item._id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.quantity}</Table.Cell>
        <Table.Cell>₱{item.price}</Table.Cell>
      </Table.Row>
    })
  }

  render () {
    const { activeItem, setActiveItem, filterList, filteredInv } = this.props
    console.log(filteredInv)
    return (
      <Container fluid style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Menu text>
          <Menu.Item header>Search By</Menu.Item>
          <Menu.Item
            name='Name'
            active={activeItem === 'name'}
            onClick={() => setActiveItem('name')}
          />
          <Menu.Item
            name='Quantity'
            active={activeItem === 'quantity'}
            onClick={() => setActiveItem('quantity')}
          />
          <Menu.Item
            name='Price'
            active={activeItem === 'price'}
            onClick={() => setActiveItem('price')}
          />
          <Menu.Item
            name='Search'
          >
            <Input focus placeholder='Search...' onChange={(e) => filterList({name: activeItem, value: e.target.value})}/>
          </Menu.Item>
          <Menu.Item position='right'>
            <AddItemModal/>
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
