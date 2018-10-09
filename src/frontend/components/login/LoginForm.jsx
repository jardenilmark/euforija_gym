import React from 'react'
import { Field } from 'redux-form'
import { Form, Segment, Button, Divider, Header, Image } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import 'semantic-ui-css/semantic.min.css'

const renderField = (placeholder, icon, type, name) => (
  <Form.Field className='field'>
    <Field
      icon={icon}
      iconPosition='left'
      type={type}
      name={name}
      component={InputField}
      placeholder={placeholder}
      required
    />
  </Form.Field>
)

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <Segment basic textAlign='center' id='outer-segment'>
      <Form size='tiny' as='form' onSubmit={handleSubmit}>
        <Image src='./assets/images/logo.jpg' circular centered size='tiny' />
        <Header id='login-label'>
          Sign in to your Account
        </Header>
        <Divider />
        <Segment basic id='inner-segment'>
          {renderField('ID Number', 'id card', 'text', 'idNumber')}
          {renderField('Password', 'lock', 'password', 'password')}
        </Segment>
        <Divider />
        <Button type='submit' id='login-button'>
          Login
        </Button>
      </Form>
    </Segment>
  )
}

export default LoginForm
