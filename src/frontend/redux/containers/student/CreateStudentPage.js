import { connect } from 'react-redux'
import CreatePage from '../../../components/student/CreatePage'

function mapStateToProps(state) {
	return {
		activeForm: state.student.activeForm
	}
}

export default connect(
	mapStateToProps,
	null
)(CreatePage)
