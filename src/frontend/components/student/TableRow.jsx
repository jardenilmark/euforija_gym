import React from 'react'
import { Table, Header, Image, Button, Popup, Label } from 'semantic-ui-react'

const invokeFunctions = (
	toggleFormVisibility,
	toggleProfileVisibility,
	setClickedStudent,
	student
) => {
	toggleFormVisibility(false)
	toggleProfileVisibility(true)
	setClickedStudent(student)
}

const TableRow = ({
	student,
	toggleProfileVisibility,
	setClickedStudent,
	toggleFormVisibility,
	removeStudent
}) => {
	return (
		<Table.Row>
			<Table.Cell>
				<Header as={'h2'} image style={styles.header}>
					<Image src={student.image} circular />
					<Header.Content>
						{student.lastName}, {student.firstName}
						<Header.Subheader>
							<Label content={student.idNumber} style={{ marginLeft: -2 }} />
						</Header.Subheader>
					</Header.Content>
				</Header>
				<Popup
					content={'view profile'}
					inverted
					trigger={
						<Button
							icon={'chevron right'}
							circular
							floated={'right'}
							style={styles.button}
							onClick={() =>
								invokeFunctions(
									toggleFormVisibility,
									toggleProfileVisibility,
									setClickedStudent,
									student
								)
							}
						/>
					}
				/>
				<Popup
					content={'delete student'}
					inverted
					trigger={
						<Button
							icon={'trash alternate outline'}
							circular
							floated={'right'}
							style={styles.button}
							onClick={() => removeStudent(student)}
						/>
					}
				/>
			</Table.Cell>
		</Table.Row>
	)
}

const styles = {
	button: {
		marginTop: 30
	},
	header: {
		padding: 5,
		margin: 0
	}
}

export default TableRow
