import { reduxForm } from 'redux-form'
import RateForm from '../../../components/payroll/RateForm'

const Rate = reduxForm({
	form: 'salaryRate'
})(RateForm)

export default Rate
