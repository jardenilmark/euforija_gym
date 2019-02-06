import React from 'react'
import { ProfileSegment, ProfileImage, Name } from './AttendanceStyled'
import TextFit from 'react-textfit'
import logo from '../../../../public/assets/images/purple.png'

const Profile = ({ loggedUser }) => (
	<ProfileSegment raised>
		<ProfileImage src={loggedUser ? loggedUser.image : logo} circular />
		<Name>
			<TextFit mode="single">
				{loggedUser ? `${loggedUser.firstName} ${loggedUser.lastName}` : 'Welcome to Euforija'}
			</TextFit>
		</Name>
	</ProfileSegment>
)

export default Profile
