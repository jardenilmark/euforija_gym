import React from 'react'
import { Form } from 'semantic-ui-react'

export const DropdownField = props => (
	<Form.Field style={style.form}>
		<Form.Dropdown
			selection
			{...props.input}
			options={props.options}
			value={props.input.value}
			onChange={(e, data) => props.input.onChange(data.value)}
			placeholder={props.label}
			required
		/>
	</Form.Field>
)

const style = {
	form: {
		padding: 0,
		margin: 0,
		marginBottom: 10
	}
}
