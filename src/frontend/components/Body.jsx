import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import App from './App'
import BodyRouter from './BodyRouter'

const Body = (props) => {
  return (
    <Container fluid>
      <BodyRouter>
        <Route exact path='/' component={App} />
      </BodyRouter>
    </Container>
  )
}

export default Body
