import React from 'react'
import shallow from './Enzyme.js'
import AddModal from '../frontend/components/inventory/AddModal'
import AddForm from '../frontend/redux/containers/inventory/AddFormContainer'
import { Modal, Container, Header } from 'semantic-ui-react'

describe('<AddModal />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AddModal />)
  })
  it('must contain a Modal', () => {
    expect(wrapper.find(Modal)).toHaveLength(1)
  })
  it('must contain a Container that has text-align center', () => {
    expect(wrapper.find(Container).props().textAlign).toBe('center')
  })
  it('must contain a Header', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })
  it('must contain a Form that adds new items', () => {
    expect(wrapper.find(AddForm)).toHaveLength(1)
  })
})
