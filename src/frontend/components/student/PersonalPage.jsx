import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import ProfilePhoto from '../custom/ProfilePhoto'
import CustomInput from '../custom/CustomInput'

const genderOptions = [
	{
		text: 'Male',
		value: 'male'
	},
	{
		text: 'Female',
		value: 'female'
	}
]

const PersonalDetails = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<div style={styles.div}>
				<ProfilePhoto {...props} />
				<Form.Group widths={'equal'}>
					<Field
						name={'firstName'}
						component={CustomInput}
						{...{ header: 'First Name', type: 'text' }}
					/>
					<Field
						name={'lastName'}
						component={CustomInput}
						{...{ header: 'Last Name', type: 'text' }}
					/>
				</Form.Group>
				<Form.Group widths={'equal'}>
					<div style={{ width: '100%', marginRight: 10 }}>
						<Header size={'tiny'} style={styles.header}>
							Sex
						</Header>
						<Field name={'sex'} component={DropdownField} options={genderOptions} />
					</div>
					<Field
						name={'birthday'}
						component={CustomInput}
						{...{ header: 'Birth Date', type: 'date' }}
					/>
				</Form.Group>
				<Form.Group widths={'equal'}>
					<Field
						name={'contact'}
						component={CustomInput}
						{...{ header: 'Contact No.', type: 'number' }}
					/>
					<Field
						name={'emergencyContact'}
						component={CustomInput}
						{...{ header: 'Emergency Contact No.', type: 'number' }}
					/>
				</Form.Group>
			</div>
			<Container textAlign={'right'} style={styles.buttonContainer}>
				<Button type={'submit'} disabled={pristine || submitting}>
					Next
				</Button>
			</Container>
		</Form>
	)
}

export default PersonalDetails

const styles = {
	div: {
		marginBottom: '8px',
		paddingLeft: '4%',
		paddingRight: '4%'
	},
	header: {
		padding: 0,
		margin: 0
	},
	buttonContainer: {
		paddingTop: 20,
		paddingRight: 40
	}
}
