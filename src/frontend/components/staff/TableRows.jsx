import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

const TableExampleCollapsing = () => (
	<Table basic={'very'} celled collapsing selectable style={{ width: '100%', padding: '30' }}>
		<Table.Body>
			<Table.Row>
				<Table.Cell style={{ cursor: 'pointer' }}>
					<Header as={'h2'} image>
						<Image src={'https://react.semantic-ui.com/images/avatar/small/lena.png'} rounded />
						<Header.Content>
							Ronna Mae Firmo
							<Header.Subheader>Coach</Header.Subheader>
						</Header.Content>
					</Header>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell style={{ cursor: 'pointer' }}>
					<Header as={'h2'} image>
						<Image src={'https://react.semantic-ui.com/images/avatar/small/matthew.png'} rounded />
						<Header.Content>
							Mark Jardenil
							<Header.Subheader>Coach</Header.Subheader>
						</Header.Content>
					</Header>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell style={{ cursor: 'pointer' }}>
					<Header as={'h2'} image>
						<Image src={'https://react.semantic-ui.com/images/avatar/small/lindsay.png'} rounded />
						<Header.Content>
							Lindsay Cainglet
							<Header.Subheader>Maintenance</Header.Subheader>
						</Header.Content>
					</Header>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell style={{ cursor: 'pointer' }}>
					<Header as={'h2'} image>
						<Image src={'https://react.semantic-ui.com/images/avatar/small/mark.png'} rounded />
						<Header.Content>
							Lennar dela Puerta
							<Header.Subheader>Maintenance</Header.Subheader>
						</Header.Content>
					</Header>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
)

export default TableExampleCollapsing
