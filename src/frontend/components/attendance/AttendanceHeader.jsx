import React from 'react'
import logo from '../../../../public/assets/images/logo.jpg'
import DigiClock from '../../redux/containers/attendance/DigitalClock'
import { HeaderLogo, ClockContainer, AppHeader } from './AttendanceStyled'

const AttendanceHeader = () => (
	<AppHeader as={'h1'}>
		<HeaderLogo src={logo} />
		<ClockContainer>
			<DigiClock />
		</ClockContainer>
	</AppHeader>
)

export default AttendanceHeader
