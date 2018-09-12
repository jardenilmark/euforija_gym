import React from 'react'
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
  -webkit-transform: perspective(1px) translateZ(0)
  transform: perspective(1px) translateZ(0)
  // box-shadow: 0 0 1px rgba(0, 0, 0, 0)
  position: relative
  :before {
    content: ''
    position: absolute
    border: #404040 solid 4px
    top: 0
    right: 0
    bottom: 0
    left: 0
    -webkit-transition-duration: 0.3s
    transition-duration: 0.3s
    -webkit-transition-property: top, right, bottom, left
    transition-property: top, right, bottom, left
  }
  :hover:before, :focus:before, :active:before {
    top: -8px
    right: -8px
    bottom: -8px
    left: -8px
  }
  // box-shadow: 2px 2px 8px #541087 !important
`

export const StyledIcon = styled(Icon)`
  font-size: 45 !important
`

export const StyledHeaderContent = styled(Header.Content)`
  font-size: 35 !important
  margin-top: -3 !important
  margin-bottom: -5 !important
  // color: #551a8b !important
`
