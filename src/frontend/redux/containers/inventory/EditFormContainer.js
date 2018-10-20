import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import InventoryForm from '../../../components/inventory/InventoryForm'

function mapStateToProps(state) {
	return {
		initialValues: state.inventory.initialVal
	}
}

let Form = reduxForm({ form: 'editInventoryForm' })(InventoryForm)
export default connect(mapStateToProps)(Form)
