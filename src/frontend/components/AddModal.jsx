import React from 'react'
import { Modal, Container, Header } from 'semantic-ui-react'
import AddForm from '../redux/containers/AddFormContainer'
import 'semantic-ui-css/semantic.min.css'

const AddItemModal = (props) => {
  return <Modal
    open={props.addModalState}
    onOpen={() => props.setModalState(true, 'ADD_FORM_STATE')}
    onClose={() => props.setModalState(false, 'ADD_FORM_STATE')}
    closeIcon
  >
    <Modal.Header>
      <Container textAlign='center'>
        <Header size='huge'>Add Item</Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      <AddForm onSubmit={(e) => {
        props.setModalState(false, 'ADD_FORM_STATE')
        props.createItem(e)
      }}/>
    </Modal.Content>
  </Modal>
}

export default AddItemModal
