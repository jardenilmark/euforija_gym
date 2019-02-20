import { connect } from 'react-redux'
import Profile from '../../../components/payroll/Profile'

function mapStateToProps(state) {
	return {
		selectedStaff: state.payroll.selectedStaff
	}
}

export default connect(mapStateToProps)(Profile)
