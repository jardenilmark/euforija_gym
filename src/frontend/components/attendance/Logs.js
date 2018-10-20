import React from 'react'
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
import AttendanceList from './AttendanceList'

const Logs = () => (
	<LogGrid>
		<LogsRow>
			<LogTrainerCol width={'8'}>
				<TrainerSegment>
					<Label as={'a'} color={'green'} ribbon>
						I COULD TRAIN YOU
					</Label>
				</TrainerSegment>
			</LogTrainerCol>
			<LogTrainerCol width={'8'}>
				<TrainerSegment>
					<Label as={'a'} color={'red'} ribbon>
						I'M NOT HERE
					</Label>
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

export default Logs
