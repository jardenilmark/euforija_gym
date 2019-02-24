import React, { Component } from 'react'
import { Form, Segment, Button, Icon } from 'semantic-ui-react'
import { Field as ReduxField } from 'redux-form'
import { InputField } from 'react-semantic-redux-form'

const LogForm = ({ handleSubmit }) => (
	<Form as={'form'} onSubmit={handleSubmit} style={styles.form}>
		<Form.Group style={styles.fields}>
			<Form.Field style={styles.field}>
				<ReduxField
					id="payrollSearchField"
					type="text"
					name="payrollSearch"
					component={InputField}
					placeholder="Search by ID or Name"
					style={styles.field}
					fluid
				/>
			</Form.Field>
			<Button type={'submit'} id="payrollSearchButton" style={styles.button} icon>
				<Icon name="search" size="small" />
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
		height: '35px',
		padding: 0,
		margin: 0,
		fontSize: '1em'
	},
	fields: {
		margin: 0
	},
	button: {
		width: '20%',
		margin: 0,
		padding: 0
	}
}

export default LogForm
