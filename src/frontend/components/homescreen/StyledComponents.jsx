import { Container, Header, Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

export const StyledContainer = styled(Container)`
  padding-left: 85 !important
  padding-right: 85 !important
  height: 75% !important
`

export const StyledCard = styled(Card)`
  padding: 10 !important
  border-radius: 0 !important
  display: inline-block
  vertical-align: middle
  box-shadow: 2px 2px 8px #A9A9A9 !important
`

export const StyledIcon = styled(Icon)`
	font-size: 45 !important;
`

export const StyledHeaderContent = styled(Header.Content)`
  font-size: 35 !important
  margin-top: -3 !important
  margin-bottom: -5 !important
  // color: #551a8b !important
`
