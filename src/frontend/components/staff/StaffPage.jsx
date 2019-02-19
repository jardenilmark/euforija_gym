import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button, Icon } from 'semantic-ui-react'
import StaffForm from '../../redux/containers/staff/StaffForm'
import StaffProfile from './StaffProfile'
import StaffTable from '../../redux/containers/staff/StaffTable'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility) => {
	toggleFormVisibility(true)
	toggleProfileVisibility(false)
}

const submit = (values, props) => {
	const staff = { ...values, image: props.croppedImage }
	props.createStaff(staff)
}

const StaffPage = props => {
	return (
		<Grid divided style={styles.grid}>
			<Grid.Column width={8}>
				<Button
					animated
					floated={'right'}
					style={styles.button}
					onClick={() =>
						invokeFunctions(props.toggleFormVisibility, props.toggleProfileVisibility)
					}>
					<Button.Content hidden>Add New Staff</Button.Content>
					<Button.Content visible>
						<Icon name={'add'} />
					</Button.Content>
				</Button>
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
				{props.profileVisibility && <StaffProfile clickedStaff={props.clickedStaff} />}
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
		marginBottom: 10,
		width: 120
	}
}

export default StaffPage
