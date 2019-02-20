import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchBar from '../../redux/containers/payroll/SearchBarContainer'

const Search = props => (
	<Segment basic style={styles.segment}>
		<SearchBar
			onSubmit={e => {
				alert('eeee', e, 'yyyyyy')
			}}
		/>
	</Segment>
)

const styles = {
	segment: {
		marginLeft: '0px',
		marginTop: '10px',
		padding: 0
	}
}

export default Search
