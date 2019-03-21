import React from 'react'
import { Form, Segment, Button, Divider, Header, Image } from 'semantic-ui-react'
import Field from './Field'

const LoginForm = ({ handleSubmit }) => {
	return (
		<Segment basic textAlign={'center'}>
			<Form as={'form'} onSubmit={handleSubmit} autoComplete={'off'}>
				<Image src={'./assets/images/loginLogo.png'} centered size={'large'} />
				<Header style={styles.header}>Sign in to your Account</Header>
				<Segment basic style={styles.innerSegment}>
					<Divider />
					<Segment basic textAlign={'left'}>
						<Field label={'ID Number'} type={'text'} name={'idNumber'} />
						<Field label={'Password'} type={'password'} name={'password'} />
					</Segment>
					<Divider />
				</Segment>
				<Button type={'submit'} id={'login-button'} size={'large'}>
					Login
				</Button>
			</Form>
		</Segment>
	)
}

const styles = {
	header: {
		fontSize: '2.5vw',
		marginTop: 15,
		fontFamily: 'Lane',
		color: 'rgb(84, 16, 135)'
	},
	innerSegment: {
		width: '85%',
		padding: 0,
		marginLeft: '7.5%'
	}
}

export default LoginForm
