import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header, Image } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import loginHandler from '../../backend/loginHandler.js'
import '../styles/style.css'

const Login = () => {
  return (
    <div className='main-div'>
      <div style={{ height: '20%', padding: '50px' }}>
        {/* <Image circular src='./assets/images/logo.jpg' spaced size='medium'/> */}
        <Header textAlign='center' style={{ color: 'purple', fontSize: '100px' }}>
          Euforija Fitness
          <Header.Subheader style={{ color: 'purple', fontSize: '40px' }}>
            Management System
          </Header.Subheader>
        </Header>
      </div>
      <Grid centered style={{ height: '80%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 550, marginTop: '50px' }}>
          <LoginForm onSubmit={loginHandler} />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login
