import React from 'react'
import { Menu, Header, Icon, Card, Image, Sidebar, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
	const icons = ['unordered list', 'shopping cart', 'users', 'student', 'columns', 'chart area']
	const contents = ['Inventory', 'Sales', 'Staff', 'Students', 'Payroll', 'Income Reports']
	const paths = ['/inventory', '/sales', '/staff', '/students', '/payroll', '/income-reports']

	const Cards = icons.map((icon, index) => {
		return (
			<Card raised as={Link} to={paths[index]} key={index} color={'blue'}>
				<Card.Content textAlign={'center'}>
					<Icon name={icon} size={'massive'} />
					<br />
					<br />
					<label style={styles.cardLabel}>{contents[index]}</label>
				</Card.Content>
			</Card>
		)
	})

	return (
		<div style={styles.div}>
			<Sidebar
				as={Menu}
				icon="labeled"
				vertical
				visible
				width={'wide'}
				borderless
				style={{ paddingTop: 15 }}>
				<Menu.Item>
					<Image src={'./assets/images/images.png'} size={'small'} circular centered />
					<Header as={'h2'} style={styles.user}>
						Mark Jardenil
						<Header.Subheader>Owner</Header.Subheader>
					</Header>
				</Menu.Item>
				<Menu.Item style={styles.item}>
					<Button animated fluid style={styles.logout} size={'huge'}>
						<Button.Content visible>Logout</Button.Content>
						<Button.Content hidden>
							<Icon name={'arrow right'} />
						</Button.Content>
					</Button>
				</Menu.Item>
			</Sidebar>
			<Sidebar.Pusher>
				<div style={{ marginRight: '350px' }}>
					<Card.Group itemsPerRow={2} style={styles.cards}>
						{cards}
					</Card.Group>
				</div>
			</Sidebar.Pusher>
		</div>
	)
}

const styles = {
	div: {
		height: '100%'
	},
	header: {
		margin: 0,
		marginTop: 10,
		fontSize: '70px',
		textAlign: 'center'
	},
	user: {
		margin: 0,
		marginTop: 8
	},
	item: {
		padding: 0,
		bottom: 0,
		position: 'absolute',
		width: '100%'
	},
	logout: {
		borderRadius: 0
	},
	cards: {
		marginLeft: '5%',
		marginRight: '5%',
		height: '70%',
		paddingTop: '10%',
		paddingBottom: '10%'
	},
	cardLabel: {
		fontSize: '50px',
		fontWeight: 'bold'
	}
}

export default HomeScreen
