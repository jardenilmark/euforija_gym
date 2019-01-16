import React from 'react'
import { Form, Header } from 'semantic-ui-react'

const CustomInput = ({ header, type }) => (
	<Form.Field style={style.form}>
		<label>
			<Header size={'small'}>{header}</Header>
		</label>
		<Form.Input type={type} required />
	</Form.Field>
)

const style = {
	form: {
		padding: 0,
		margin: 0,
		marginBottom: 10
	}
}

export default CustomInput
