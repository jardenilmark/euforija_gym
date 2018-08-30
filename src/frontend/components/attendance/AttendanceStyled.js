import React from 'react'
import { Segment, Image, Container, Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'

export const ProfileSegment = styled(Segment)({
  marginTop: '150px !important',
  marginLeft: '20px !important',
  height: '75%',
  backgroundColor: '#fbf5fe !important',
  padding: '10px 20px !important'
})

export const ProfileImage = styled(Image)({
  width: '100%',
  height: 'auto',
  maxHeight: '70%'
})

export const Name = styled(Container)({
  height: '30%',
  padding: '50px',
  fontSize: '20pt !important',
  textAlign: 'center'
})

export const MainGrid = styled(Grid)({
  height: '90%',
  width: '100%'
})

export const LogGrid = styled(Grid)({
  height: '100% ',
  width: '100%',
  margin: '0 !important',
  padding: '0 !important'
})

export const LogsContainer = styled(Container)({
  border: '2px solid #808080',
  borderRadius: '5px',
  boxShadow: '0 0 2px 1px #cccccc',
  backgroundColor: '#ffffff',
  marginBottom: '5px !important'
})

export const LogsRow = styled(Grid.Row)({
  margin: '0 !important',
  padding: '0 !important',
  height: '48%'
})

export const LogTrainerCol = styled(Grid.Column)({
  padding: '10px !important'
})

export const TrainerSegment = styled(Segment)({
  border: '2px solid #808080 !important',
  boxShadow: '0 0 2px 1px #cccccc !important',
  height: '100%'
})

export const HeaderLogo = styled(Image)({
  marginLeft: '50px !important',
  height: '90% !important',
  width: 'auto !important',
  float: 'left'
})

export const ClockContainer = styled(Container)({
  verticalAlign: 'middle',
  padding: '18px',
  height: '100%'
})

export const AppHeader = styled(Header)({
  backgroundColor: '#541087',
  margin: '0 !important',
  padding: '0 !important',
  height: '10%',
  textAlign: 'center'
})

export const ParentContainer = styled(Container)({
  margin: '0 !important',
  padding: '0 !important',
  width: '100% !important',
  height: '100% !important',
  backgroundColor: '#f4e8fc !important'
})
