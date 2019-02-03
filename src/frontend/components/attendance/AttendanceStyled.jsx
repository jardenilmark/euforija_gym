import { Segment, Image, Container, Grid, Header, Label, Card, List } from 'semantic-ui-react'
import styled from 'styled-components'

export const ProfileSegment = styled(Segment)({
	border: '1px solid #808080 !important',
	marginTop: '10px !important',
	marginLeft: '20px !important',
	height: '75%',
	backgroundColor: '#fbf5fe !important'
})

export const ProfileImage = styled(Image)({
	width: '80%',
	height: 'auto',
	maxHeight: '80%',
	display: 'block',
	margin: 'auto'
})

export const VisitedLabel = styled(Label)({
	backgroundColor: '#CAACE0 !important',
	textAlign: 'center',
	fontSize: '12pt !important',
	color: '#140520 !important'
})

export const Name = styled(Container)({
	height: '30%',
	padding: '50px',
	fontSize: '3em !important',
	textAlign: 'center'
})

export const MainGrid = styled(Grid)({
	height: '90%',
	width: '100%'
})

export const LogGrid = styled(Grid)({
	height: '100% ',
	width: '100%',
	margin: '0 !important',
	padding: '0 !important'
})

export const LogsContainer = styled(Container)({
	border: '2px solid #808080',
	borderRadius: '5px',
	boxShadow: '0 0 2px 1px #cccccc',
	backgroundColor: '#ffffff',
	margin: '12px 0 12px 0 !important',
	width: '100% !important'
})

export const LogsRow = styled(Grid.Row)({
	margin: '0 !important',
	padding: '0 !important',
	height: '48%'
})

export const LogTrainerCol = styled(Grid.Column)({
	padding: '10px !important'
})

export const TrainerSegment = styled(Segment)({
	border: '2px solid #808080 !important',
	boxShadow: '0 0 2px 1px #cccccc !important',
	height: '100%'
})

export const HeaderLogo = styled(Image)({
	marginLeft: '50px !important',
	height: '90% !important',
	width: 'auto !important',
	float: 'left'
})

export const ClockContainer = styled(Container)({
	verticalAlign: 'middle',
	padding: '18px !important',
	height: '100%'
})

export const AppHeader = styled(Header)({
	backgroundColor: '#640088',
	margin: '0 !important',
	padding: '0 !important',
	height: '10%',
	textAlign: 'center'
})

export const ParentContainer = styled(Container)({
	margin: '0 !important',
	padding: '0 !important',
	width: '100% !important',
	height: '100% !important',
	backgroundColor: '#f4e8fc !important',
	overflow: 'hidden'
})

export const CardsContainer = styled(Container)({
	marginTop: '10px'
})

export const TrainerName = styled(Card.Content)({
	fontWeight: 'bold',
	padding: '5px'
})

export const VisitorList = styled(List)({
	height: '83%',
	overflowY: 'auto',
	overflowX: 'hidden'
})

export const VisitorListItem = styled(List.Item)({
	padding: '7px !important'
})

export const VisitorName = styled(List.Content)({
	float: 'left'
})

export const VisitorTimeIn = styled(List.Content)({
	float: 'right'
})
