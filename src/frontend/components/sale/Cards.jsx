import React from 'react'
import { Card, Image, Label, Loader } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'

const Cards = ({ setModalState, setClickedItem, inventory, isFetchingInventory }) => {
	if (isFetchingInventory) {
		return <Loader active content={'Fetching items from inventory...'} size={'huge'} />
	}
	return (
		<Card.Group stackable itemsPerRow={5} style={styles.cardGroup}>
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
							In Stock: {<Label content={val.quantity} circular color={color} size={'medium'} />}
							<Label
								tag
								size={'medium'}
								content={
									<strong>
										<NumberFormat
											value={val.price}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'₱ '}
											renderText={value => (
												<b>
													{value}
													.00
												</b>
											)}
										/>
									</strong>
								}
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
