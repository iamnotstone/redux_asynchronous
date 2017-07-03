import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {Map} from 'immutable'

const defaultState = Map({
	inputContent: "Hello everyone!",
	outputContent: "I am waiting for you effort!"

})

const store = createStore(reducer, defaultState)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
