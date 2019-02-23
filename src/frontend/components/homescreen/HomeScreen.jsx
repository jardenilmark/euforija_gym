import React, { Component } from 'react'
import { Menu, Header, Icon, Card, Image, Sidebar, Button, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

class HomeScreen extends Component {
	componentDidMount() {
		const { userLogin, checkStorage, loginChecked } = this.props
		if (!userLogin && !loginChecked) {
			checkStorage()
		} else {
			swal('ERROR FOUND', 'RESTRICTED ACCESS', 'error')
			window.location.assign('/')
		}
	}
	render() {
		const { loginChecked, userLogin, logout } = this.props
		if (loginChecked && userLogin) {
			const icons =
				userLogin.role === 'Owner'
					? ['unordered list', 'shopping cart', 'users', 'users', 'columns', 'chart area']
					: ['shopping cart', 'users', 'columns']
			const contents =
				userLogin.role === 'Owner'
					? ['Inventory', 'Sales', 'Staff', 'Students', 'Payroll', 'Income Reports']
					: ['Sales', 'Students', 'Payroll']
			const paths =
				userLogin.role === 'owner'
					? ['/inventory', '/sales', '/staff', '/student', '/payroll', '/income-report']
					: ['/sales', '/student', '/payroll']
			// TODO: fix responsiveness!

			const cards = icons.map((icon, index) => {
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
						icon={'labeled'}
						vertical
						visible
						width={'wide'}
						borderless
						style={styles.sidebar}>
						<Menu.Item>
							<Image src={userLogin.image} size={'small'} circular centered />
							<Header as={'h2'} style={styles.user}>
								{userLogin.firstName} {userLogin.lastName}
								<Header.Subheader>{userLogin.role}</Header.Subheader>
							</Header>
						</Menu.Item>
						<Menu.Item style={styles.item}>
							<Button animated fluid style={styles.logout} size={'huge'}>
								<Button.Content visible>Logout</Button.Content>
								<Button.Content hidden onClick={e => logout()}>
									<Icon name={'arrow right'} />
								</Button.Content>
							</Button>
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<div style={styles.cardsContainer}>
							<Card.Group itemsPerRow={2} style={styles.cards}>
								{cards}
							</Card.Group>
						</div>
					</Sidebar.Pusher>
				</div>
			)
		} else {
			return <Loader style={styles.loader}>Loading</Loader> // to configure
		}
	}
}

const styles = {
	div: {
		height: '100%'
	},
	loader: {
		height: '100vh',
		width: '100vh'
	},
	cardsContainer: {
		marginRight: 350
	},
	sidebar: {
		paddingTop: 15
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
