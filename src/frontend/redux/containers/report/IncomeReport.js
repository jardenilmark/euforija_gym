import { connect } from 'react-redux'
import IncomeReport from '../../../components/report/IncomeReport'
import { fetchSales } from '../../actions/saleActions'

function mapStateToProps(state) {
	return {
		sales: state.sale.sales,
		byItem: state.sale.byItem
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async fetchSales() {
			await dispatch(fetchSales())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IncomeReport)
