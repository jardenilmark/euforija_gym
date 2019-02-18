import Webcam from 'react-webcam'
import { Button, Image, Container } from 'semantic-ui-react'
import React from 'react'
import iziToast from 'izitoast'

class ProfilePhoto extends React.Component {
	setRef = webcam => {
		this.webcam = webcam
	}

	capture = () => {
		const img = this.webcam.getScreenshot()
		this.props.saveImage(img)
		iziToast.success({
			title: 'SUCCESS',
			message: 'Image captured successfully!',
			position: 'topRight'
		})
	}

	render() {
		const hasCaptured = this.props.image === ''
		return (
			<div style={styles.outerDiv}>
				{hasCaptured ? (
					<Webcam
						height={225}
						width={300}
						ref={this.setRef}
						imageSmoothing={true}
						style={styles.webcam}
						screenshotFormat={'image/jpeg'}
					/>
				) : (
					<Image src={this.props.image} centered style={styles.image} />
				)}
				<div style={styles.innerDiv}>
					{hasCaptured ? (
						<Button
							circular
							type={'button'}
							onClick={this.capture}
							icon={'camera retro'}
							size={'huge'}
							style={styles.button}
						/>
					) : (
						<Button
							circular
							type={'button'}
							onClick={this.props.clearImage}
							size={'huge'}
							icon={'sync alternate'}
							style={styles.button}
						/>
					)}
				</div>
			</div>
		)
	}
}

const styles = {
	webcam: {
		border: 'dashed 3px'
	},
	image: {
		border: 'dashed 3px'
	},
	button: {
		marginTop: 10
	},
	outerDiv: {
		textAlign: 'center',
	},
	innerDiv: {
		marginTop: 10,
		marginBottom: 20
	}
}

export default ProfilePhoto
