import React from 'react'
import { Container } from 'semantic-ui-react'
import DateForm from '../../redux/containers/payroll/DateFormContainer'
import TimeLogs from '../../redux/containers/payroll/TimeLogsContainer'

const Payroll = () => (
	<Container>
		<DateForm />
		<TimeLogs />
	</Container>
)

export default Payroll
