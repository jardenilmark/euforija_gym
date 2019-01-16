import React from 'react'
import { Form, Header } from 'semantic-ui-react'

const CustomInput = props => (
	<Form.Field style={style.form}>
		<label>
			<Header size={'small'}>{props.header}</Header>
		</label>
		<Form.Input type={props.type} {...props.input} required />
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
