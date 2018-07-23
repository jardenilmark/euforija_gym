import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Segment, Button, Divider, Header, Icon } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import 'semantic-ui-css/semantic.min.css'

const renderField = (label, icon, type, name) => (
  <Form.Field>
    <Field
      icon={icon}
      iconPosition='left'
      type={type}
      name={name}
      component={InputField}
      placeholder={label}
      autoComplete='off'
      required
    />
  </Form.Field>
)

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Form size='large' as='form' onSubmit={handleSubmit}>
      <Header color='orange' textAlign='center' style={{ fontSize: '25px' }}>
        Sign in to your Account
      </Header>
      {/* <Segment size='big' padded raised> */}
      {renderField('ID Number', 'user outline', 'text', 'idNumber')}
      {renderField('Password', 'lock', 'password', 'password')}
      {/* </Segment> */}
      <Divider />
      <Button color='orange' fluid size='big' type='submit' disabled={pristine || submitting}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
