import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import CreateStaff from '../../redux/containers/staff/CreateStaffContainer'

const Test = props => {
	return <CreateStaff onSubmit={e => console.log(e)} />
}

export default Test
