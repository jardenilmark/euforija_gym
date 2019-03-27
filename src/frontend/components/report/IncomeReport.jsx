import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { getData } from '../../helpers/irHelper'
import FloatingButton from '../custom/FloatingButton'

ReactChartkick.addAdapter(Chart)

class IncomeReport extends Component {
	componentDidMount() {
		const { fetchSales } = this.props
		fetchSales()
	}
	render() {
		const { byItem, setChart } = this.props
		return (
			<div>
				<Menu>
					<Menu.Item name={'By Total'} onClick={e => setChart(false)} active={!byItem} />
					<Menu.Item name={'By Item'} onClick={e => setChart(true)} active={byItem} />
				</Menu>
				<Container style={style.container}>
					<LineChart
						height={'90%'}
						data={getData(this.props)}
						xtitle={'Time'}
						ytitle={'Income'}
						legend={'bottom'}
						discrete={true}
					/>
				</Container>
				<FloatingButton />
			</div>
		)
	}
}

const style = {
	container: {
		width: '95%',
		height: '90%',
		margin: 'auto'
	}
}

export default IncomeReport
