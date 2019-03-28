import { connect } from 'react-redux'
import { findStaff } from '../../actions/payrollActions'
import Search from '../../../components/payroll/Search'

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		findStaff(name) {
			dispatch(findStaff(name))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)
