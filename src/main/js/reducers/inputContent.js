import {Map} from 'immutable'

let defaultInput = Map({})
const inputContent = (state = defaultInput, action) =>{
	switch(action.type)
	{
		case 'INPUT_CONTENT_CHANGED':
			return state.set('inputContent',action.text)
			//return state
			break
		default:
			return state
	
	
	}
}

export default inputContent
