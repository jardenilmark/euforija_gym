import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextFit from 'react-textfit'
import { TrainerName, CardsContainer } from './AttendanceStyled'

const TrainerCards = ({ trainers }) => (
	<CardsContainer>
		<Card.Group itemsPerRow={5}>
			{trainers.map(trainer => (
				<Card key={trainer._id}>
					<Image src={trainer.image} />
					<TrainerName>
						<TextFit mode="single" forceSingleModeWidth={false}>
							{trainer.firstName}
						</TextFit>
					</TrainerName>
				</Card>
			))}
		</Card.Group>
	</CardsContainer>
)

export default TrainerCards
