import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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

const typeOptions = [
	{
		text: 'Coach',
		value: 'coach'
	},
	{
		text: 'Maintenance',
		value: 'maintenance'
	}
]

const Create = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<div style={{ marginBottom: '8px' }}>
				<label>
					<Header size={'small'} inverted>
						Name
					</Header>
				</label>
				<div>
					<Field name={'name'} component={'input'} type={'text'} placeholder={'Name'} required />
				</div>
				<label>
					<Header size={'small'} inverted>
						Passowrd
					</Header>
				</label>
				<div>
					<Field
						name={'password'}
						component={'input'}
						type={'password'}
						placeholder={'Password'}
						required
					/>
				</div>
				<label>
					<Header size={'small'} inverted>
						Re-type Password
					</Header>
				</label>
				<div>
					<Field
						name={'re-password'}
						component={'input'}
						type={'password'}
						placeholder={'Re-type password'}
						required
					/>
				</div>
				<label>
					<Header size={'small'} inverted>
						Birthday
					</Header>
				</label>
				<div>
					<Field
						name={'birthday'}
						component={'input'}
						type={'date'}
						placeholder={'Birthday'}
						required
					/>
				</div>
				<label>
					<Header size={'small'} inverted>
						Sex
					</Header>
				</label>
				<div>
					<Field
						name={'sex'}
						component={DropdownField}
						label={'Sex'}
						options={genderOptions}
						required
					/>
				</div>
				<div>
					<Field
						name={'type'}
						component={DropdownField}
						label={'Type'}
						options={typeOptions}
						required
					/>
				</div>
				<label>
					<Header size={'small'} inverted>
						placeholder
					</Header>
				</label>
				<div>
					<Field
						name={'placeholder'}
						component={'input'}
						type={'text'}
						placeholder={'placeholder'}
						required
					/>
				</div>
			</div>
			<Container textAlign={'right'} style={{ paddingTop: '20px' }}>
				<Button type={'submit'} disabled={pristine || submitting}>
					Submit
				</Button>
			</Container>
		</Form>
	)
}

export default Create
