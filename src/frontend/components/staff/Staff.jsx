import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import CreateStaff from '../../redux/containers/staff/StaffForm'
import TableRows from './TableRows'

const User = props => {
	return (
		<Grid divided style={styles.grid}>
			<Grid.Column width={8}>
				<TableRows />
			</Grid.Column>
			<Grid.Column width={8}>
				<CreateStaff onSubmit={props.createStaff} />
			</Grid.Column>
		</Grid>
	)
}

const styles = {
	grid: {
		height: '100%'
	}
}

export default User
