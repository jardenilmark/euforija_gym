import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import ImageField from '../custom/ImageField'
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

const roleOptions = [
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
					<Header size={'small'}>Name</Header>
				</label>
				<div>
					<Field name={'name'} component={'input'} type={'text'} placeholder={'Name'} required />
				</div>
				<label>
					<Header size={'small'}>Password</Header>
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
					<Header size={'small'}>Re-type Password</Header>
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
					<Header size={'small'}>Birthday</Header>
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
					<Header size={'small'}>Sex</Header>
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
				<label>
					<Header size={'small'}>Type</Header>
				</label>
				<div>
					<Field
						name={'role'}
						component={DropdownField}
						label={'Role'}
						options={roleOptions}
						required
					/>
				</div>
				<label>
					<Header size={'small'}>Picture</Header>
				</label>
				<div>
					<Field name={'image'} component={ImageField} type={'file'} required />
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
