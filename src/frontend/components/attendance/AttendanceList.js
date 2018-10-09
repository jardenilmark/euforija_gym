import React from 'react'
import { List } from 'semantic-ui-react'
import { VisitorList, VisitorListItem, VisitorName, VisitorTimeIn } from './AttendanceStyled'

const AttendanceList = ({ visitors }) => (
  <VisitorList>
    {visitors.map(visitor => (
      <VisitorListItem key={visitor._id}>
        <VisitorName>
          <List.Header>
            {`${visitor.firstName} ${visitor.lastName}`}
          </List.Header>
        </VisitorName>
        <VisitorTimeIn>
          {visitor.timeIn}
        </VisitorTimeIn>
      </VisitorListItem>
    ))}
  </VisitorList>
)

export default AttendanceList
