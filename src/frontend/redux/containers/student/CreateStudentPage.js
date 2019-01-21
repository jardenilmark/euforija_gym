import { connect } from 'react-redux'
import CreatePage from '../../../components/student/CreatePage'

function mapDispatchToProps(dispatch) {
	return {}
}

function mapStateToProps(state) {
	return {
		activeForm: state.student.activeForm
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePage)
