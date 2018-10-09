import React from 'react'
import { Container, Card, Image, Grid, Header, Icon, Button, Table } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import 'semantic-ui-css/semantic.min.css'

class Sale extends React.Component {
  componentDidMount () {
    this.props.getInventory()
  }

  renderCards () {
    const { setModalState, setClickedItem, inventory } = this.props
    console.log(inventory)
    return (
      <Card.Group itemsPerRow={4} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
        {inventory.map(val => {
          return (
            <Card key={val._id} onClick={() => {
              setModalState(true)
              setClickedItem(val)
            }}>
              <Image src={val.image}/>
              <Card.Content>
                {val.name}<br/>
                In stock: {val.quantity}
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

  renderTableContent () {
    const { overviewArr } = this.props
    return overviewArr.map(val => {
      return (
        <Table.Row key={val._id}>
          <Table.Cell>
            {val.name}
          </Table.Cell>
          <Table.Cell>
            {val.quantity}
          </Table.Cell>
          <Table.Cell>
            {val.price * val.quantity}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render () {
    return (
      <Grid style={{ height: '100%' }}>
        <EditModal />
        <Grid.Row>
          <Grid.Column width={12}>
            {this.renderCards()}
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
                <Table.Body>
                  {this.renderTableContent()}
                </Table.Body>
              </Table>
            </Container>
            <Button onClick={() => this.props.updateSales(this.props.overviewArr)}>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Sale
