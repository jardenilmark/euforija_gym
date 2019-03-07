import React, { Component } from 'react'
import { Table, Segment, Header, Icon } from 'semantic-ui-react'
import * as dateHelper from '../../helpers/dateHelper'

const TimeLogs = props => {
	if (props.dates.length) {
		const dates = dateHelper.pairDates(props.dates)
		return (
			<Table celled striped style={styles.main}>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Time in</Table.HeaderCell>
						<Table.HeaderCell>Time out</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{dates.map(date => (
						<Table.Row key={date[0]._id}>
							<Table.Cell>{new Date(date[0].date).toDateString()}</Table.Cell>
							<Table.Cell>{new Date(date[0].date).toLocaleTimeString()}</Table.Cell>
							<Table.Cell>{date[1] ? new Date(date[1].date).toLocaleTimeString() : ''}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		)
	}
	return (
		<Segment placeholder style={{ ...styles.main, border: 'dotted 5px' }} size={'big'}>
			<Header icon>
				<Icon name="exclamation circle" color={'red'} />
				<Header.Content>No Time Logs has been recorded.</Header.Content>
				<Header.Content>User did not time in/time out within the date range.</Header.Content>
			</Header>
		</Segment>
	)
}

const styles = {
	main: {
		marginTop: '50px',
		fontSize: '20px',
		textAlign: 'center'
	}
}

export default TimeLogs
