import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import StaffForm from '../../redux/containers/staff/StaffForm'
import StaffProfile from './StaffProfile'
import StaffTable from '../../redux/containers/staff/StaffTable'
import FloatingButton from '../custom/FloatingButton'

const invokeFunctions = (toggleFormVisibility, toggleProfileVisibility) => {
	toggleFormVisibility(true)
	toggleProfileVisibility(false)
}

const submit = (values, props) => {
	const staff = { ...values, image: props.croppedImage }
	const { createStaff, initialValues, updateStaff } = props
	if (initialValues) {
		updateStaff(staff)
	} else {
		createStaff(staff)
	}
}

const StaffPage = props => {
	return (
		<Grid divided style={styles.grid}>
			<Grid.Row>
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
						setClickedStaff={props.setClickedStaff}
					/>
				</Grid.Column>
				<Grid.Column width={8}>
					{props.formVisibility && (
						<StaffForm onSubmit={values => submit(values, props)} {...props} />
					)}
					{props.profileVisibility && props.clickedStaff != null && (
						<StaffProfile clickedStaff={props.clickedStaff} />
					)}
				</Grid.Column>
				<FloatingButton />
			</Grid.Row>
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
