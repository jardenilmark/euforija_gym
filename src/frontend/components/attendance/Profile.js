import React from 'react'
import { ProfileSegment, ProfileImage, Name } from './AttendanceStyled'
import logo from '../../../../assets/images/profilelogo.png'

const Profile = () => (
  <ProfileSegment raised>
    <ProfileImage src={logo} />
    <Name>
      Joselito Gemal
    </Name>
  </ProfileSegment>
)

export default Profile
