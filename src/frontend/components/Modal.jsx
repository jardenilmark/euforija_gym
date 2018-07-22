import React from 'react'
import { Icon, Modal } from 'semantic-ui-react'
import InventoryForm from '../redux/containers/InventoryFormContainer'
import 'semantic-ui-css/semantic.min.css'

const AddItemModal = (props) => {
  return <Modal trigger={<Icon fitted name='plus' />} closeIcon>
    <Modal.Content>
      <InventoryForm onSubmit={props.createItem}/>
    </Modal.Content>
  </Modal>
}

export default AddItemModal
