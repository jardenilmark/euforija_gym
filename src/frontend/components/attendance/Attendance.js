import React from 'react'
import { Grid } from 'semantic-ui-react'
import AttendanceHeader from './AttendanceHeader'
import Logs from './Logs'
import Profile from './Profile'
import { ParentContainer, MainGrid } from './AttendanceStyled'

const Attendance = () => (
  <ParentContainer>
    <AttendanceHeader />
    <MainGrid>
      <Grid.Column width='5'>
        <Profile />
      </Grid.Column>
      <Grid.Column width='11'>
        <Logs />
      </Grid.Column>
    </MainGrid>
  </ParentContainer>
)

export default Attendance
