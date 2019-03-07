import { connect } from 'react-redux'
import TimeLogs from '../../../components/payroll/TimeLogs'

function mapStateToProps(state) {
	return {
		dates: state.payroll.dates
	}
}

export default connect(mapStateToProps)(TimeLogs)
