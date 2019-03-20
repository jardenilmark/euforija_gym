import React from 'react'
import { Label, Segment, Step, Icon, Divider } from 'semantic-ui-react'
import CreateStudent from '../../redux/containers/student/StudentCreateContainer'

const CreatePage = props => {
	const { activeForm } = props
	return (
		<Segment style={styles.segment} basic>
			<Label size={'huge'} attached={'top'} basic style={styles.headerLabel}>
				<Icon name={'edit outline'} style={{ marginRight: '5' }} />
				Add New Student
			</Label>
			<Divider />
			<Step.Group fluid style={styles.step} size={'small'}>
				<Step
					active={activeForm === 'personal'}
					completed={
						activeForm === 'health' || activeForm === 'trainer' || activeForm === 'payment'
					}>
					<Icon name="info" />
					<Step.Content>
						<Step.Title>Personal Details</Step.Title>
						<Step.Description>Tell us about you</Step.Description>
					</Step.Content>
				</Step>
				<Step
					active={activeForm === 'health'}
					completed={activeForm === 'trainer' || activeForm === 'payment'}>
					<Icon name="heartbeat" />
					<Step.Content>
						<Step.Title>Health</Step.Title>
						<Step.Description>Questions about your health</Step.Description>
					</Step.Content>
				</Step>
				<Step active={activeForm === 'trainer'} completed={activeForm === 'payment'}>
					<Icon name="user" />
					<Step.Content>
						<Step.Title>Trainer</Step.Title>
						<Step.Description>Choose your trainer</Step.Description>
					</Step.Content>
				</Step>
				<Step active={activeForm === 'payment'}>
					<Icon name="payment" />
					<Step.Content>
						<Step.Title>Payment</Step.Title>
						<Step.Description>Choose how you want to pay</Step.Description>
					</Step.Content>
				</Step>
			</Step.Group>
			<CreateStudent />
		</Segment>
	)
}

export default CreatePage

const styles = {
	headerLabel: {
		border: 'none',
		padding: 10
	},
	segment: {
		marginTop: '5%'
	},
	step: {
		marginTop: 10,
		marginBottom: 20
	}
}
