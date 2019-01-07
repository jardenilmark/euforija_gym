import React from 'react'
import { Image, Segment, Step } from 'semantic-ui-react'
import CreateStudent from '../../redux/containers/student/StudentCreateContainer'
import 'semantic-ui-css/semantic.min.css'

const CreatePage = () => {
	return (
		<div>
			<Image
				src={require('../../../../public/assets/images/formLogo.png')}
				centered
				style={style.img}
			/>
			<Segment style={style.segment}>
				<Step.Group ordered fluid>
					<Step active completed={false}>
						<Step.Content>
							<Step.Title>Personal Details</Step.Title>
						</Step.Content>
					</Step>
					<Step active={false} completed={false}>
						<Step.Content>
							<Step.Title>Health</Step.Title>
						</Step.Content>
					</Step>
					<Step active={false} completed={false}>
						<Step.Content>
							<Step.Title>Trainer</Step.Title>
						</Step.Content>
					</Step>
				</Step.Group>
				<CreateStudent />
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
		marginLeft: '20%',
		marginRight: '20%',
		backgroundColor: '#EBEBEB'
	}
}
