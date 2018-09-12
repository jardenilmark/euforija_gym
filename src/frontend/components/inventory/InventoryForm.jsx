import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const InventoryForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '8px' }}>
        <label><Header size='small' inverted>Name</Header></label>
        <div>
          <Field
            name='name'
            component='input'
            type='text'
            required
            placeholder='First Name'
          />
        </div>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label><Header size='small' inverted>Quantity</Header></label>
        <div>
          <Field
            name='quantity'
            component='input'
            type='number'
            required
            placeholder='Quantity'
          />
        </div>
      </div>
      <div>
        <label><Header size='small' inverted>Price</Header></label>
        <div>
          <Field
            name='price'
            component='input'
            type='number'
            required
            placeholder='Price'
          />
        </div>
      </div>
      <Container textAlign='right' style={{ paddingTop: '20px' }}>
        <Button type='submit' color='green' inverted disabled={pristine || submitting}>
          Submit
        </Button>
      </Container>
    </Form>
  )
}

export default InventoryForm
