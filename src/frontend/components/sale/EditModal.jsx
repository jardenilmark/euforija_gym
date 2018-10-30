import React from 'react'
import { Modal, Container, Header, Icon } from 'semantic-ui-react'
import EditForm from '../../redux/containers/sale/EditFormContainer'
import 'semantic-ui-css/semantic.min.css'

const EditItemModal = props => {
	const item = props.clickedItem
	return (
		<Modal
			open={props.modal}
			size={'tiny'}
			closeIcon
			basic
			closeOnEscape={false}
			closeOnDimmerClick={false}
			onClose={() => props.setModalState(false)}>
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
						props.setModalState(false)
						props.addItemOverview(item, parseInt(e.quantity, 10))
					}}
				/>
			</Modal.Content>
		</Modal>
	)
}

export default EditItemModal
