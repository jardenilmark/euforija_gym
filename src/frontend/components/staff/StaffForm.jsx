import { DropdownField } from '../custom/Dropdown'
import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Label, Header, Segment, Divider, Container, Icon } from 'semantic-ui-react'
import ProfilePhoto from '../custom/ProfilePhoto'

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
		value: 'Coach'
	},
	{
		text: 'Maintenance',
		value: 'Maintenance'
	}
]

const Create = props => {
	const { handleSubmit, pristine, submitting, initialValues } = props
	return (
		<Form onSubmit={values => handleSubmit(values)}>
			<Segment style={styles.segment} basic>
				<Label size={'huge'} attached={'top'} basic style={styles.headerLabel}>
					<Icon name={'edit outline'} style={{ marginRight: '5' }} />
					{initialValues ? 'Edit Staff' : 'Add New Staff'}
				</Label>
				<Divider />
				<ProfilePhoto {...props} />
				<Divider style={styles.divider} />
				<Form.Group widths={'equal'}>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>First name</Header>
						</label>
						<Field
							name={'firstName'}
							component={'input'}
							type={'text'}
							placeholder={'First name'}
							required
						/>
					</div>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Last name</Header>
						</label>
						<Field
							name={'lastName'}
							component={'input'}
							type={'text'}
							placeholder={'Last name'}
							required
						/>
					</div>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Nickname</Header>
						</label>
						<Field
							name={'nickname'}
							component={'input'}
							label={'Nickname'}
							placeholder={'Nickname'}
							required
						/>
					</div>
				</Form.Group>
				<Form.Group>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Gender</Header>
						</label>
						<Field
							name={'gender'}
							component={DropdownField}
							label={'Gender'}
							options={genderOptions}
							required
						/>
					</div>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Birth date</Header>
						</label>
						<Field
							name={'birthdate'}
							component={'input'}
							type={'date'}
							placeholder={'Birth date'}
							required
						/>
					</div>
				</Form.Group>
				<Form.Group>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Address</Header>
						</label>
						<Field
							name={'address'}
							component={'input'}
							type={'text'}
							placeholder={'Address'}
							required
						/>
					</div>
				</Form.Group>
				<Form.Group>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Role</Header>
						</label>
						<Field
							name={'role'}
							component={DropdownField}
							label={'Role'}
							options={roleOptions}
							required
						/>
					</div>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Contact number</Header>
						</label>
						<Field
							name={'contactNumber'}
							component={'input'}
							type={'text'}
							placeholder={'Contact number'}
							required
						/>
					</div>
				</Form.Group>
				<Form.Group>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Password</Header>
						</label>
						<Field
							name={'password'}
							component={'input'}
							type={'password'}
							placeholder={'Password'}
							required
						/>
					</div>
					<div style={styles.field}>
						<label>
							<Header size={'tiny'}>Retype Password</Header>
						</label>
						<Field
							name={'rePassword'}
							component={'input'}
							type={'password'}
							placeholder={'Retype Password'}
							required
						/>
					</div>
				</Form.Group>
				<Container textAlign={'right'}>
					<Button type={'submit'} disabled={pristine || submitting} size={'medium'}>
						Submit
					</Button>
				</Container>
			</Segment>
		</Form>
	)
}

const styles = {
	field: {
		marginRight: '10',
		width: '100%'
	},
	label: {
		margin: 0
	},
	segment: {
		margin: '30'
	},
	headerLabel: {
		border: 'none',
		padding: 10
	},
	divider: {
		marginBottom: 30,
		marginTop: 50
	}
}

export default Create
