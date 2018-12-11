import React from 'react'
import { Menu, MainButton, ChildButton } from 'react-mfb'
import 'react-mfb/mfb.css'
import 'ionicons/dist/css/ionicons.css'

const ActionButton = () => {
	return (
		<Menu effect={'slidein'} method={'hover'} position={'br'}>
			<MainButton iconResting={'ion-plus-round'} iconActive={'ion-close-round'} />
			<ChildButton icon={'ion-social-octocat'} label={'Sales Screen'} />
			<ChildButton icon={'ion-social-twitter'} label={'Share on Twitter'} />
		</Menu>
	)
}

export default ActionButton
