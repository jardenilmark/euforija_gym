import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'

const SaleForm = ({ handleSubmit, pristine, submitting }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<div>
				<label>
					<Header size={'small'} inverted style={styles.header}>
						Number of Items
					</Header>
				</label>
				<div>
					<Field
						name={'quantity'}
						component={'input'}
						type={'number'}
						placeholder={'place value here...'}
						style={styles.field}
						required
					/>
				</div>
			</div>
			<Container textAlign={'right'} style={styles.container}>
				<Button type={'submit'} disabled={pristine || submitting}>
					Add to Cart
				</Button>
			</Container>
		</Form>
	)
}

const styles = {
	container: {
		paddingTop: '20px'
	},
	header: {
		marginBottom: '7px'
	},
	field: {
		borderBottom: '2px solid white',
		backgroundColor: 'transparent',
		color: 'white'
	}
}

export default SaleForm
