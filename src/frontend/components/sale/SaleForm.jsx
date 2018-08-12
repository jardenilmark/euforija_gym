import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const SaleForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '8px' }}>
        <label><Header size='small' inverted>Quantity</Header></label>
        <div>
          <Field
            name='quantity'
            component='input'
            type='number'
            placeholder='place value'
            required
          />
        </div>
      </div>
      <Container textAlign='right' style={{ paddingTop: '20px' }}>
        <Button type='submit' disabled={pristine || submitting}>
          Submit
        </Button>
      </Container>
    </Form>
  )
}

export default SaleForm
