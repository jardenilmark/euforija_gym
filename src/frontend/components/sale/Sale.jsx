import React from 'react'
import { Container, Card, Image, Grid, Header, Icon, Button, Table, Label } from 'semantic-ui-react'
import EditModal from '../../redux/containers/sale/EditModalContainer'
import 'semantic-ui-css/semantic.min.css'

class Sale extends React.Component {
  componentDidMount() {
    this.props.getInventory()
  }

  renderCards() {
    const { setModalState, setClickedItem, inventory } = this.props
    console.log(inventory)
    return (
      <Card.Group itemsPerRow={6} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
        {inventory.map(val => {
          return (
            <Card key={val._id} onClick={() => {
              setModalState(true)
              setClickedItem(val)
            }}>
              <Label attached='top' content={<span>₱ {val.price}</span>} color='orange' size='large' />
              <Image src={val.image} />
              <Card.Content>
                <Card.Header>{val.name}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                In Stock: {<Label content={val.quantity} circular color='grey' />}
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    )
  }

  renderTableContent() {
    const { overviewArr } = this.props
    return overviewArr.map(val => {
      return (
        <Table.Row key={val._id} textAlign='center'>
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

  render() {
    return (
      <Grid style={{ height: '100%' }}>
        <EditModal />
        <Grid.Row divided>
          <Grid.Column width={12}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={4} textAlign='center' style={{ height: '100%', padding: '20', backgroundColor: 'blue' }}>
            <Header as='h2' icon>
              <Icon name='shopping basket'/>
              Overview of Orders  
            </Header>
            <Container fluid style={{ height: '70%', backgroundColor: 'red' }}>
              <Table>
                <Table.Header>
                  <Table.Row textAlign='center'>
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
