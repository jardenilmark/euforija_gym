import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

export const DropdownField = props => (
	<Form.Field>
		<Dropdown
			selection
			{...props.input}
			options={props.options}
			value={props.input.value}
			onChange={(e, data) => props.input.onChange(data.value)}
			placeholder={props.label}
		/>
	</Form.Field>
)
