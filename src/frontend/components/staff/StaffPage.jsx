import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button, Divider } from 'semantic-ui-react'
import StaffForm from '../../redux/containers/staff/StaffForm'
import StaffProfile from './StaffProfile'
import StaffTable from '../../redux/containers/staff/StaffTable'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility) => {
	toggleFormVisibility(true)
	toggleProfileVisibility(false)
}

const submit = (values, props) => {
	const staff = { ...values, image: props.image }
	props.createStaff(staff)
}

const StaffPage = props => {
	console.log('staff props', props)
	return (
		<Grid divided style={styles.grid}>
			<Grid.Column width={8}>
				<Button
					icon={'add'}
					content={'Add Staff'}
					floated={'right'}
					style={styles.button}
					onClick={() => invokeFunctions(props.toggleFormVisibility, props.toggleProfileVisibility)}
				/>
				<StaffTable
					toggleProfileVisibility={props.toggleProfileVisibility}
					toggleFormVisibility={props.toggleFormVisibility}
					setClickedStaff={props.setClickedStaffId}
				/>
			</Grid.Column>
			<Grid.Column width={8}>
				{props.formVisibility && (
					<StaffForm onSubmit={values => submit(values, props)} {...props} />
				)}
				{props.profileVisibility && (
					<StaffProfile
						clickedStaff={props.clickedStaff}
						getStaffProfile={props.getStaffProfile}
						staffProfile={props.staffProfile}
					/>
				)}
			</Grid.Column>
		</Grid>
	)
}

const styles = {
	grid: {
		height: '100%'
	},
	button: {
		marginTop: 30,
		marginRight: 30,
		marginBottom: 10
	}
}

export default StaffPage
