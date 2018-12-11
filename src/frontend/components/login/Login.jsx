import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../../redux/containers/login/LoginFormContainer'

const Login = props => {
	return (
		<Grid textAlign={'center'} verticalAlign={'middle'} style={styles.grid}>
			<Grid.Row>
				<Grid.Column width={6}>
					<LoginForm onSubmit={props.handleLogin} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

const styles = {
	grid: {
		height: '100%'
	}
}

export default Login
