import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Container, Header } from 'semantic-ui-react'
import FieldComponent from '../custom/ImageField'

const InventoryForm = ({ handleSubmit, pristine, submitting }) => {
	return (
		<Form onSubmit={handleSubmit} autoComplete={'off'}>
			<Form.Group>
				<Form.Field style={styles.formField}>
					<label>
						<Header size={'small'} inverted style={styles.header}>
							Name
						</Header>
					</label>
					<Field name={'name'} component={'input'} type={'text'} style={styles.field} required />
				</Form.Field>
			</Form.Group>
			<Form.Group widths={'equal'}>
				<Form.Field style={styles.formField}>
					<label>
						<Header size={'small'} inverted style={styles.header}>
							Quantity
						</Header>
					</label>
					<Field
						name={'quantity'}
						component={'input'}
						type={'number'}
						style={styles.field}
						required
					/>
				</Form.Field>
				<Form.Field style={styles.formField}>
					<label>
						<Header size={'small'} inverted style={styles.header}>
							Unit
						</Header>
					</label>
					<Field name={'unit'} component={'input'} type={'text'} style={styles.field} required />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field style={styles.formField}>
					<label style={styles.label}>
						<Header size={'small'} inverted style={styles.header}>
							Price
						</Header>
					</label>
					<Field name={'price'} component={'input'} type={'number'} style={styles.field} required />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field style={styles.formField}>
					<label>
						<Header size={'small'} inverted style={styles.header}>
							Image
						</Header>
					</label>
					<Field name={'image'} component={FieldComponent} type={'file'} style={styles.field} />
				</Form.Field>
			</Form.Group>
			<Container textAlign={'right'} style={styles.container}>
				<Button type={'submit'} inverted disabled={pristine || submitting}>
					Submit
				</Button>
			</Container>
		</Form>
	)
}

const styles = {
	field: {
		borderBottom: '2px solid white',
		backgroundColor: 'transparent',
		color: 'white',
		width: '100%'
	},
	formField: {
		width: '100%'
	},
	header: {
		margin: 0
	}
}

export default InventoryForm
