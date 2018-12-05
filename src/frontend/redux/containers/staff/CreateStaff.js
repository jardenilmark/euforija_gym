import { connect } from 'react-redux'
import Staff from '../../../components/staff/Staff'
import { createStaff } from '../../actions/staffAction'

function mapDispatchToProps(dispatch) {
	return {
		async createStaff(user) {
			await dispatch(createStaff(user))
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Staff)
