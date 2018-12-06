import React from 'react'
import { Menu, Header, Icon, Card, Image, Sidebar, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
	const icons = ['table', 'money', 'users', 'student', 'columns', 'chart line']
	const contents = ['Inventory', 'Sales', 'Staff', 'Students', 'Payroll', 'Income Reports']
	const paths = ['/inventory', '/sales', '/staff', '/students', '/payroll', '/income-reports']

	const cards = icons.map((icon, index) => {
		return (
			<Card raised as={Link} to={paths[index]} key={index}>
				<Card.Content textAlign={'center'}>
					<Header style={styles.header}>
						<center>
							<Icon name={icon} />
						</center>
						<Header.Content>{contents[index]}</Header.Content>
					</Header>
				</Card.Content>
			</Card>
		)
	})

	return (
		<div style={styles.div}>
			<Sidebar
				as={Menu}
				icon={'labeled'}
				vertical
				visible
				width={'wide'}
				borderless
				style={{ padding: 0 }}>
				{/* <Menu.Item>
					<Image src={'./assets/images/logo.jpg'} />
				</Menu.Item> */}
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
				<Card.Group>{/* {cards} */}</Card.Group>
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
	}
}

export default HomeScreen
