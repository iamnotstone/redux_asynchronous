import thunkMiddleware from 'redux-thunk'
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {Map} from 'immutable'
import {createLogger} from 'redux-logger'

const defaultState = Map({
	inputContent: "Hello everyone!",
	outputContent: "I am waiting for you effort!"

})

const loggerMiddleware = createLogger()

const store = createStore(reducer, defaultState,
applyMiddleware(
	thunkMiddleware,
	loggerMiddleware	
		)
)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
