import React from 'react'
import { Container, Card, Image, Grid, Header, Icon, Button, Table } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import 'semantic-ui-css/semantic.min.css'
import placeholder from '../../../../testPics/download.jpg'

class Sale extends React.Component {
  componentDidMount () {
    this.props.getInventory()
  }
  renderCards (arr) {
    const { setModalState, setClickedItem } = this.props
    return (
      <Card.Group itemsPerRow={4} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
        {arr.map(val => {
          return (
            <Card key={val._id} onClick={() => {
              setModalState(true)
              setClickedItem(val)
            }}>
              <Image src={placeholder}/>
              <Card.Content>
                {val.name}
              </Card.Content>
              <Card.Content>
              ₱{val.price}
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    )
  }

  render () {
    console.log(this.props.overviewArr)
    return (
      <Grid style={{ height: '100%' }}>
        <EditModal />
        <Grid.Row>
          <Grid.Column width={12}>
            {this.renderCards(this.props.inventory)}
          </Grid.Column>
          <Grid.Column width={4} style={{ background: 'blue', height: '100%', padding: '0' }}>
            <Header as='h1'>
              <Container fluid textAlign='center' style={{ paddingTop: '10px' }}>
                Overview
              </Container>
              <Container fluid textAlign='center' style={{ paddingTop: '10px' }}>
                <Icon name='shopping basket' size='big' />
              </Container>
            </Header>
            <Container fluid style={{ height: '50%', background: 'white' }}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Price
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
            </Container>
            <Button>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Sale
