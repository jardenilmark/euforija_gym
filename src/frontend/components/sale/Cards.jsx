import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

const Cards = ({ setModalState, setClickedItem, inventory }) => {
	return (
		<Card.Group
			itemsPerRow={6}
			style={{
				paddingTop: '10px',
				paddingLeft: '10px'
			}}>
			{inventory.map(val => {
				return (
					<Card
						key={val._id}
						onClick={() => {
							setModalState(true)
							setClickedItem(val)
						}}>
						<Label
							attached={'top'}
							content={<span>₱ {val.price}</span>}
							color={'orange'}
							size={'large'}
						/>
						<Image src={val.image} />
						<Card.Content>
							<Card.Header>{val.name}</Card.Header>
						</Card.Content>
						<Card.Content extra>
							In Stock: {<Label content={val.quantity} circular color={'grey'} />}
						</Card.Content>
					</Card>
				)
			})}
		</Card.Group>
	)
}

export default Cards
