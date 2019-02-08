import React from 'react'
import { Image } from 'semantic-ui-react'
import TextFit from 'react-textfit'
import { VisitorList, VisitorListItem, VisitorName, VisitorTimeIn } from './AttendanceStyled'

const AttendanceList = ({ visitors }) => (
	<VisitorList>
		{visitors.map(visitor => (
			<VisitorListItem key={visitor._id}>
				<Image avatar src={visitor.image} />
				<VisitorName>
					<TextFit mode="single" forceSingleModeWidth={false}>
						{`${visitor.firstName} ${visitor.lastName}`}
					</TextFit>
				</VisitorName>
				<VisitorTimeIn>{new Date(visitor.timeIn).toLocaleTimeString()}</VisitorTimeIn>
			</VisitorListItem>
		))}
	</VisitorList>
)

export default AttendanceList
