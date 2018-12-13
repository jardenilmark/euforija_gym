import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header, Input } from 'semantic-ui-react'
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

const CustomInput = ({ header, type }) => (
	<Form.Field style={style.form}>
		<label>
			<Header size={'small'}>{header}</Header>
		</label>
		<Input type={type} />
	</Form.Field>
)

const Create = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<div style={{ marginBottom: '8px', paddingLeft: '4%', paddingRight: '4%' }}>
				<Field
					name={'firstName'}
					component={CustomInput}
					{...{ header: 'Firstname', type: 'text' }}
					required
				/>
				<Field
					name={'lastName'}
					component={CustomInput}
					{...{ header: 'lastName', type: 'text' }}
					required
				/>
				<Header size={'small'} style={style.header}>
					Sex
				</Header>
				<Field name={'sex'} component={DropdownField} options={genderOptions} required />
				<Field
					name={'birthday'}
					component={CustomInput}
					{...{ header: 'Birthday', type: 'date' }}
					required
				/>
				<Field
					name={'contact'}
					component={CustomInput}
					{...{ header: 'Contact No.', type: 'number' }}
					required
				/>
				<Field
					name={'emergency'}
					component={CustomInput}
					{...{ header: 'Emergency Contact No.', type: 'number' }}
					required
				/>
				<Header size={'small'} style={style.header}>
					Picture
				</Header>
				<Field name={'image'} component={ImageField} type={'file'} required />
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

const style = {
	header: {
		padding: 0,
		margin: 0
	},
	form: {
		padding: 0,
		margin: 0,
		marginBottom: 10
	}
}
