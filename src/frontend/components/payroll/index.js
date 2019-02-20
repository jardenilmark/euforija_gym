import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Profile from '../../redux/containers/payroll/ProfileContainer'
import Search from '../../redux/containers/payroll/SearchContainer'
import StaffList from '../../redux/containers/payroll/StaffListContainer'

const Payroll = () => (
	<Container>
		<Grid style={styles.grid}>
			<Grid.Column width={4} style={styles.profileCol}>
				<Search />
				<Profile />
			</Grid.Column>
			<Grid.Column width={12} style={styles.attendanceCol}>
				<Grid.Row style={styles.listRow}>
					<StaffList />
				</Grid.Row>
				<Grid.Row style={styles.dataRow} />
			</Grid.Column>
		</Grid>
	</Container>
)

const styles = {
	profileCol: {
		paddingTop: '30px'
	},
	attendanceCol: {},
	grid: {
		height: '100%'
	},
	listRow: {
		height: '10%',
		alignItems: 'center',
		justifyContents: 'center',
		display: 'flex'
	},
	dataRow: {
		height: '90%'
	}
}

export default Payroll
