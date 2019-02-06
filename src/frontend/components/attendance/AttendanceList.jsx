import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { VisitorList, VisitorListItem, VisitorName, VisitorTimeIn } from './AttendanceStyled'

const AttendanceList = ({ visitors }) => (
	<VisitorList>
		{visitors.map(visitor => (
			<VisitorListItem key={visitor._id}>
				<Image avatar src={visitor.image} />
				<VisitorName>{`${visitor.firstName} ${visitor.lastName}`}</VisitorName>
				<VisitorTimeIn>{new Date(visitor.timeIn).toLocaleTimeString()}</VisitorTimeIn>
			</VisitorListItem>
		))}
	</VisitorList>
)

export default AttendanceList
