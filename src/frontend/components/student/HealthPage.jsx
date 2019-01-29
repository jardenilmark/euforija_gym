import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Input, Header, Card, Divider } from 'semantic-ui-react'

const mapArray = array => {
	return array.map(e => {
		if (e.followUp) {
			return (
				<div key={e.question} style={style.arrayDiv}>
					<Header>{e.question}</Header>
					<label>
						<Field name={e.question} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label style={style.label}>
						<Field name={e.question} component={Input} type={'radio'} value={'no'} /> No
					</label>
					<Header>{e.followUp}</Header>
					<label>
						<Field name={e.followUp} component={Input} />
					</label>
				</div>
			)
		} else {
			return (
				<div key={e.question} style={style.arrayDiv}>
					<Header>{e.question}</Header>
					<label>
						<Field name={e.question} component={Input} type={'radio'} value={'yes'} /> Yes
					</label>
					<label style={style.label}>
						<Field name={e.question} component={Input} type={'radio'} value={'no'} /> No
					</label>
				</div>
			)
		}
	})
}

const healthIndexArray = [
	{ question: 'Do you have joint/bone deformities?' },
	{ question: 'Do you suffer from chest pain?' },
	{
		question: 'Do you have smoke regularly?',
		followUp: 'If yes, how many sticks?'
	}
]
const healthProblemArray = [
	{ question: 'High blood pressure' },
	{ question: 'Arthritis/Gout' },
	{ question: 'Urinary/Kidney Problem' },
	{ question: 'Have you been hospitalized?' },
	{ question: 'Recently?', followUp: 'For what reason?' },
	{ question: 'Do you exercise?' },
	{ question: 'Less than 2x a week?' },
	{ question: '3-4x a week?', followUp: 'Specify exercise type' },
	{ question: 'Any problems or pains relating to this activity?' },
	{ question: 'Heart Disease' },
	{ question: 'Diabetes' }
]

const HealthPage = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<Card style={style.card}>
				<div style={style.div}>
					<Divider />
					<Header textAlign={'center'}>HEALTH INDEX QUESTIONAIRE</Header>
					<Divider />
					{mapArray(healthIndexArray)}
					<Divider />
					<Header textAlign={'center'}>DO YOU HAVE HEALTH PROBLEMS?</Header>
					<Divider />
					{mapArray(healthProblemArray)}
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
	arrayDiv: {
		paddingBottom: 15
	},
	label: {
		marginLeft: 10
	},
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
