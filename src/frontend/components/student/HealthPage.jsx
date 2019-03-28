import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Input, Header, Segment, Divider } from 'semantic-ui-react'

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
	{ question: 'Do you have joint or bone deformities?' },
	{ question: 'Do you suffer from chest pain?' },
	{
		question: 'Do you smoke regularly?',
		followUp: 'If yes, how many sticks of cigarettes?'
	}
]
const healthProblemArray = [
	{ question: 'High blood Pressure' },
	{ question: 'Arthritis or Gout' },
	{ question: 'Urinary or Kidney Problems' },
	{ question: 'Have you been hospitalized?' },
	{ question: 'Recently?', followUp: 'For what reason/s?' },
	{ question: 'Do you exercise?' },
	{ question: 'Less than 2 times a week?' },
	{ question: '3 to 4 times a week?', followUp: 'Specify the type of exercise' },
	{ question: 'Any problems or pains relating to this activity?' },
	{ question: 'Heart Disease' },
	{ question: 'Diabetes' }
]

const HealthPage = props => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit}>
			<Segment style={style.segment} basic>
				<div style={style.div}>
					<Divider />
					<Header textAlign={'center'}>Health Index Questionnaire</Header>
					<Divider />
					{mapArray(healthIndexArray)}
					<Divider />
					<Header textAlign={'center'}>Do you exhibit any health-related problems?</Header>
					<Divider />
					{mapArray(healthProblemArray)}
				</div>
			</Segment>
			<Container textAlign={'right'} style={style.buttonContainer}>
				<Button type={'button'} onClick={() => props.setActiveForm('personal')}>
					Previous
				</Button>
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
	segment: {
		width: '100%',
		height: '600px',
		overflowY: 'auto'
	},
	div: {
		marginBottom: '8px',
		paddingLeft: '4%',
		paddingRight: '4%'
	},
	buttonContainer: {
		paddingTop: 20
	}
}

export default HealthPage
