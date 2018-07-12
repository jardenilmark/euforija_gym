import React from 'react'
import { Container, Search, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Inventory = (props) => {
  return (
    <Container fluid>
      <Search noResultsMessage='' icon='search'/>
      <Dropdown text='File'>
        <Dropdown.Menu>
          <Dropdown.Item text='New' />
          <Dropdown.Item text='Open...' description='ctrl + o' />
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}

export default Inventory
