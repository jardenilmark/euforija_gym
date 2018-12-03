import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

const Cards = ({ setModalState, setClickedItem, inventory }) => {
	return (
		<Card.Group
			stackable
			itemsPerRow={5}
			style={styles.cardGroup}>
			{inventory.map(val => {
				const color = val.quantity < 5 ? 'red' : 'green'
				return (
					<Card
						raised
						key={val._id}
						color={'green'}
						onClick={() => {
							setModalState(true)
							setClickedItem(val)
						}}>
						<Image src={val.image} style={styles.img} />
						<Card.Content>
							<Card.Header>{val.name}</Card.Header>
						</Card.Content>
						<Card.Content extra>
							In Stock: {<Label content={val.quantity} circular color={color} size='medium' />}
							<Label
								tag
								size={'medium'}
								// color={'black'}
								content={<strong>₱ {val.price}.00</strong>}
								style={styles.label}
							/>
						</Card.Content>
					</Card>
				)
			})}
		</Card.Group>
	)
}

const styles = {
	img: {
		width: '100%',
		height: '22%'
	},
	label: {
		float: 'right'
	},
	cardGroup: {
		paddingTop: '10px',
		paddingLeft: '10px'
	}
}

export default Cards
