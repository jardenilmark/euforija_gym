import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import LogForm from '../../redux/containers/attendance/LogFormContainer'

const LogInput = props => (
	<Segment basic style={styles.segment}>
		<LogForm
			onSubmit={e => {
				props.updateAttendance(e)
			}}
		/>
	</Segment>
)

const styles = {
	segment: {
		marginLeft: '20px',
		marginTop: '10px',
		padding: 0
	}
}

export default LogInput
