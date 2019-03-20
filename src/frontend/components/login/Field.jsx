import { Field as ReduxField } from 'redux-form'
import { Form } from 'semantic-ui-react'
import { Input, Label } from 'semantic-ui-react'
import React from 'react'

const Field = ({ label, type, name }) => (
	<Form.Field>
		<ReduxField
			type={type}
			name={name}
			component={Input}
			label={<Label content={label} style={styles.label} />}
			required
			style={styles.field}
			transparent
		/>
	</Form.Field>
)

const styles = {
	label: {
		width: 95,
		background: 'rgb(84, 16, 135)',
		color: 'white',
		marginRight: '10px'
	},
	field: {
		borderRadius: '5px',
		border: '2px solid rgb(84, 16, 135)'
	}
}

export default Field
