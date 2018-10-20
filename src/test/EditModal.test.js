import React from 'react'
import shallow from './Enzyme.js'
import EditModal from '../frontend/components/inventory/EditModal'
import EditForm from '../frontend/redux/containers/inventory/EditFormContainer'
import { Modal, Container, Header } from 'semantic-ui-react'

describe('<EditModal />', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<EditModal />)
	})
	it('must contain a Modal', () => {
		expect(wrapper.find(Modal)).toHaveLength(1)
	})
	it('must contain a Container', () => {
		expect(wrapper.find(Container)).toHaveLength(1)
	})
	it('Container must have text align center', () => {
		expect(wrapper.find(Container).props().textAlign).toBe('center')
	})
	it('must contain a Header', () => {
		expect(wrapper.find(Header)).toHaveLength(1)
	})
	it('must contain a form that edits items', () => {
		expect(wrapper.find(EditForm)).toHaveLength(1)
	})
})
