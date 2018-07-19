import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Segment, Button, Divider, Header, Icon } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import 'semantic-ui-css/semantic.min.css'

const renderField = (label, icon, type, name) => (
  <Form.Field>
    {/* <label>{label}</label> */}
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
  const { handleSubmit } = props
  return (
    <Form size='large' as='form' onSubmit={handleSubmit}>
      <Segment size='massive' padded secondary>
        <Header color='orange' textAlign='center' style={{ fontSize: '25px' }}>
          Sign in to your Account
        </Header>
        <Segment size='big' padded raised >
          {renderField('Username', 'user outline', 'text', 'username')}
          {renderField('Password', 'lock', 'password', 'password')}
        </Segment>
        <Divider />
        <Button color='orange' fluid size='big' type='submit'>
          Login
        </Button>
      </Segment>
    </Form>
  )
}

export default reduxForm({ form: 'loginform' })(LoginForm)
