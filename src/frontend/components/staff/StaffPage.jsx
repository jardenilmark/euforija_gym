import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button } from 'semantic-ui-react'
import StaffForm from '../../redux/containers/staff/StaffForm'
import StaffProfile from './StaffProfile'
import StaffTable from '../../redux/containers/staff/StaffTable'

const User = props => {
	console.log(props)
	return (
		<Grid divided style={styles.grid}>
			<Grid.Column width={8}>
				<Button
					icon={'add'}
					content={'Add Staff'}
					floated={'right'}
					style={styles.button}
					onClick={() => props.addStaff()}
				/>
				<StaffTable />
			</Grid.Column>
			<Grid.Column width={8}>
				{props.formVisibility && <StaffForm onSubmit={props.createStaff} />}
				{/* <StaffProfile /> */}
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

export default User
