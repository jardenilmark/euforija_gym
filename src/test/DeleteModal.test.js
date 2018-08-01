import React from 'react'
import shallow from './Enzyme.js'
import DeleteModal from '../frontend/components/inventory/DeleteModal'
import { Modal, Container } from 'semantic-ui-react'

describe('<DeleteModal />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<DeleteModal />)
  })
  it('must contain a modal', () => {
    expect(wrapper.find(Modal)).toHaveLength(1)
  })
  it('must contain a container', () => {
    expect(wrapper.find(Container).length).toBeGreaterThanOrEqual(1)
  })
  it('first container must have text align right', () => {
    expect(wrapper.find(Container).at(0).props().textAlign).toBe('right')
  })
  it('second container must have text align middle', () => {
    expect(wrapper.find(Container).at(1).props().textAlign).toBe('center')
  })
})
