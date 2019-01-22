import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

const StaffProfile = () => {
	return (
		<Segment basic style={{ padding: 40 }}>
			<Header as={'h1'}>
				<Header.Content>Ronna Mae Firmo</Header.Content>
				<HeaderSubHeader>Coach</HeaderSubHeader>
			</Header>
		</Segment>
	)
}

export default StaffProfile
