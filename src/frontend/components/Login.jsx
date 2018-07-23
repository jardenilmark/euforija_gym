import React from 'react'
import '../styles/style.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header, Image, Divider } from 'semantic-ui-react'
import LoginForm from '../../redux/containers/LoginFormContainer'

const Login = (props) => {
  return (
    <div className='main-div' style={{ height: '100%' }}>
      <div style={{ height: '30%', padding: '30px', textAlign: 'center' }} >
        <Image circular src='./assets/images/logo.jpg' spaced size='small'/>
        <Divider fitted hidden />
        <Header style={{ color: 'purple', fontSize: '80px' }}>
            Euforija Fitness
          <Header.Subheader style={{ color: 'purple', fontSize: '30px' }}>
            Management System
          </Header.Subheader>
        </Header>
      </div>
      <Grid centered style={{ height: '70%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 550, marginTop: '150px' }}>
          <LoginForm onSubmit={props.handleLogin} />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login
