import React from 'react'
import { ProfileSegment, ProfileImage, Name } from './AttendanceStyled'
import logo from '../../../../public/assets/images/logoAttendance.jpg'

const Profile = ({ loggedUser }) => (
	<ProfileSegment raised>
		<ProfileImage src={loggedUser ? loggedUser.image : logo} circular />
		<Name>
			{loggedUser ? `${loggedUser.firstName} ${loggedUser.lastName}` : 'Welcome to Euforija'}
		</Name>
	</ProfileSegment>
)

export default Profile
