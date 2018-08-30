import React from 'react'
import logo from '../../../../assets/images/logo.jpg'
import DigiClock from 'react-digital-clock'
import { HeaderLogo, ClockContainer, AppHeader } from './AttendanceStyled'

const AttendanceHeader = () => (
  <AppHeader as='h1'>
    <HeaderLogo src={logo} />
    <ClockContainer>
      < DigiClock/>
    </ClockContainer>
  </AppHeader>
)

export default AttendanceHeader
