import { connect } from 'react-redux'
import { selectDates, computeSalary } from '../../actions/payrollActions'
import DateForm from '../../../components/payroll/DateForm'

function mapStateToProps(state) {
	return {
		from: state.payroll.from,
		to: state.payroll.to,
		salary: state.payroll.salary,
		hours: state.payroll.hours,
		staff: state.payroll.selectedStaff,
		rate: state.payroll.rate
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectDates(range) {
			dispatch(selectDates(range))
		},
		computeSalary(from, to, rate, staff) {
			dispatch(computeSalary(from, to, rate, staff))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DateForm)
