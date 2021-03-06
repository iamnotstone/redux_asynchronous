import {combineReducers} from 'redux-immutable'
import inputContent from './inputContent'
import outputContent from './outputContent'
import {Map} from 'immutable'

//const reducers = combineReducers({
//	inputContent,
//	outputContent
//})

let defaultInput = Map({})
const reducers = (state = defaultInput, action) =>{
	switch(action.type)
	{
		case 'INPUT_CONTENT_CHANGED':
			return state.set('inputContent',action.text)
			//return state
			break;
		case 'POST_CONTENT':
			return state
			break;
		case 'RECEIVE_CONTENT':
			return state.set('outputContent',action.data)
			break
		default:
			return state
	
	
	}
}
export default reducers
