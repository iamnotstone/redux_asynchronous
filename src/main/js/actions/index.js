import fetch from 'isomorphic-fetch'

export const inputContentChanged = value => {
	return {
		type:'INPUT_CONTENT_CHANGED',
		text:value
	
	}
}

export const postContent = content => {
	return {
		type:'POST_CONTENT',
		text:content
	}
}

export const receiveContent = json => {
	return {
		type:'RECEIVE_CONTENT',
		data:json	
	}
}

export function fetchPost(content){

	return function (dispatch){
		dispatch(postContent(content))
		console.log('starting fetch')
		return fetch('../getMirror',{
			method: "POST",
			body:content,
			headers: {
   				 "Content-Type": "text/plain;charset=UTF-8"
 			 }
		})
		.then(
			response => {
				console.log('return response')
				return response.text()
				//return "nonon"
			},
			error => console.log('Unknown error',error)
		)
		.then(
			json => dispatch(receiveContent(json))
		)
	
	}

}
