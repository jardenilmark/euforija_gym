import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Login from '../../redux/containers/LoginContainer'

const Body = (props) => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
    </div>
  )
}

export default Body
