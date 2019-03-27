import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import CreateStudent from '../../redux/containers/student/CreateStudentPage'
import StudentTable from '../../redux/containers/student/StudentTable'
import StudentProfile from '../../redux/containers/student/StudentProfile'

const StudentPage = props => {
	return (
		<Grid divided style={styles.grid}>
			<Grid.Column width={7}>
				<Button
					animated
					floated={'right'}
					style={styles.button}
					onClick={() => {
						props.toggleFormVisibility(true)
						props.toggleProfileVisibility(false)
					}}>
					<Button.Content hidden>Add New Student</Button.Content>
					<Button.Content visible>
						<Icon name={'add'} />
					</Button.Content>
				</Button>
				<StudentTable />
			</Grid.Column>
			<Grid.Column width={9}>
				{props.formVisibility && <CreateStudent />}
				{props.profileVisibility && <StudentProfile />}
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

export default StudentPage
