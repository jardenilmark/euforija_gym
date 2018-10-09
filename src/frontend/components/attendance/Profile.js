import React from 'react'
import { ProfileSegment, ProfileImage, Name } from './AttendanceStyled'
import logo from '../../../../public/assets/images/profilelogo.png'

const Profile = () => (
  <ProfileSegment raised>
    <ProfileImage src={logo} />
    <Name>
      Firstname Lastname
    </Name>
  </ProfileSegment>
)

export default Profile
