import React from 'react'
import { Grid } from 'semantic-ui-react'
import AttendanceHeader from './AttendanceHeader'
import Logs from '../../redux/containers/attendance/LogsContainer'
import Profile from '../../redux/containers/attendance/ProfileContainer'
import LogInput from '../../redux/containers/attendance/LogInputContainer'
import { ParentContainer, MainGrid } from './AttendanceStyled'

const Attendance = () => (
	<ParentContainer>
		<AttendanceHeader />
		<MainGrid>
			<Grid.Column width={'5'}>
				<LogInput />
				<Profile />
			</Grid.Column>
			<Grid.Column width={'11'}>
				<Logs />
			</Grid.Column>
		</MainGrid>
	</ParentContainer>
)

export default Attendance
