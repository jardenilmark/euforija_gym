import React from 'react'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

const FloatingButton = () => {
	return (
		<Fab
			mainButtonStyles={{ backgroundColor: 'black', fontSize: '25', fontFamily: 'Lane' }}
			icon={'A'}
			event={'hover'}>
			<Action
				text="Home Screen"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/home')}>
				H
			</Action>
			<Action
				text="Sales"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/sales')}>
				S
			</Action>
			<Action
				text="Staff"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/staff')}>
				S
			</Action>
			<Action
				text="Income Reports"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/income-report')}>
				I
			</Action>
			<Action
				text="Student"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/student')}>
				S
			</Action>
			<Action
				text="Payroll"
				style={{
					backgroundColor: 'transparent',
					fontSize: '20',
					fontFamily: 'Lane',
					color: 'black'
				}}
				onClick={() => window.location.assign('/payroll')}>
				P
			</Action>
		</Fab>
	)
}

export default FloatingButton
