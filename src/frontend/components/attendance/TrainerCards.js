import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { TrainerName, CardsContainer } from './AttendanceStyled'

const TrainerCards = ({ trainers }) => (
	<CardsContainer>
		<Card.Group itemsPerRow={5}>
			{trainers.map(trainer => (
				<Card key={trainer._id}>
					<Image src={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
					<TrainerName>{trainer.firstName}</TrainerName>
				</Card>
			))}
		</Card.Group>
	</CardsContainer>
)

export default TrainerCards
