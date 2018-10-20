import React from 'react'
import shallow from './Enzyme.js'
import Login from '../frontend/components/login/Login'
import { Header, Grid, Divider } from 'semantic-ui-react'

describe('<Login />', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Login />)
	})

	it('should render three <Header /> component', () => {
		expect(wrapper.find(Header)).toHaveLength(3)
	})
	it('should render one <Grid /> component', () => {
		expect(wrapper.find(Grid)).toHaveLength(1)
	})
	it('should render two <Grid.Column /> component', () => {
		expect(wrapper.find(Grid.Column)).toHaveLength(2)
	})
	it('should render one <Grid.Row /> component', () => {
		expect(wrapper.find(Grid.Row)).toHaveLength(1)
	})
	it('should render two <Divider /> component', () => {
		expect(wrapper.find(Divider)).toHaveLength(1)
	})
	it('should render two <Grid.Column /> inside the <Grid.Row /> component', () => {
		expect(
			wrapper
				.find(Grid.Row)
				.dive()
				.find(Grid.Column)
		).toHaveLength(2)
	})
	it('should render one <Grid.Row /> inside the <Grid /> component', () => {
		expect(
			wrapper
				.find(Grid)
				.dive()
				.find(Grid.Row)
		).toHaveLength(1)
	})
})
