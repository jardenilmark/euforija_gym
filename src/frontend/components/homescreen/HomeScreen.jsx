import React from 'react'
import { Menu, Header, Icon, Button, Container, Card, Divider } from 'semantic-ui-react'

const HomeScreen = () => {
  return (
    <div>
      <Menu borderless>
        <Menu.Item header>
          <Header as='h5'>
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
          <Button inverted color='red'>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
      <Header textAlign='center' style={{ fontSize: 60 }}>
        EUFORIJA FITNESS
      </Header>
      <Divider/>
      <Container>
        <Card.Group itemsPerRow='2' centered>
          <Card raised>
            <Card.Content textAlign='center'>
              <Header style={{fontSize: 40}}>
                <Icon name='table'/>
                Inventory
              </Header>
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content textAlign='center'>
              <Header style={{fontSize: 40}}>
                <Icon name='money'/>
                Sales
              </Header>
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content textAlign='center'>
              <Header style={{fontSize: 40}}>
                <Icon name='users'/>
                Staff
              </Header>
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content textAlign='center'>
              <Header style={{fontSize: 40}}>
                <Icon name='users'/>
                Students
              </Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  )
}

export default HomeScreen