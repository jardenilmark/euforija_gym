import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../../redux/containers/login/LoginFormContainer'

class Login extends Component {
	componentDidMount() {
		console.log(this.props)
		this.props.hasJWT()
	}
	render() {
		return (
			<Grid textAlign={'center'} verticalAlign={'middle'} style={styles.grid}>
				<Grid.Row>
					<Grid.Column width={6}>
						<LoginForm onSubmit={this.props.handleLogin} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const styles = {
	grid: {
		height: '100%'
	}
}

export default Login
