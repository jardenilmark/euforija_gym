import React from 'react'
import ReactDOM from 'react-dom'
import store from '../backend/store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from '../backend/history'
import Component from './components/Body'

function renderComponent (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('mount-point')
  )
}

renderComponent(Component)
