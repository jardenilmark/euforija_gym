import React from 'react'
import shallow from './Enzyme.js'
import DeleteModal from '../frontend/components/inventory/DeleteModal'
import { Modal, Container, Header } from 'semantic-ui-react'

describe('<DeleteModal />', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<DeleteModal />)
	})
	it('must contain a Modal', () => {
		expect(wrapper.find(Modal)).toHaveLength(1)
	})
	it('must contain a Container', () => {
		expect(wrapper.find(Container)).toHaveLength(1)
	})
	it('must contain a Header', () => {
		expect(wrapper.find(Header)).toHaveLength(1)
	})
	it('Header must have text align center', () => {
		expect(wrapper.find(Header).props().textAlign).toBe('center')
	})
})
