import React from 'react'
import { Form, Header } from 'semantic-ui-react'

const CustomInput = props => (
	<Form.Field style={style.form}>
		{props.header && (
			<label>
				<Header size={'tiny'}>{props.header}</Header>
			</label>
		)}
		<Form.Input type={props.type} {...props.input} required={props.isRequired === undefined} />
	</Form.Field>
)

const style = {
	form: {
		padding: 0,
		margin: 0,
		marginRight: 10
	}
}

export default CustomInput
