import React from 'react'
import { Divider, Image, Container, Icon, Placeholder } from 'semantic-ui-react'
import TextFit from 'react-textfit'
import date from 'date-fns'

const ProfileDisplay = ({ selectedStaff }) => (
	<Container style={styles.main}>
		<Image src={selectedStaff.image} style={styles.image} />
		<Divider />
		<Container style={styles.name}>{selectedStaff.idNumber}</Container>
		<Container style={styles.name}>
			<TextFit max={22} min={22}>
				{selectedStaff.firstName} {selectedStaff.lastName}
			</TextFit>
		</Container>
		<Divider />
		<Container style={styles.info}>
			<Icon name={'suitcase'} /> {selectedStaff.role}
		</Container>
		<Container style={styles.info}>
			<Icon name={'phone'} /> {selectedStaff.contactNumber}
		</Container>
		<Container>
			<TextFit max={15} min={15}>
				<Icon name={'map marker alternate'} /> {selectedStaff.address}
			</TextFit>
		</Container>
		<Divider />
		<Container style={styles.info}>
			<Icon name={selectedStaff.gender} />
			{`${selectedStaff.gender.charAt(0).toUpperCase()}${selectedStaff.gender.slice(1)}`}
		</Container>
		<Container style={styles.info}>
			<Icon name={'birthday cake'} />{' '}
			{date.format(new Date(selectedStaff.birthdate), 'MMM D, YYYY')}
		</Container>
	</Container>
)

const ProfilePlaceholder = () => (
	<Container style={styles.main}>
		<Placeholder>
			<Placeholder.Image square />
		</Placeholder>
		<Divider />
		<Placeholder>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder>
		<Divider />
		<Placeholder>
			<Placeholder.Line />
			<Placeholder.Line />
			<Placeholder.Paragraph>
				<Placeholder.Line />
				<Placeholder.Line />
				<Placeholder.Line />
			</Placeholder.Paragraph>
		</Placeholder>
		<Divider />
		<Placeholder>
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder>
	</Container>
)

const Profile = ({ selectedStaff }) =>
	selectedStaff ? <ProfileDisplay selectedStaff={selectedStaff} /> : <ProfilePlaceholder />

const styles = {
	main: {
		marginTop: '26px',
		paddingTop: 0
	},
	info: {
		fontSize: '15px'
	},
	name: {
		fontWeight: '600'
	},
	image: {
		width: '100%',
		height: 'auto'
	}
}

export default Profile
