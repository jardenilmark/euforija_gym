import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const InventoryForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label><Header size='medium'>Name</Header></label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label><Header size='medium'>Quantity</Header></label>
        <div>
          <Field
            name="quantity"
            component="input"
            type="number"
            placeholder="Quantity"
          />
        </div>
      </div>
      <div>
        <label><Header size='medium'>Price</Header></label>
        <div>
          <Field
            name="price"
            component="input"
            type="number"
            placeholder="Price"
          />
        </div>
      </div>
      <Container textAlign='right' style={{paddingTop: '10px'}}>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </Container>
    </Form>
  )
}

export default InventoryForm
