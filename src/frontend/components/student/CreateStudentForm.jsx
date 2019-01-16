import React from 'react'
import PersonalPage from '../../redux/containers/student/Personal'
import HealthPage from '../../redux/containers/student/Health'
import TrainerPage from '../../redux/containers/student/Trainer'

const getStyle = (active, name) => {
	if (name === active) {
		return style.inline
	} else {
		return style.none
	}
}

const CreateStudent = props => {
	return (
		<div>
			{/* <div style={getStyle(props.activeForm, 'personal')}>
				<PersonalPage
					onSubmit={e => {
						props.setActiveForm('health')
					}}
				/>
			</div>
			<div style={getStyle(props.activeForm, 'health')}>
				<HealthPage
					onSubmit={e => {
						props.setActiveForm('trainer')
					}}
				/>
			</div> */}
			{/* <div style={getStyle(props.activeForm, 'trainer')}> */}
			<TrainerPage />
			{/* </div> */}
		</div>
	)
}

const style = {
	inline: {
		display: 'inline'
	},
	none: {
		display: 'none'
	}
}
export default CreateStudent
