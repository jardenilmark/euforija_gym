import { connect } from 'react-redux'
import IncomeReport from '../../../components/report/IncomeReport'
import { fetchSales, setChart } from '../../actions/saleActions'

function mapStateToProps(state) {
	return {
		sales: state.sale.sales,
		byItem: state.sale.byItem,
		userLogin: state.staff.userLogin
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async fetchSales(user) {
			await dispatch(fetchSales(user))
		},
		setChart(category) {
			dispatch(setChart(category))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IncomeReport)
