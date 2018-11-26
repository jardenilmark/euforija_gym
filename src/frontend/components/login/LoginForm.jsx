import React from 'react'
import { Form, Segment, Button, Divider, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Field from './Field'

const LoginForm = ({ handleSubmit }) => {
	return (
		<Segment basic textAlign={'center'} id={'outer-segment'}>
			<Form size={'tiny'} as={'form'} onSubmit={handleSubmit}>
				<Image
					src={require('../../../../public/assets/images/logo.jpg')}
					circular
					centered
					size={'tiny'}
				/>
				<Header id={'login-label'}>Sign in to your Account</Header>
				<Divider />
				<Segment basic id={'inner-segment'} textAlign={'left'}>
					<Field placeholder={'ID Number'} icon={'id card'} type={'text'} name={'idNumber'} />
					<Field placeholder={'Password'} icon={'lock'} type={'password'} name={'password'} />
				</Segment>
				<Divider />
				<Button type={'submit'} id={'login-button'} size={'medium'}>
					Login
				</Button>
			</Form>
		</Segment>
	)
}

export default LoginForm
