import { Chart } from 'react-google-charts'
import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

class IncomeReport extends Component {
	componentDidMount() {
		this.props.fetchSales()
	}
	getArray() {
		const initial = ['Date', 'Sales']
		const { sales, byItem } = this.props
		if (sales.length === 0) {
			return [initial, [0, 0]]
		}
		let arr = []
		if (byItem) {
			arr = [...this.props.sales]
		} else {
			for (let i = 0; i < sales.length; i++) {
				if (arr.length > 0) {
					let toAdd = true
					for (let j = 0; j < arr.length; j++) {
						if (
							new Date(sales[i].date).getDate() === new Date(arr[j].date).getDate() &&
							new Date(sales[i].date).getMonth() === new Date(arr[j].date).getMonth()
						) {
							arr[j].price += sales[i].price
							toAdd = false
						}
					}
					if (toAdd) {
						arr.push({ date: sales[i].date, price: sales[i].price })
					}
				} else {
					arr.push({ date: sales[i].date, price: sales[i].price })
				}
			}
		}
		return [
			initial,
			...arr.map(e => {
				return [new Date(e.date), e.price]
			})
		]
	}
	render() {
		return (
			<div>
				<Menu>
					<Menu.Item name={'Monthly'} />
					<Menu.Item name={'Yearly'} />
				</Menu>
				<Container
					style={{
						width: '50%',
						margin: 'auto'
					}}>
					<Chart
						width={'100vh'}
						height={'90vh'}
						chartType={'LineChart'}
						loader={<div>Loading Chart</div>}
						data={this.getArray()}
						options={{
							title: 'Income Report',
							hAxis: {
								title: 'Time'
							},
							vAxis: {
								title: 'Income'
							}
						}}
						chartPackages={['corechart', 'controls']}
						controls={[
							{
								controlType: 'ChartRangeFilter',
								options: {
									filterColumnIndex: 0,
									ui: {
										chartType: 'LineChart',
										chartOptions: {
											chartArea: { width: '90%', height: '50%' },
											hAxis: { baselineColor: 'none' }
										}
									}
								},
								controlPosition: 'bottom',
								controlWrapperParams: {
									state: {
										range: {
											start: new Date(this.getArray()[0]),
											end: new Date(this.getArray()[this.getArray().length - 1])
										}
									}
								}
							}
						]}
					/>
				</Container>
			</div>
		)
	}
}

export default IncomeReport
