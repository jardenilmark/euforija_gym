import React from 'react'
import { Modal, Container, Header, Icon } from 'semantic-ui-react'
import EditForm from '../../redux/containers/sale/EditFormContainer'
import 'semantic-ui-css/semantic.min.css'

const PurchaseItemModal = props => {
	const item = props.clickedItem
	return (
		<Modal
			open={props.modal}
			size={'tiny'}
			closeIcon
			dimmer={'blurring'}
			basic
			closeOnEscape={false}
			closeOnDimmerClick={false}
			onClose={() => props.setModalState(false)}>
			<Modal.Header>
				<Container textAlign={'center'}>
					<Header as={'h2'} inverted>
						<Icon name={'cart plus'} size={'small'} />
						<Header.Content>Purchase an Item</Header.Content>
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

export default PurchaseItemModal
