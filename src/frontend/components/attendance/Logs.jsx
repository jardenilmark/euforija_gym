import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import {
	LogGrid,
	LogsRow,
	LogTrainerCol,
	LogsSegment,
	TrainerSegment,
	VisitedLabel
} from './AttendanceStyled'
import TrainerCards from './TrainerCards'
import AttendanceList from './AttendanceList'

class Logs extends Component {
	async componentDidMount() {
		await this.props.checkIfDayPassed()
	}

	render() {
		const { loggedIn, loggedOut, coachesIsLoading, visitorIsLoading } = this.props
		return (
			<LogGrid>
				<LogsRow>
					<LogTrainerCol width={'8'}>
						<TrainerSegment loading={coachesIsLoading}>
							<Label color={'green'} ribbon>
								I COULD TRAIN YOU
							</Label>
							<TrainerCards trainers={loggedIn} />
						</TrainerSegment>
					</LogTrainerCol>
					<LogTrainerCol width={'8'}>
						<TrainerSegment loading={coachesIsLoading}>
							<Label color={'red'} ribbon>
								I'M NOT HERE
							</Label>
							<TrainerCards trainers={loggedOut} />
						</TrainerSegment>
					</LogTrainerCol>
				</LogsRow>
				<LogsRow>
					<LogsSegment loading={visitorIsLoading}>
						<VisitedLabel attached={'top'}>WHO VISITED TODAY?</VisitedLabel>
						<AttendanceList visitors={this.props.visitors} />
					</LogsSegment>
				</LogsRow>
			</LogGrid>
		)
	}
}

export default Logs
