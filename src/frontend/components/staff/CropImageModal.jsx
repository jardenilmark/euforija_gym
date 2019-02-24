import React from 'react'
import { Modal, Button, Popup } from 'semantic-ui-react'
import Cropper from 'react-easy-crop'

const CropImageModal = props => (
	<Modal open={props.isVisible} basic size={'small'}>
		<Modal.Content>
			<div style={styles.cropContainer}>
				<Cropper
					image={props.image}
					crop={props.crop}
					aspect={1 / 1}
					onCropChange={props.onCropChange}
					onCropComplete={props.onCropComplete}
					showGrid={false}
					style={styles.cropper}
				/>
			</div>
		</Modal.Content>
		<Modal.Actions style={styles.modalActions}>
			<Popup
				content={'Crop Image'}
				inverted
				position={'left center'}
				trigger={
					<Button
						icon={'check'}
						circular
						positive
						size={'large'}
						onClick={() => props.getCroppedImage(props.image, props.croppedAreaPixels)}
					/>
				}
			/>
			<Popup
				content={'Cancel'}
				inverted
				position={'right center'}
				trigger={
					<Button
						icon={'close'}
						circular
						negative
						size={'large'}
						onClick={() => props.toggleModal()}
					/>
				}
			/>
		</Modal.Actions>
	</Modal>
)

const styles = {
	cropContainer: {
		height: 200,
		width: 300
	},
	cropper: {
		containerStyle: {
			left: 180,
			right: 180,
			bottom: 90
		}
	},
	modalActions: {
		textAlign: 'center'
	}
}

export default CropImageModal
