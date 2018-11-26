import { Field as ReduxField } from 'redux-form'
import { Form } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import React from 'react'

const Field = (placeholder, icon, type, name) => (
	<Form.Field>
		<ReduxField
			icon={icon}
			iconPosition={'left'}
			type={type}
			name={name}
			component={InputField}
			placeholder={placeholder}
			label={placeholder}
			required
		/>
	</Form.Field>
)

export default Field
