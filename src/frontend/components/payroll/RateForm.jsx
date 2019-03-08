import React, { Component } from 'react'
import { Form, Segment, Button, Icon } from 'semantic-ui-react'
import { Field as ReduxField } from 'redux-form'
import { InputField } from 'react-semantic-redux-form'

const RateForm = ({ handleSubmit }) => (
	<Form as={'form'} onSubmit={handleSubmit} style={styles.form}>
		<Form.Group style={styles.fields}>
			<Form.Field style={styles.field}>
				<ReduxField
					id="rate"
					type="text"
					name="rate"
					component={InputField}
					placeholder="0"
					fluid
					style={styles.field}
				/>
			</Form.Field>
			<Button type={'submit'} id="calculateSalary" style={styles.button}>
				<span style={styles.eq}>=</span>
			</Button>
		</Form.Group>
	</Form>
)

const styles = {
	form: {
		width: '100%',
		margin: 0,
		padding: 0
	},
	field: {
		width: '100%',
		height: '35px',
		marginRight: '10px'
	},
	button: {
		width: '20%',
		margin: 0,
		padding: 0
	},
	fields: {
		margin: '0 9px 0 22px'
	}
}

export default RateForm
