import React, { Component } from 'react'
import {
	Menu,
	Header,
	Icon,
	Card,
	Image,
	Sidebar,
	Button,
	Loader,
	Divider,
	Modal,
	Form,
	Label
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HomeScreen extends Component {
	componentDidMount() {
		const { userLogin, checkStorage, loginChecked } = this.props
		if (!userLogin && !loginChecked) {
			checkStorage()
		}
	}
	render() {
		const {
			loginChecked,
			userLogin,
			logout,
			setPrice,
			priceModal,
			toggleModal,
			onChangePrice,
			priceOnChange
		} = this.props
		if (loginChecked && userLogin) {
			const contents =
				userLogin.role === 'Owner'
					? ['Inventory', 'Sales', 'Staff', 'Students', 'Payroll', 'Income Reports']
					: ['Sales', 'Students', 'Payroll']
			const paths =
				userLogin.role === 'Owner'
					? ['/inventory', '/sales', '/staff', '/student', '/payroll', '/income-report']
					: ['/sales', '/student', '/payroll']
			const images =
				userLogin.role === 'Owner'
					? [
							'cart.png',
							'receipt.png',
							'collaboration.png',
							'network.png',
							'check.png',
							'presentation.png'
					  ]
					: ['receipt.png', 'network.png', 'check.png']
			// TODO: fix responsiveness!

			const cards = images.map((image, index) => {
				const imgSrc = './assets/images/' + image
				return (
					<Card raised as={Link} to={paths[index]} key={index} style={{ height: 420 }}>
						<Card.Content textAlign={'center'}>
							<Image src={imgSrc} size={'medium'} centered id={'img'} />
							<Divider style={{ marginBottom: 30 }} />
							<label style={styles.cardLabel}>{contents[index]}</label>
						</Card.Content>
					</Card>
				)
			})

			return (
				<div>
					<Sidebar
						as={Menu}
						icon={'labeled'}
						vertical
						visible
						animation={'push'}
						borderless
						style={styles.sidebar}>
						<Menu.Item fitted>
							<Image src={'./assets/images/loginLogo.png'} size={'medium'} centered />
							<Divider />
							<Image src={userLogin.image} size={'small'} circular centered />
							<Header as={'h1'} style={styles.user}>
								{userLogin.firstName} {userLogin.lastName}
								<Header.Subheader>{userLogin.role}</Header.Subheader>
							</Header>
						</Menu.Item>
						<Menu.Item style={userLogin.role === 'Owner' ? {} : styles.price}>
							{/* change ui */}
							<Modal
								trigger={
									<Button fluid size={'massive'} onClick={e => toggleModal(true)}>
										Change Price
									</Button>
								}
								open={priceModal}
								onClose={e => {
									onChangePrice(0)
									toggleModal(false)
								}}>
								<Modal.Content>
									<Form
										onSubmit={() => {
											setPrice(priceOnChange)
											toggleModal(false)
										}}>
										<Form.Input
											label={'Set Price'}
											name={'price'}
											type={'number'}
											onChange={e => onChangePrice(e.target.value)}
										/>
										<Button color="green" type={'submit'} inverted>
											Submit
										</Button>
									</Form>
								</Modal.Content>
							</Modal>
						</Menu.Item>
						<Menu.Item style={styles.item}>
							<Button animated fluid style={styles.logout} size={'massive'} onClick={e => logout()}>
								<Button.Content visible>Logout</Button.Content>
								<Button.Content hidden>
									<Icon name={'arrow right'} />
								</Button.Content>
							</Button>
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<div style={styles.cardsContainer}>
							<Card.Group itemsPerRow={3} style={styles.cards}>
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
	price: {
		display: 'none'
	},
	loader: {
		height: '100vh',
		width: '100vh'
	},
	cardsContainer: {
		marginRight: 230,
		paddingTop: 50,
		height: '100%'
	},
	sidebar: {
		paddingTop: 15,
		padding: 0,
		width: 300
	},
	user: {
		margin: 0,
		marginTop: 15,
		fontFamily: 'Code',
		fontWeight: 'bold'
	},
	item: {
		padding: 0,
		bottom: 0,
		position: 'absolute',
		width: '100%'
	},
	logout: {
		borderRadius: 0,
		fontFamily: 'Lane'
	},
	cards: {
		marginLeft: '5%',
		marginRight: '5%'
	},
	cardLabel: {
		fontSize: '60px',
		fontFamily: 'Lane',
		fontWeight: 'bolder',
		color: 'black'
	}
}

export default HomeScreen
