import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import CreateStaff from '../../redux/containers/staff/CreateStaffContainer'

const Create = props => {
	return (
		<div style={style.outerArea}>
			<Card fluid raised>
				<Card.Header textAlign={'center'} style={style.header}>
					<Header size={'huge'}>Create Staff</Header>
				</Card.Header>
				<Card.Content>
					<CreateStaff onSubmit={e => props.createStaff(e)} />
				</Card.Content>
			</Card>
		</div>
	)
}

const style = {
	outerArea: {
		paddingRight: '20%',
		paddingLeft: '20%',
		paddingTop: '7%',
		background: '#CAACE0',
		height: '100vh'
	},
	header: {
		padding: 20
	}
}
export default Create
