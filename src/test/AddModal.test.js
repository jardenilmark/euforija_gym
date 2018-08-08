import React from 'react'
import shallow from './Enzyme.js'
import AddModal from '../frontend/components/inventory/AddModal'
import AddForm from '../frontend/redux/containers/inventory/AddFormContainer'
import { Modal, Container } from 'semantic-ui-react'

describe('<AddModal />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AddModal />)
  })
  it('must contain a modal', () => {
    expect(wrapper.find(Modal)).toHaveLength(1)
  })
  it('must contain a container that has text-align center', () => {
    expect(wrapper.find(Container).props().textAlign).toBe('center')
  })
  it('must contain a form that adds new items', () => {
    expect(wrapper.find(AddForm)).toHaveLength(1)
  })
})
