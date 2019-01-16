import React from 'react'
import { Image, Segment, Step } from 'semantic-ui-react'
import CreateStudent from '../../redux/containers/student/StudentCreateContainer'

const CreatePage = props => {
	const { activeForm, setActiveForm } = props
	return (
		<div>
			<Image
				src={require('../../../../public/assets/images/formLogo.png')}
				centered
				style={style.img}
			/>
			<Segment style={style.segment}>
				<Step.Group ordered fluid>
					<Step
						active={activeForm === 'personal'}
						completed={activeForm === 'health' || activeForm === 'trainer'}>
						<Step.Content>
							<Step.Title>Personal Details</Step.Title>
						</Step.Content>
					</Step>
					<Step active={activeForm === 'health'} completed={activeForm === 'trainer'}>
						<Step.Content>
							<Step.Title>Health</Step.Title>
						</Step.Content>
					</Step>
					<Step active={activeForm === 'trainer'}>
						<Step.Content>
							<Step.Title>Trainer</Step.Title>
						</Step.Content>
					</Step>
				</Step.Group>
				<CreateStudent setActiveForm={setActiveForm} activeForm={activeForm} />
			</Segment>
		</div>
	)
}

export default CreatePage

const style = {
	img: {
		height: '20%',
		marginTop: 20,
		marginBottom: 10
	},
	segment: {
		marginLeft: '30%',
		marginRight: '30%',
		backgroundColor: '#EBEBEB'
	}
}
