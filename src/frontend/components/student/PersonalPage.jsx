import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import ImageField from '../custom/ImageField'
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
			<div style={{ marginBottom: '8px', paddingLeft: '4%', paddingRight: '4%' }}>
				<Field
					name={'firstName'}
					component={CustomInput}
					{...{ header: 'Firstname', type: 'text' }}
				/>
				<Field
					name={'lastName'}
					component={CustomInput}
					{...{ header: 'lastName', type: 'text' }}
				/>
				<Header size={'small'} style={style.header}>
					Sex
				</Header>
				<Field name={'sex'} component={DropdownField} options={genderOptions} />
				<Field
					name={'birthday'}
					component={CustomInput}
					{...{ header: 'Birthday', type: 'date' }}
				/>
				<Field
					name={'contact'}
					component={CustomInput}
					{...{ header: 'Contact No.', type: 'number' }}
				/>
				<Field
					name={'emergency'}
					component={CustomInput}
					{...{ header: 'Emergency Contact No.', type: 'number' }}
				/>
				<Header size={'small'} style={style.header}>
					Picture
				</Header>
				<Field name={'image'} component={ImageField} type={'file'} required />
			</div>
			<Container textAlign={'right'} style={{ paddingTop: '20px' }}>
				<Button type={'submit'} disabled={pristine || submitting}>
					Next
				</Button>
			</Container>
		</Form>
	)
}

export default PersonalDetails

const style = {
	header: {
		padding: 0,
		margin: 0
	}
}
