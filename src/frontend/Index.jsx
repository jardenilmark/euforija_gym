import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import Component from './components/Body'

function renderComponent(Component) {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Component />
			</Router>
		</Provider>,
		document.getElementById('mount-point')
	)
}

renderComponent(Component)
