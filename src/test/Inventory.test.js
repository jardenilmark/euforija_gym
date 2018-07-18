import React from 'react'
import shallow from './Enzyme.js'
import Inventory from '../frontend/components/Inventory'
import InventoryTable from '../frontend/components/InventoryTable'
import { Menu } from 'semantic-ui-react'

describe('<Inventory/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Inventory/>)
  })
  it('contains <InventoryTable>', () => {
    expect(wrapper.find(InventoryTable)).toHaveLength(1)
  })
  it('contains a Menu', () => {
    expect(wrapper.find(Menu)).toHaveLength(1)
  })
  it('Menu contains atleast 3 items. ', () => {
    expect(wrapper.find(Menu.Item).length).toBeGreaterThan(3)
  })
})
