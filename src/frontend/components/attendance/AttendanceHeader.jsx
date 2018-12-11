import React from 'react'
import logo from '../../../../public/assets/images/logoAttendance.jpg'
import DigiClock from 'react-digital-clock'
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
