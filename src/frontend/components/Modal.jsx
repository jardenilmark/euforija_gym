import React from 'react'
import { Modal, Container, Header, Button } from 'semantic-ui-react'
import InventoryForm from '../redux/containers/InventoryFormContainer'
import 'semantic-ui-css/semantic.min.css'

const AddItemModal = (props) => {
  return <Modal trigger={
    <Button icon='add' />
  }
  closeIcon>
    <Modal.Header>
      <Container textAlign='center'>
        <Header size='huge'>Add Item</Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      <InventoryForm onSubmit={props.createItem}/>
    </Modal.Content>
  </Modal>
}

export default AddItemModal
