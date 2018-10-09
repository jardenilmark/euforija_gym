import React from 'react'
import { Menu, Header, Icon, Button, Card, Image } from 'semantic-ui-react'
import { StyledContainer, StyledHeaderContent, StyledCard, StyledIcon } from './StyledComponents'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const icons = ['table', 'money', 'users', 'student', 'columns', 'chart line']
  const contents = ['Inventory', 'Sales', 'Staff', 'Students', 'Payroll', 'Income Reports']
  const paths = ['/inventory', '/sales', '/staff', '/students', '/payroll', '/income-reports']

  const cards = icons.map((icon, index) => {
    return (
      <StyledCard raised as={Link} to={paths[index]} key={index}>
        <Card.Content textAlign='center'>
          <Header style={{ margin: 0 }}>
            <center>
              <StyledIcon name={icon} />
            </center>
            <StyledHeaderContent>
              {contents[index]}
            </StyledHeaderContent>
          </Header>
        </Card.Content>
      </StyledCard>)
  })

  return (
    <div style={{ height: '100%', backgroundColor: '#f4e8fc' }}>
      <div style={{ backgroundColor: '#541087', marginBottom: -15, height: '12%', padding: 10 }}>
        <Image src='/images/logo.jpg' style={{ height: '100%' }} centered/>
      </div>
      <Menu borderless style={{ height: '10%', borderRadius: 0 }} size='huge'>
        <Menu.Item header>
          <Header as='h3' >
            <Icon name='user' circular inverted />
            <Header.Content>
              Danddie Porras
              <Header.Subheader>
                Owner
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button animated='fade' color='black' as={Link} to='/login'>
            <Button.Content visible>
              Logout
            </Button.Content>
            <Button.Content hidden>
              <Icon name='angle double right' />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu>
      <StyledContainer>
        <div style={{ height: '10%' }} />
        <Card.Group itemsPerRow='2' centered style={{ height: '80%', marginTop: 2 }}>
          {cards}
        </Card.Group>
      </StyledContainer>
    </div>
  )
}

export default HomeScreen
