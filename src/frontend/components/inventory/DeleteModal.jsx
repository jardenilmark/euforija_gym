import React from 'react'
import { Modal, Container, Header, Icon, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const DeleteItemModal = (props) => {
  return <Modal
    open={props.deleteModalState}
    onClose={() => props.setModalState(false, 'DELETE_FORM_STATE')}
  >
    <Modal.Header>
      <Container textAlign='right'>
        <Icon name='cancel' onClick={() => props.setModalState(false, 'DELETE_FORM_STATE')}/>
      </Container>
      <Container textAlign='center'>
        <Header size='huge'>Edit Item</Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      Are you sure?
    </Modal.Content>
    <Modal.Actions>
      <Button positive onClick={() => {
        props.removeItem(props.formId)
        props.setModalState(false, 'DELETE_FORM_STATE')
        props.getInventory()
      }}>
        Confirm
      </Button>
      <Button negative onClick={() => props.setModalState(false, 'DELETE_FORM_STATE')}>
        Cancel
      </Button>
    </Modal.Actions>
  </Modal>
}

export default DeleteItemModal
