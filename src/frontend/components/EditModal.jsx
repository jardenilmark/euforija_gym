import React from 'react'
import { Modal, Container, Header, Icon } from 'semantic-ui-react'
import EditForm from '../redux/containers/EditFormContainer'
import 'semantic-ui-css/semantic.min.css'

const EditItemModal = (props) => {
  return <Modal
    open={props.editModalState}
    onClose={() => props.setModalState(false, 'EDIT_FORM_STATE')}
  >
    <Modal.Header>
      <Container textAlign='right'>
        <Icon name='cancel' onClick={() => props.setModalState(false, 'EDIT_FORM_STATE')}/>
      </Container>
      <Container textAlign='center'>
        <Header size='huge'>Edit Item</Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      <EditForm onSubmit={(e) => {
        props.updateItem(props.formId, e)
        props.setModalState(false, 'EDIT_FORM_STATE')
      }}/>
    </Modal.Content>
  </Modal>
}

export default EditItemModal
