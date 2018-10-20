import React from 'react'
import { Modal, Container, Header, Icon } from 'semantic-ui-react'
import EditForm from '../../redux/containers/inventory/EditFormContainer'
import 'semantic-ui-css/semantic.min.css'

const EditItemModal = props => {
	return (
		<Modal
			open={props.editModalState}
			size={'tiny'}
			closeIcon
			basic
			closeOnEscape={false}
			closeOnDimmerClick={false}
			onClose={() => props.setModalState(false, 'EDIT_FORM_STATE')}>
			<Modal.Header>
				<Container textAlign={'center'}>
					<Header as={'h3'} inverted>
						<Icon name={'edit'} size={'small'} />
						<Header.Content>Edit an Item</Header.Content>
					</Header>
				</Container>
			</Modal.Header>
			<Modal.Content>
				<EditForm
					onSubmit={e => {
						props.updateItem(props.formId, props.imageId, e)
						props.setModalState(false, 'EDIT_FORM_STATE')
					}}
				/>
			</Modal.Content>
		</Modal>
	)
}

export default EditItemModal
