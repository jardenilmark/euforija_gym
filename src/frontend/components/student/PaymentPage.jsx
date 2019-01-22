import React from 'react'
import { Header, Form, Radio, Container, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'
import CustomInput from '../custom/CustomInput'

const PaymentPage = props => {
	const { paymentMethod, setPaymentMethod, handleSubmit } = props
	return (
		<div>
			<Header size={'huge'}>Select Payment Option</Header>
			<Radio
				label={'Full Payment'}
				name={'paymentType'}
				checked={paymentMethod === 'full'}
				onClick={() => setPaymentMethod('full')}
			/>
			<Radio
				label={'Partial Payment'}
				name={'paymentType'}
				checked={paymentMethod === 'partial'}
				onClick={() => setPaymentMethod('partial')}
			/>
			<Form onSubmit={handleSubmit}>
				<div style={{ display: paymentMethod === 'partial' ? 'inline' : 'none' }}>
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
					<Button type={'submit'}>Submit</Button>
				</Container>
			</Form>
		</div>
	)
}

export default PaymentPage
