import { reset, reduxForm } from 'redux-form'
import LogForm from '../../../components/attendance/LogForm'

const clearForm = (result, dispatch) => dispatch(reset('logForm'))

const AttendanceForm = reduxForm({
	form: 'logForm',
	onSubmitSuccess: clearForm
})(LogForm)

export default AttendanceForm
