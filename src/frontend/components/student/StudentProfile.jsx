import React from 'react'
import {
	Tab,
	Menu,
	Icon,
	Image,
	Header,
	Table,
	Statistic,
	Button,
	Reveal,
	Label,
	Divider
} from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'
import NumberFormat from 'react-number-format'
import date from 'date-fns'
import RenewModal from '../../redux/containers/student/RenewModal'

const handleSubmit = (values, props) => {
	let payment = props.trainingPrice
	if (props.paymentMethod === 'partial') {
		payment = values.amount
	}

	props.renewMembership(payment, props.clickedStudent._id)
}

const PersonalDetailsPane = props => {
	const student = props.clickedStudent
	const isMembershipExpired = date.differenceInMonths(new Date(), student.membershipDate) >= 1
	const trigger = <Button disabled={!isMembershipExpired}>Renew Membership</Button>
	return (
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
				<HeaderSubHeader>
					<i>Date Joined: </i> <b>{date.format(student.membershipDate, 'MMMM D, YYYY')}</b>
				</HeaderSubHeader>
				<Divider style={{ width: 600 }} />
				<RenewModal
					trigger={trigger}
					id={student._id}
					onSubmit={values => handleSubmit(values, props)}
				/>
			</Header>
		</div>
	)
}

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
		<Table celled>
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

const PaymentPane = props => {
	const student = props.clickedStudent
	const balance = props.trainingPrice - student.amount
	return (
		<Statistic.Group size={'tiny'} widths={'four'}>
			<Statistic>
				<Statistic.Value>
					<NumberFormat
						value={props.trainingPrice}
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
				</Statistic.Value>
				<Statistic.Label>Training Price</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>
					<NumberFormat
						value={student.amount}
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
				</Statistic.Value>
				<Statistic.Label>Amount Paid</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>
					<NumberFormat
						value={balance}
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
				</Statistic.Value>
				<Statistic.Label>Remaining Balance</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>
					{balance == 0 ? (
						<Label style={{ color: 'green', fontSize: 20, padding: 5, width: '243' }}>
							<b>FULLY PAID</b>
						</Label>
					) : (
						<Reveal animated="move up">
							<Reveal.Content hidden>
								<Button fluid>Make Payment</Button>
							</Reveal.Content>
							<Reveal.Content visible>
								<Label style={{ color: 'red', fontSize: 20, padding: 5, width: '243' }}>
									<b>PARTIALLY PAID</b>
								</Label>
							</Reveal.Content>
						</Reveal>
					)}
				</Statistic.Value>
				<Statistic.Label>Payment Status</Statistic.Label>
			</Statistic>
		</Statistic.Group>
	)
}

const renderPanes = props => [
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'info'} /> Personal Details
			</Menu.Item>
		),
		render: () => <Tab.Pane style={{ height: 300 }}>{<PersonalDetailsPane {...props} />}</Tab.Pane>
	},
	{
		menuItem: (
			<Menu.Item style={{ fontSize: '18' }}>
				<Icon name={'heartbeat'} /> Health
			</Menu.Item>
		),
		render: () => (
			<Tab.Pane style={{ height: 600, paddingLeft: 150, paddingRight: 150 }}>
				{<HealthPane {...props.clickedStudent} />}
			</Tab.Pane>
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
		render: () => <Tab.Pane style={{ height: 80 }}>{<PaymentPane {...props} />}</Tab.Pane>
	}
]

class StudentProfile extends React.Component {
	componentDidMount() {
		this.props.getPrice()
	}

	render() {
		return <Tab panes={renderPanes(this.props)} style={{ margin: 30 }} />
	}
}

export default StudentProfile
