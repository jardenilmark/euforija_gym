import React from 'react'
import { Modal, Container, Header, Icon } from 'semantic-ui-react'
import AddForm from '../../redux/containers/inventory/AddFormContainer'
import 'semantic-ui-css/semantic.min.css'

const AddItemModal = (props) => {
  return (<Modal
    open={props.addModalState}
    size='tiny'
    basic
    closeOnEscape={false}
    closeOnDimmerClick={false}
    onOpen={() => props.setModalState(true, 'ADD_FORM_STATE')}
    onClose={() => props.setModalState(false, 'ADD_FORM_STATE')}
    closeIcon
  >
    <Modal.Header>
      <Container textAlign='center'>
        <Header as='h3' inverted>
          <Icon name='add'/>
          <Header.Content>Add an Item</Header.Content>
        </Header>
      </Container>
    </Modal.Header>
    <Modal.Content>
      <AddForm onSubmit={(e) => {
        props.setModalState(false, 'ADD_FORM_STATE')
        props.createItem(e)
      }}/>
    </Modal.Content>
  </Modal>)
}

export default AddItemModal
