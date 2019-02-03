import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import {
	LogGrid,
	LogsRow,
	LogTrainerCol,
	LogsContainer,
	TrainerSegment,
	VisitedLabel
} from './AttendanceStyled'
import TrainerCards from './TrainerCards'
// import AttendanceList from './AttendanceList'

class Logs extends Component {
	componentDidMount() {
		this.props.getAttendance()
	}

	render() {
		const { loggedIn, loggedOut } = this.props
		return (
			<LogGrid>
				<LogsRow>
					<LogTrainerCol width={'8'}>
						<TrainerSegment>
							<Label color={'green'} ribbon>
								I COULD TRAIN YOU
							</Label>
							<TrainerCards trainers={loggedIn} />
						</TrainerSegment>
					</LogTrainerCol>
					<LogTrainerCol width={'8'}>
						<TrainerSegment>
							<Label color={'red'} ribbon>
								I'M NOT HERE
							</Label>
							<TrainerCards trainers={loggedOut} />
						</TrainerSegment>
					</LogTrainerCol>
				</LogsRow>
				<LogsRow>
					<LogsContainer>
						<VisitedLabel attached={'top'}>WHO VISITED TODAY?</VisitedLabel>
					</LogsContainer>
				</LogsRow>
			</LogGrid>
		)
	}
}

export default Logs
