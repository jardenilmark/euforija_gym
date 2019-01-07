import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Input, Header, Card, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const HealthPage = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<Card style={style.width}>
				<div style={style.div}>
					<Divider />
					<Header textAlign={'center'}>HEALTH INDEX QUESTIONAIRE</Header>
					<Divider />
					<Header>Do you have joint/bone deformities?</Header>
					<label>
						<Field name={'deformities'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'deformities'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Do you suffer from chest pain?</Header>
					<label>
						<Field name={'chestPain'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'chestPain'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Do you have smoke regularly?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>If yes, how many sticks?</Header>
					<label>
						<Field name={'smoke'} component={Input} />
					</label>
					<Divider />
					<Header textAlign={'center'}>Do YOU HAVE HEALTH PROBLEMS?</Header>
					<Divider />
					<Header>High blood pressure</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Arthritis/Gout</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Urinary/Kidney Problem</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Have you been hospitalized?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Recently?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>For what reason?</Header>
					<label>
						<Field name={'smoke'} component={Input} />
					</label>
					<Header>Do you exercise?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Less than 2x a week?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>3-4x a week?</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Specify exercise type</Header>
					<label>
						<Field name={'smoke'} component={Input} />
					</label>
					<Header>Any problems or pains relating to this activity</Header>
					<label>
						<Field name={'smoke'} component={Input} />
					</label>
					<Header>Heart Disease</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>Diabetes</Header>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label>
						<Field name={'smoke'} component={Input} type={'radio'} value={'no'} /> No
					</label>
				</div>
			</Card>
			<Container textAlign={'right'} style={style.container}>
				<Button type={'submit'} disabled={pristine || submitting}>
					Next
				</Button>
			</Container>
		</Form>
	)
}

const style = {
	card: {
		width: '100%'
	},
	div: {
		marginBottom: '8px',
		paddingLeft: '4%',
		paddingRight: '4%'
	},
	container: {
		paddingTop: '20px'
	}
}

export default HealthPage
