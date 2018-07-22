import React from 'react'
import { Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const AddItemModal = () => {
  return <Modal trigger={<Icon fitted name='plus' />} closeIcon>
    <Modal.Content>
      Test
    </Modal.Content>
  </Modal>
}

export default AddItemModal
