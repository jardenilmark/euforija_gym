import React from 'react'
import { Form, Segment, Button, Divider, Header, Image } from 'semantic-ui-react'
import Field from './Field'

const LoginForm = ({ handleSubmit }) => {
	return (
		<Segment basic textAlign={'center'} id={'outer-segment'}>
			<Form as={'form'} onSubmit={handleSubmit}>
				<Image src={'./assets/images/logoAttendance.jpg'} circular centered size={'small'} />
				<Header style={styles.header}>Sign in to your Account</Header>
				<Divider />
				<Segment basic id={'inner-segment'} textAlign={'left'}>
					<Field placeholder={'ID Number'} icon={'id card'} type={'text'} name={'idNumber'} />
					<Field placeholder={'Password'} icon={'lock'} type={'password'} name={'password'} />
				</Segment>
				<Divider />
				<Button type={'submit'} id={'login-button'} size={'large'}>
					Login
				</Button>
			</Form>
		</Segment>
	)
}

const styles = {
	header: {
		fontSize: '2vw',
		marginTop: '5px'
	},
	outerSegment: {
		width: '95%',
		marginLeft: '2.5%'
	},
	innerSegment: {
		marginLeft: '2.5%',
		marginRight: '2.5%'
	}
}

export default LoginForm
