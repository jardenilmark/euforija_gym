import React from 'react'
import shallow from './Enzyme.js'
import Inventory from '../frontend/components/inventory/Inventory'
import { Menu, Table } from 'semantic-ui-react'

describe('<Inventory/>', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Inventory inventory={[]} filteredInv={[]} getInventory={jest.fn()} />)
	})
	it('contains a table', () => {
		expect(wrapper.find(Table)).toHaveLength(2)
	})
	it('contains a Table.Body', () => {
		expect(wrapper.find(Table.Body)).toHaveLength(1)
	})
	it('contains atleast 3 HeaderCells', () => {
		expect(wrapper.find(Table.HeaderCell).length).toBeGreaterThanOrEqual(3)
	})
	it('contains a Menu', () => {
		expect(wrapper.find(Menu)).toHaveLength(1)
	})
	it('Menu contains atleast 3 items. ', () => {
		expect(wrapper.find(Menu.Item).length).toBeGreaterThan(3)
	})
})
