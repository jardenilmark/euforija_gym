import React from 'react'
import { Modal, Container, Header, Icon, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const DeleteItemModal = (props) => {
  return (<Modal
    open={props.deleteModalState}
    size='tiny'
    closeIcon
    basic
    closeOnEscape={false}
    closeOnDimmerClick={false}
    onClose={() => props.setModalState(false, 'DELETE_FORM_STATE')}
  >
    <Modal.Header>
      <Container>
        <Header as='h3' inverted textAlign='center'>
          <Icon name='delete' size='small'/>
          <Header.Content>Delete an Item</Header.Content>
        </Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      Are you sure? This action <b>can't be undone</b>.
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={() => {
        props.removeItem(props.formId, props.imageId)
        props.setModalState(false, 'DELETE_FORM_STATE')
        props.getInventory()
      }}>
        <Icon name='checkmark'/>
        Confirm
      </Button>
      <Button color='red' inverted onClick={() => props.setModalState(false, 'DELETE_FORM_STATE')}>
        <Icon name='cancel'/>
        Cancel
      </Button>
    </Modal.Actions>
  </Modal>)
}

export default DeleteItemModal
