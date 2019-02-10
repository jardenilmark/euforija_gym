import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import FieldComponent from '../custom/ImageField'

const InventoryForm = ({ handleSubmit, pristine, submitting }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<div style={styles.div}>
				<label style={styles.label}>
					<Header size={'small'} inverted>
						Name
					</Header>
				</label>
				<div>
					<Field
						name={'name'}
						component={'input'}
						type={'text'}
						style={styles.field}
						required
						padded
					/>
				</div>
			</div>
			<div style={styles.div}>
				<label style={styles.label}>
					<Header size={'small'} inverted>
						Quantity
					</Header>
				</label>
				<div>
					<Field
						name={'quantity'}
						component={'input'}
						type={'number'}
						style={styles.field}
						required
						padded
					/>
				</div>
			</div>
			<div style={styles.div}>
				<label style={styles.label}>
					<Header size={'small'} inverted>
						Price
					</Header>
				</label>
				<div>
					<Field
						name={'price'}
						component={'input'}
						type={'number'}
						style={styles.field}
						required
						padded
					/>
				</div>
			</div>
			<div>
				<label>
					<Header size={'small'} inverted>
						Image
					</Header>
				</label>
				<div>
					<Field name={'image'} component={FieldComponent} type={'file'} style={styles.field} />
				</div>
			</div>
			<Container textAlign={'right'} style={styles.container}>
				<Button type={'submit'} inverted disabled={pristine || submitting}>
					Submit
				</Button>
			</Container>
		</Form>
	)
}

const styles = {
	div: {
		marginBottom: '8px'
	},
	container: {
		paddingTop: '20px'
	},
	field: {
		borderBottom: '2px solid white',
		backgroundColor: 'transparent',
		color: 'white'
	},
	label: {
		marginBottom: '8px'
	}
}

export default InventoryForm
