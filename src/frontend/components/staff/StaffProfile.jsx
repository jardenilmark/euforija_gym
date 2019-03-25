import React from 'react'
import { Segment, Image, Header, Icon, Divider, List, Label, Message } from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

const Students = ({ students, role }) => {
	let studentList = (
		<List.Item>
			<Message icon="info circle" header="No enrolled students under this coach." size={'mini'} />
		</List.Item>
	)

	if (students && students.length > 0 && role === 'Coach') {
		studentList = students.map((student, index) => {
			return (
				<List.Item>
					<Image avatar src={student.image} verticalAlign={'middle'} />
					<List.Content>
						<List.Header>
							{student.lastName}, {student.firstName}
						</List.Header>
						<List.Description>
							<Label content={student.id} style={{ marginLeft: -2 }} size={'tiny'} />
						</List.Description>
					</List.Content>
				</List.Item>
			)
		})
	} else if (role === 'Maintenance') {
		studentList = (
			<List.Item>
				<Message
					icon="info circle"
					header="Maintenance staff are not eligible to train students."
					size={'mini'}
				/>
			</List.Item>
		)
	}

	return (
		<List divided relaxed size={'huge'} style={{ marginRight: '50%' }}>
			{studentList}
		</List>
	)
}

const StaffProfile = ({ clickedStaff }) => {
	const staff = clickedStaff
	return (
		<Segment basic style={{ padding: 40 }}>
			<Segment basic>
				<Image src={staff.image} circular size={'small'} floated={'left'} />
				<Header as={'h1'}>
					<Header.Content>
						{staff.lastName}, {staff.firstName}
					</Header.Content>
					<HeaderSubHeader>
						<Icon name={'briefcase'} /> <b>{staff.role}</b>
					</HeaderSubHeader>
					<HeaderSubHeader>
						<Icon name={'text telephone'} /> <b>{staff.contactNumber}</b>
					</HeaderSubHeader>
					<HeaderSubHeader>
						<Icon name={'location arrow'} /> <b>{staff.address}</b>
					</HeaderSubHeader>
				</Header>
				<Divider style={styles.divider} />
				<Students students={staff.students} role={staff.role} />
			</Segment>
		</Segment>
	)
}

const styles = {
	divider: {
		marginTop: 50
	}
}

export default StaffProfile
