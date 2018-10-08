import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header, Divider } from 'semantic-ui-react'
import LoginForm from '../../redux/containers/login/LoginFormContainer'

const Login = (props) => {
  return (
    <Grid padded divided textAlign='center' verticalAlign='middle' style={{ height: '100%' }}>
      <Grid.Row>
        <Grid.Column width={9}>
          <Divider horizontal fitted>
            <Header id='slogan'>
              Commit to be Fit
            </Header>
          </Divider>
          <Header id='primary-header'>
            Euforija Fitness
          </Header>
          <Header id='sub-header'>
            Management System
          </Header>
        </Grid.Column>
        <Grid.Column width={7}>
          <LoginForm onSubmit={props.handleLogin} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Login
