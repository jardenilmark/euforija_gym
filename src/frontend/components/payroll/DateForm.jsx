import React, { Component } from 'react'
import { Segment, Divider, Container } from 'semantic-ui-react'
import { DateRange } from 'react-date-range'
import RateForm from '../../redux/containers/payroll/RateFormContainer'

const DateForm = props => {
	if (props.staff) {
		props.computeSalary(props.from, props.to, props.rate, props.staff)
	}
	return (
		<Segment basic style={styles.segment}>
			<Divider />
			<DateRange
				onInit={range => {
					props.selectDates(range)
				}}
				onChange={range => {
					props.selectDates(range)
				}}
				style={styles.date}
			/>
			<Divider />
			<Container style={styles.form}>
				<Container style={styles.range}>
					<p style={styles.box}>{props.from.toDateString()}</p>
				</Container>
				<Container style={{ ...styles.range, width: '50px' }}>to</Container>
				<Container style={styles.range}>
					<p style={styles.box}>{props.to.toDateString()}</p>
				</Container>
			</Container>
			<Container style={styles.calc}>
				<Container style={styles.text}>
					{props.hours} hour{props.hours > 1 ? 's' : ''}
				</Container>
				<Container style={{ ...styles.text, width: '20px' }}>x</Container>
				<Container>
					<RateForm
						style={styles.rate}
						onSubmit={rate => {
							props.computeSalary(props.from, props.to, rate.rate, props.staff)
						}}
					/>
				</Container>
				<Container style={styles.text}>
					<span>&#8369;</span>
					{props.salary}
				</Container>
			</Container>
		</Segment>
	)
}

const styles = {
	segment: {
		marginTop: '10px',
		padding: 0
	},
	date: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%'
	},
	form: {
		width: '75%',
		justifyContent: 'center',
		display: 'flex'
	},
	range: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '18px',
		fontWeight: '500',
		letterSpacing: '2px'
	},
	box: {
		padding: '0 5px 0 5px',
		borderBottom: '1px solid grey',
		borderTop: '1px solid grey',
		fontSize: '20px',
		fontWeight: '600'
	},
	calc: {
		marginTop: '20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '30px'
	}
}

export default DateForm
