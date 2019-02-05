import React, { Component } from 'react'
import { Form, Segment, Button, Icon } from 'semantic-ui-react'
import { Field as ReduxField } from 'redux-form'
import { InputField } from 'react-semantic-redux-form'

const LogForm = ({ handleSubmit }) => (
	<Form as={'form'} onSubmit={handleSubmit} style={styles.form}>
		<Form.Group style={styles.fields}>
			<Form.Field style={styles.field}>
				<ReduxField
					id="logField"
					type="text"
					name="logId"
					component={InputField}
					placeholder="Enter ID Number"
					style={styles.field}
					fluid
				/>
			</Form.Field>
			<Button type={'submit'} id="logButton" style={styles.button} icon>
				<Icon name="angle double right" size="big" />
			</Button>
		</Form.Group>
	</Form>
)

const styles = {
	form: {
		width: '100%'
	},
	field: {
		width: '100%',
		height: '60px',
		padding: 0,
		fontSize: '1.5em'
	},
	fields: {
		margin: 0
	},
	button: {
		width: '60px',
		margin: 0
	}
}

export default LogForm
