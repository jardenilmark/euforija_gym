import { reduxForm } from 'redux-form'
import HealthPage from '../../../components/student/HealthPage'
import { setActiveForm } from '../../actions/studentActions'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch) {
	return {
		setActiveForm(active) {
			dispatch(setActiveForm(active))
		}
	}
}

const Form = reduxForm({ form: 'studentHealthForm' })(HealthPage)

export default connect(
	null,
	mapDispatchToProps
)(Form)
