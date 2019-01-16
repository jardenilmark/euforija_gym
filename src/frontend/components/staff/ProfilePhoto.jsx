import Webcam from 'react-webcam'
import { Button } from 'semantic-ui-react'
import React from 'react'

class ProfilePhoto extends React.Component {
	setRef = webcam => {
		this.webcam = webcam
	}

	capture = () => {
		const img = this.webcam.getScreenshot()
		alert('success')
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<Webcam
					height={300}
					width={300}
					ref={this.setRef}
					imageSmoothing={true}
					style={{ marginBottom: -20, marginTop: -25 }}
					screenshotFormat={'image/jpeg'}
				/>
				<div>
					<Button
						content={'Capture Image'}
						type={'button'}
						onClick={this.capture}
						icon={'camera retro'}
					/>
				</div>
			</div>
		)
	}
}

export default ProfilePhoto
