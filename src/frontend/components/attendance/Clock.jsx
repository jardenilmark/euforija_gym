import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class Clock extends Component {
	componentDidMount() {
		this.clockId = setInterval(() => this.props.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.clockId)
	}

	render() {
		return (
			<Container>
				<p style={style.displayTime}>{this.props.time}</p>
			</Container>
		)
	}
}

const style = {
	displayTime: {
		color: 'white',
		fontSize: '1.8em',
		fontFamily: 'Lane'
	}
}

export default Clock
