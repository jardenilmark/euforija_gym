import { connect } from 'react-redux'
import Create from '../../../components/staff/Create'
import { createStaff } from '../../actions/staffAction'

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		async createStaff(user) {
			await dispatch(createStaff(user))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create)
