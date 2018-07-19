import React from 'react'
import shallow from './enzymeSetup.js'
import Login from '../components/Login.jsx'
import { Header, Grid } from 'semantic-ui-react'

describe('<Login />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  
  it('should render one <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })
  it('should render one <Header.Subheader /> component', () => {
    expect(wrapper.find(Header.Subheader)).toHaveLength(1)
  })
  it('should render one <Grid /> component', () => {
    expect(wrapper.find(Grid)).toHaveLength(1)
  })
  it('should render one <Grid.Column /> component', () => {
    expect(wrapper.find(Grid.Column)).toHaveLength(1)
  })
  it('should render one <Header.Subheader /> inside the <Header /> component', () => {
    expect(wrapper.find(Header).dive().find(Header.Subheader)).toHaveLength(1)
  })
  it('should render one <Grid.Column /> inside the <Grid /> component', () => {
    expect(wrapper.find(Grid).dive().find(Grid.Column)).toHaveLength(1)
  })
})
