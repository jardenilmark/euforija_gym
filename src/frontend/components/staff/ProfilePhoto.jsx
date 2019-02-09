import Webcam from 'react-webcam'
import { Button, Image } from 'semantic-ui-react'
import React from 'react'

class ProfilePhoto extends React.Component {
	setRef = webcam => {
		this.webcam = webcam
	}

	capture = () => {
		const img = this.webcam.getScreenshot()
		this.props.saveImage(img)
	}

	render() {
		const hasCaptured = this.props.image === ''
		return (
			<div style={{ textAlign: 'center' }}>
				{hasCaptured ? (
					<Webcam
						height={350}
						width={300}
						ref={this.setRef}
						imageSmoothing={true}
						style={styles.webcam}
						screenshotFormat={'image/jpeg'}
					/>
				) : (
					<Image src={this.props.image} centered style={styles.image} />
				)}
				<div>
					{hasCaptured ? (
						<Button
							content={'Capture Image'}
							type={'button'}
							onClick={this.capture}
							icon={'camera retro'}
						/>
					) : (
						<Button
							content={'Retry'}
							type={'button'}
							onClick={this.props.clearImage}
							icon={'sync alternate'}
						/>
					)}
				</div>
			</div>
		)
	}
}

const styles = {
	webcam: {
		marginBottom: -15,
		marginTop: -50
	},
	image: {
		marginBottom: 40,
		marginTop: 50
	}
}

export default ProfilePhoto
