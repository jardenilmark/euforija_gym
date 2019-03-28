import React from 'react'
import { Button, TransitionablePortal, Segment, Header, Form, Divider } from 'semantic-ui-react'
import { Field } from 'redux-form'
import CustomInput from '../custom/CustomInput'
import NumberFormat from 'react-number-format'

const PaymentModal = ({ trainingPrice, trigger, handleSubmit, amountPaid }) => {
	return (
		<TransitionablePortal closeOnTriggerClick openOnTriggerClick trigger={trigger}>
			<Segment style={{ left: '40%', position: 'fixed', top: '30%', zIndex: 1000 }}>
				<div>
					<Header size={'small'} color={'red'} style={{ margin: 0, marginBottom: 10 }}>
						Current Balance:
						<NumberFormat
							value={trainingPrice - amountPaid}
							displayType={'text'}
							prefix={' '}
							thousandSeparator={true}
							renderText={value => <b>{value}.00</b>}
						/>
					</Header>
					<Divider fitted />
					<Header size={'medium'} style={{ margin: 0, marginBottom: 10, marginTop: 10 }}>
						Please enter the amount you want to pay:
					</Header>
					<Form onSubmit={handleSubmit}>
						<div
							style={{
								width: '100%',
								marginTop: 10
							}}>
							<Field
								name={'amount'}
								component={CustomInput}
								{...{
									type: 'number'
								}}
							/>
						</div>
						<Divider />
						<div style={{ textAlign: 'right', marginBottom: -10, marginTop: 10 }}>
							<Button type={'submit'}>Confirm Payment</Button>
						</div>
					</Form>
				</div>
			</Segment>
		</TransitionablePortal>
	)
}

export default PaymentModal
