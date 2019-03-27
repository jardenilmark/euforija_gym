import React from 'react'
import {
	Button,
	TransitionablePortal,
	Segment,
	Header,
	Form,
	Radio,
	Divider
} from 'semantic-ui-react'
import { Field } from 'redux-form'
import CustomInput from '../custom/CustomInput'

const RenewModal = ({ trainingPrice, paymentMethod, trigger, setPaymentMethod, handleSubmit }) => {
	return (
		<TransitionablePortal closeOnTriggerClick openOnTriggerClick trigger={trigger}>
			<Segment style={{ left: '40%', position: 'fixed', top: '30%', zIndex: 1000 }}>
				<div>
					<Header size={'medium'}>Please select your payment option of choice:</Header>
					<div style={{ width: 350 }}>
						<div>
							<Radio
								label={`Full Payment (${trainingPrice})`}
								name={'paymentType'}
								checked={paymentMethod === 'full'}
								toggle
								onClick={() => setPaymentMethod('full')}
							/>
						</div>
						<Divider />
						<div>
							<Radio
								label={'Partial Payment'}
								name={'paymentType'}
								checked={paymentMethod === 'partial'}
								toggle
								onClick={() => setPaymentMethod('partial')}
							/>
						</div>
					</div>

					<Form onSubmit={handleSubmit}>
						<div
							style={{
								display: paymentMethod === 'partial' ? 'block' : 'none',
								width: 200,
								marginTop: 20
							}}>
							<Field
								name={'amount'}
								component={CustomInput}
								{...{
									header: 'Amount',
									type: 'number',
									isRequired: paymentMethod === 'partial' ? undefined : true
								}}
							/>
						</div>
						<div style={{ textAlign: 'right', marginBottom: -10 }}>
							<Button type={'submit'}>Submit</Button>
						</div>
					</Form>
				</div>
			</Segment>
		</TransitionablePortal>
	)
}

export default RenewModal
