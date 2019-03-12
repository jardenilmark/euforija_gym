import React from 'react'
import { Tab, Menu, Icon, Image, Header, Table, Divider } from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

const PersonalDetailsPane = student => (
	<div>
		<Image src={student.image} circular floated={'left'} />
		<Header as={'h1'}>
			<Header.Content>
				{student.lastName}, {student.firstName}
			</Header.Content>
			<HeaderSubHeader>
				<i>Contact Number: </i> <b>{student.contact}</b>
			</HeaderSubHeader>
			<HeaderSubHeader>
				<i>Emergency Contact Number: </i> <b>{student.emergencyContact}</b>
			</HeaderSubHeader>
			<HeaderSubHeader>
				<i>Birthdate: </i> <b>{student.birthday}</b>
			</HeaderSubHeader>
		</Header>
	</div>
)

const HealthPane = student => {
	const questionnaire = student.questionnaire
	const keys = Object.keys(questionnaire)
	const arr = keys.map(key => {
		return [key, questionnaire[key]]
	})
	const answers = arr.map(answer => {
		return (
			<Table.Row>
				<Table.Cell>
					<b>{answer[0]}</b>
				</Table.Cell>
				<Table.Cell>{answer[1]}</Table.Cell>
			</Table.Row>
		)
	})
	return (
		<Table celled collapsing>
			<Table.Body>{answers}</Table.Body>
		</Table>
	)
}

const TrainerPane = student => {
	const trainer = student.trainer
	return (
		<div>
			<Image src={trainer.image} floated={'left'} circular />
			<Header as={'h1'}>
				<Header.Content>
					{trainer.lastName}, {trainer.firstName}
				</Header.Content>
				<HeaderSubHeader>
					<i>Contact Number: </i> <b>{trainer.contactNumber}</b>
				</HeaderSubHeader>
				<HeaderSubHeader>
					<i>Address: </i> <b>{trainer.address}</b>
				</HeaderSubHeader>
				<HeaderSubHeader>
					<i>Birthdate: </i> <b>{trainer.birthdate}</b>
				</HeaderSubHeader>
			</Header>
		</div>
	)
}

const renderPanes = props => [
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'info'} /> Personal Details
			</Menu.Item>
		),
		render: () => (
			<Tab.Pane style={{ height: 300 }}>
				{<PersonalDetailsPane {...props.clickedStudent} />}
			</Tab.Pane>
		)
	},
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'heartbeat'} /> Health
			</Menu.Item>
		),
		render: () => (
			<Tab.Pane style={{ height: 600 }}>{<HealthPane {...props.clickedStudent} />}</Tab.Pane>
		)
	},
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'user'} /> Trainer
			</Menu.Item>
		),
		render: () => (
			<Tab.Pane style={{ height: 300 }}>
				<TrainerPane {...props.clickedStudent} />
			</Tab.Pane>
		)
	},
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'payment'} /> Payment
			</Menu.Item>
		),
		render: () => <Tab.Pane style={{ height: 700 }}>Tab 3 Content</Tab.Pane>
	}
]

const StudentProfile = props => {
	return <Tab panes={renderPanes(props)} style={{ margin: 30 }} />
}

export default StudentProfile
