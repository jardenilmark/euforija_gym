import React from 'react'
import { Header, Form, Radio, Container, Button, Divider } from 'semantic-ui-react'
import { Field } from 'redux-form'
import CustomInput from '../custom/CustomInput'

const PaymentPage = props => {
	const { paymentMethod, setPaymentMethod, handleSubmit } = props
	return (
		<div>
			<Header size={'medium'}>Please select your payment option of choice:</Header>
			<div style={{ width: 350 }}>
				<div>
					<Radio
						label={'Full Payment'}
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
				<Container textAlign={'right'}>
					<Button type={'button'} onClick={() => props.setActiveForm('trainer')}>
						Previous
					</Button>
					<Button type={'submit'}>Submit</Button>
				</Container>
			</Form>
		</div>
	)
}

export default PaymentPage
