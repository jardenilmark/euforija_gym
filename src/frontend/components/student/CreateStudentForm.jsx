import React from 'react'
import PersonalPage from '../../redux/containers/student/PersonalPage'
import HealthPage from '../../redux/containers/student/HealthPage'
import TrainerPage from '../../redux/containers/student/TrainerPage'
import PaymentPage from '../../redux/containers/student/PaymentPage'

const getStyle = (active, name) => {
	if (name === active) {
		return style.inline
	} else {
		return style.none
	}
}

class CreateStudent extends React.Component {
	componentDidMount() {
		this.props.getPrice()
	}
	render() {
		return studentForm(this.props)
	}
}

const studentForm = props => {
	const {
		setStepData,
		setActiveForm,
		createStudent,
		trainer,
		health,
		personal,
		croppedImage,
		trainingPrice
	} = props
	return (
		<div>
			<div style={getStyle(props.activeForm, 'personal')}>
				<PersonalPage
					onSubmit={e => {
						const obj = { ...e, image: croppedImage }
						setStepData('PERSONAL', obj)
						setActiveForm('health')
					}}
				/>
			</div>
			<div style={getStyle(props.activeForm, 'health')}>
				<HealthPage
					onSubmit={e => {
						setStepData('HEALTH', e)
						setActiveForm('trainer')
					}}
				/>
			</div>
			<div style={getStyle(props.activeForm, 'trainer')}>
				<TrainerPage setStepData={setStepData} />
			</div>
			<div style={getStyle(props.activeForm, 'payment')}>
				<PaymentPage
					onSubmit={e => {
						let payment = { amount: trainingPrice }
						if (props.paymentMethod === 'partial') {
							payment = { amount: parseInt(e.amount) }
						}
						createStudent({ ...trainer, ...personal, ...payment, questionnaire: health })
					}}
				/>
			</div>
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
