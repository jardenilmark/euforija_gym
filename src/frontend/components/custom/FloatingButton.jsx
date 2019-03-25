import React from 'react'
import { Fab, Action } from 'react-tiny-fab'
import { Icon, Button } from 'semantic-ui-react'
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
				text="Inventory"
				style={{ backgroundColor: 'black' }}
				// onClick={handleHelpOnClick}
			>
				{/* <i className="fa fa-help" /> */}
			</Action>
			<Action
				text="Sales"
				style={{ backgroundColor: 'black' }}
				// onClick={handleHelpOnClick}
			>
				{/* <i className="fa fa-help" /> */}
			</Action>
			<Action
				text="Staff"
				style={{ backgroundColor: 'black' }}
				// onClick={handleHelpOnClick}
			>
				{/* <i className="fa fa-help" /> */}
			</Action>
			<Action
				text="Student"
				style={{ backgroundColor: 'black' }}
				// onClick={handleHelpOnClick}
			>
				{/* <i className="fa fa-help" /> */}
			</Action>
			<Action
				text="Payroll"
				style={{ backgroundColor: 'black' }}
				// onClick={handleHelpOnClick}
			>
				{/* <i className="fa fa-help" /> */}
			</Action>
		</Fab>
	)
}

export default FloatingButton
