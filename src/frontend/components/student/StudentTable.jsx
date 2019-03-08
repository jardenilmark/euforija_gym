import React from 'react'
import TableRow from './TableRow'
import { Table, Loader, Segment, Header, Icon } from 'semantic-ui-react'

class StudentTable extends React.Component {
	componentDidMount() {
		this.props.fetchStudents()
	}

	render() {
		let rows
		if (this.props.isFetching) {
			rows = (
				<Table.Row>
					<Table.Cell>
						<Segment style={styles.loaderSegment} basic>
							<Loader active content={'Loading Students...'} size={'big'} />
						</Segment>
					</Table.Cell>
				</Table.Row>
			)
		} else {
			if (this.props.students.length > 0) {
				rows = this.props.students.map((student, index) => {
					return (
						<TableRow
							student={student}
							key={index}
							toggleProfileVisibility={this.props.toggleProfileVisibility}
							toggleFormVisibility={this.props.toggleFormVisibility}
							setClickedStudent={this.props.setClickedStudent}
							removeStudent={this.props.removeStudent}
							editStudentProfile={this.props.editStudentProfile}
						/>
					)
				})
			} else {
				rows = (
					<Table.Row>
						<Table.Cell>
							<Segment placeholder style={styles.placeholderSegment} size={'big'}>
								<Header icon>
									<Icon name={'exclamation circle'} color={'red'} />
									<Header.Content>No student exists in the database.</Header.Content>
									<Header.Content>Click the button above to add one.</Header.Content>
								</Header>
							</Segment>
						</Table.Cell>
					</Table.Row>
				)
			}
		}

		return (
			<div>
				<Table basic={'very'} collapsing style={styles.table}>
					<Table.Body>{rows}</Table.Body>
				</Table>
			</div>
		)
	}
}

const styles = {
	table: {
		width: '100%',
		padding: 30,
		paddingTop: 0
	},
	placeholderSegment: {
		border: 'dotted 5px'
	},
	loaderSegment: {
		height: 200
	}
}

export default StudentTable
