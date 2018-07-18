import React from 'react'
import { Icon, Input, Menu, Container } from 'semantic-ui-react'
import InventoryTable from './InventoryTable'
import 'semantic-ui-css/semantic.min.css'

const Inventory = (props) => {
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
      <InventoryTable/>
    </Container>
  )
}

export default Inventory
