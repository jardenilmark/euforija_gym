import React from 'react'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

const arr = [
	{ text: 'Home Screen', location: '/home', letter: 'H' },
	{ text: 'Sales', location: '/sales', letter: 'S' },
	{ text: 'Student', location: '/student', letter: 'S' },
	{ text: 'Staff', location: '/staff', letter: 'S' },
	{ text: 'Inventory', location: '/inventory', letter: 'I' },
	{ text: 'Income Reports', location: '/income-report', letter: 'I' },
	{ text: 'Payroll', location: '/payroll', letter: 'P' }
]
const FloatingButton = () => {
	return (
		<Fab
			mainButtonStyles={{ backgroundColor: 'black', fontSize: '25', fontFamily: 'Lane' }}
			icon={'A'}
			event={'hover'}>
			{arr
				.filter(e => window.location.pathname !== e.location)
				.map(e => {
					return (
						<Action
							text={e.text}
							key={e.text}
							style={{
								backgroundColor: 'transparent',
								fontSize: '20',
								fontFamily: 'Lane',
								color: 'black'
							}}
							onClick={() => window.location.assign(e.location)}>
							{e.letter}
						</Action>
					)
				})}
		</Fab>
	)
}

export default FloatingButton
