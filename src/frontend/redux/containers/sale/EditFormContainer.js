import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import SaleForm from '../../../components/sale/SaleForm'

let Form = reduxForm({ form: 'editSaleForm' })(SaleForm)
export default connect()(Form)
